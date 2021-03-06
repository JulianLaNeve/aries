'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = singleS3FileInput;

var _aws = require('../util/aws');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { var callNext = step.bind(null, "next"); var callThrow = step.bind(null, "throw"); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(callNext, callThrow); } } callNext(); }); }; }

function singleS3FileInput(removeAfter) {

    // Acting as a factory, return the decorator function.
    return function (target, key, descriptor) {
        // Copy of the original function.
        var callback = descriptor.value;

        // Create s3 client.
        var client = (0, _aws.createS3Client)();

        // Return a new descriptor with our new wrapper function.
        return _extends({}, descriptor, {
            value: function value(activityTask) {
                var _this = this;

                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    var params, response, input, newActivityTask, newArgs, result;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    // Create params.
                                    params = {
                                        Bucket: process.env.AWS_S3_TEMP_BUCKET,
                                        Key: activityTask.input
                                    };

                                    // Download file.

                                    _context.next = 3;
                                    return client.getObject(params);

                                case 3:
                                    response = _context.sent;

                                    // Get a string.
                                    input = response.Body.toString();

                                    // Create new activityTask replacing the original input with the file.

                                    newActivityTask = _extends({}, activityTask, { input: input });

                                    // Create args for original function.

                                    newArgs = [newActivityTask].concat(args);

                                    // Return the result.

                                    _context.next = 9;
                                    return callback.apply(_this, newArgs);

                                case 9:
                                    result = _context.sent;

                                    if (!removeAfter) {
                                        _context.next = 14;
                                        break;
                                    }

                                    _context.next = 13;
                                    return client.deleteObject(params);

                                case 13:
                                    _this.log.info('Deleted ' + params.Key);

                                case 14:
                                    return _context.abrupt('return', result);

                                case 15:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this);
                }))();
            }
        });
    };
};