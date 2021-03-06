'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Task2 = require('./Task');

var _Task3 = _interopRequireDefault(_Task2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ActivityTask
 * Simple wrapper around an activity task poll reponse.
 */

var ActivityTask = (function (_Task) {
  _inherits(ActivityTask, _Task);

  function ActivityTask() {
    _classCallCheck(this, ActivityTask);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ActivityTask).apply(this, arguments));
  }

  return ActivityTask;
})(_Task3.default);

exports.default = ActivityTask;
;