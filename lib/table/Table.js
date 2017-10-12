'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = exports.tableFactory = undefined;

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformHmr3 = require('react-transform-hmr');

var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssThemr = require('react-css-themr');

var _filterReactChildren = require('../utils/filter-react-children');

var _filterReactChildren2 = _interopRequireDefault(_filterReactChildren);

var _isComponentOfType = require('../utils/is-component-of-type');

var _isComponentOfType2 = _interopRequireDefault(_isComponentOfType);

var _identifiers = require('../identifiers');

var _TableHead = require('./TableHead');

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Table: {
    displayName: 'Table',
    isInFunction: true
  }
};

var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
  filename: '/Users/matthieugayon/Documents/development/cloub/react-toolbox/components/table/Table.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: '/Users/matthieugayon/Documents/development/cloub/react-toolbox/components/table/Table.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);
  };
}

var factory = function factory(TableHead, TableRow) {
  var _class, _temp2;

  var isTableHead = function isTableHead(child) {
    return (0, _isComponentOfType2.default)(TableHead, child);
  };
  var isTableRow = function isTableRow(child) {
    return (0, _isComponentOfType2.default)(TableRow, child);
  };

  var Table = _wrapComponent('Table')((_temp2 = _class = function (_Component) {
    _inherits(Table, _Component);

    function Table() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Table);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Table.__proto__ || Object.getPrototypeOf(Table)).call.apply(_ref, [this].concat(args))), _this), _this.getRowTuples = function () {
        return _react3.default.Children.toArray((0, _filterReactChildren2.default)(_this.props.children, isTableRow)).map(function (child, index) {
          return [index, Boolean(child.props.selected)];
        });
      }, _this.handleHeadSelect = function (value) {
        if (_this.props.onRowSelect) {
          _this.props.onRowSelect(value ? _this.getRowTuples().map(function (item) {
            return item[0];
          }) : []);
        }
      }, _this.handleRowSelect = function (idx) {
        if (_this.props.onRowSelect) {
          if (_this.props.multiSelectable) {
            var current = _this.getRowTuples().filter(function (item) {
              return item[1];
            }).map(function (item) {
              return item[0];
            });
            var rowIndex = current.indexOf(idx);
            var indexes = rowIndex !== -1 ? [].concat(_toConsumableArray(current.slice(0, rowIndex)), _toConsumableArray(current.slice(rowIndex + 1))) : [].concat(_toConsumableArray(current), [idx]);
            _this.props.onRowSelect(indexes);
          } else {
            _this.props.onRowSelect([idx]);
          }
        }
      }, _this.renderHead = function () {
        var tuples = _this.getRowTuples();
        var selected = tuples.filter(function (item) {
          return item[1];
        }).length === tuples.length;
        return _react3.default.Children.map((0, _filterReactChildren2.default)(_this.props.children, isTableHead), function (child) {
          return (0, _react2.cloneElement)(child, {
            selected: selected,
            multiSelectable: _this.props.multiSelectable,
            onSelect: _this.handleHeadSelect,
            selectable: _this.props.selectable
          });
        });
      }, _this.renderRows = function () {
        return _react3.default.Children.map((0, _filterReactChildren2.default)(_this.props.children, isTableRow), function (child, idx) {
          return (0, _react2.cloneElement)(child, {
            idx: idx,
            onSelect: _this.handleRowSelect,
            selectable: _this.props.selectable
          });
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Table, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            multiSelectable = _props.multiSelectable,
            onRowSelect = _props.onRowSelect,
            selectable = _props.selectable,
            theme = _props.theme,
            rest = _objectWithoutProperties(_props, ['className', 'multiSelectable', 'onRowSelect', 'selectable', 'theme']);

        return _react3.default.createElement(
          'table',
          _extends({}, rest, { className: (0, _classnames2.default)(theme.table, className) }),
          _react3.default.createElement(
            'thead',
            { className: theme.head },
            this.renderHead()
          ),
          _react3.default.createElement(
            'tbody',
            null,
            this.renderRows()
          )
        );
      }
    }]);

    return Table;
  }(_react2.Component), _class.propTypes = {
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    multiSelectable: _propTypes2.default.bool,
    onRowSelect: _propTypes2.default.func,
    selectable: _propTypes2.default.bool,
    theme: _propTypes2.default.shape({
      head: _propTypes2.default.string,
      table: _propTypes2.default.string
    })
  }, _class.defaultProps = {
    className: '',
    multiSelectable: false,
    selectable: true
  }, _temp2));

  return Table;
};

var Table = factory(_TableHead2.default, _TableRow2.default);
exports.default = (0, _reactCssThemr.themr)(_identifiers.TABLE)(Table);
exports.tableFactory = factory;
exports.Table = Table;