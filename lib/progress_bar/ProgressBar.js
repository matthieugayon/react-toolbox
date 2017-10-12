'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = undefined;

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _reactCssThemr = require('react-css-themr');

var _identifiers = require('../identifiers');

var _prefixer = require('../utils/prefixer');

var _prefixer2 = _interopRequireDefault(_prefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ProgressBar: {
    displayName: 'ProgressBar'
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: '/Users/matthieugayon/Documents/development/cloub/react-toolbox/components/progress_bar/ProgressBar.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: '/Users/matthieugayon/Documents/development/cloub/react-toolbox/components/progress_bar/ProgressBar.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var ProgressBar = _wrapComponent('ProgressBar')((_temp = _class = function (_Component) {
  _inherits(ProgressBar, _Component);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
  }

  _createClass(ProgressBar, [{
    key: 'calculateRatio',
    value: function calculateRatio(value) {
      if (value < this.props.min) return 0;
      if (value > this.props.max) return 1;
      return (value - this.props.min) / (this.props.max - this.props.min);
    }
  }, {
    key: 'circularStyle',
    value: function circularStyle() {
      return this.props.mode !== 'indeterminate' ? { strokeDasharray: 2 * Math.PI * 25 * this.calculateRatio(this.props.value) + ', 400' } : undefined;
    }
  }, {
    key: 'linearStyle',
    value: function linearStyle() {
      if (this.props.mode !== 'indeterminate') {
        return {
          buffer: (0, _prefixer2.default)({ transform: 'scaleX(' + this.calculateRatio(this.props.buffer) + ')' }),
          value: (0, _prefixer2.default)({ transform: 'scaleX(' + this.calculateRatio(this.props.value) + ')' })
        };
      }
      return {};
    }
  }, {
    key: 'renderCircular',
    value: function renderCircular() {
      return _react3.default.createElement(
        'svg',
        { className: this.props.theme.circle, viewBox: '0 0 60 60' },
        _react3.default.createElement('circle', { className: this.props.theme.path, style: this.circularStyle(), cx: '30', cy: '30', r: '25' })
      );
    }
  }, {
    key: 'renderLinear',
    value: function renderLinear() {
      var _linearStyle = this.linearStyle(),
          buffer = _linearStyle.buffer,
          value = _linearStyle.value;

      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement('span', { 'data-ref': 'buffer', className: this.props.theme.buffer, style: buffer }),
        _react3.default.createElement('span', { 'data-ref': 'value', className: this.props.theme.value, style: value })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          className = _props.className,
          disabled = _props.disabled,
          max = _props.max,
          min = _props.min,
          mode = _props.mode,
          multicolor = _props.multicolor,
          type = _props.type,
          theme = _props.theme,
          value = _props.value;

      var _className = (0, _classnames3.default)(theme[type], (_classnames = {}, _defineProperty(_classnames, theme.indeterminate, mode === 'indeterminate'), _defineProperty(_classnames, theme.multicolor, multicolor), _classnames), className);

      return _react3.default.createElement(
        'div',
        {
          disabled: disabled,
          'data-react-toolbox': 'progress-bar',
          'aria-valuenow': value,
          'aria-valuemin': min,
          'aria-valuemax': max,
          className: _className
        },
        type === 'circular' ? this.renderCircular() : this.renderLinear()
      );
    }
  }]);

  return ProgressBar;
}(_react2.Component), _class.propTypes = {
  buffer: _propTypes2.default.number,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  max: _propTypes2.default.number,
  min: _propTypes2.default.number,
  mode: _propTypes2.default.oneOf(['determinate', 'indeterminate']),
  multicolor: _propTypes2.default.bool,
  theme: _propTypes2.default.shape({
    buffer: _propTypes2.default.string,
    circle: _propTypes2.default.string,
    circular: _propTypes2.default.string,
    indeterminate: _propTypes2.default.string,
    linear: _propTypes2.default.string,
    multicolor: _propTypes2.default.string,
    path: _propTypes2.default.string,
    value: _propTypes2.default.string
  }),
  type: _propTypes2.default.oneOf(['linear', 'circular']),
  value: _propTypes2.default.number
}, _class.defaultProps = {
  buffer: 0,
  className: '',
  max: 100,
  min: 0,
  mode: 'indeterminate',
  multicolor: false,
  type: 'linear',
  value: 0
}, _temp));

exports.default = (0, _reactCssThemr.themr)(_identifiers.PROGRESS_BAR)(ProgressBar);
exports.ProgressBar = ProgressBar;