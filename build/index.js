'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var initConfigDefaults = function (config) {
    var result = __assign({}, config);
    result.isOpen = result.isOpen === undefined ? false : result.isOpen;
    result.size = result.size === undefined ? 'full' : result.size;
    result.data = result.data === undefined ? {} : result.data;
    result.screens = result.screens === undefined ? [] : result.screens;
    return result;
};

var withData = function (WrappedComponent, data) { return function (props) { return React__default.createElement(WrappedComponent, __assign({}, props, { data: data })); }; };

var PegasusModal = function (_a) {
    var config = _a.config;
    var _b = React.useState(initConfigDefaults(config)), configWithDefaults = _b[0], setConfigWithDefaults = _b[1];
    React.useEffect(function () {
        setConfigWithDefaults(__assign(__assign({}, configWithDefaults), { isOpen: config.isOpen }));
    }, [config.isOpen]);
    var renderFirstScreen = function (configWithDefaults) {
        if (configWithDefaults.screens && configWithDefaults.screens.length) {
            var ScreenWithData = withData(configWithDefaults.screens[0], configWithDefaults.data);
            return React__default.createElement(ScreenWithData, null);
        }
        return null;
    };
    var displayStyle = function (isOpen) {
        return isOpen ? 'block' : 'none';
    };
    return (React__default.createElement("div", { style: {
            color: 'green',
            display: displayStyle(configWithDefaults.isOpen)
        } }, renderFirstScreen(configWithDefaults)));
};

exports.PegasusModal = PegasusModal;
//# sourceMappingURL=index.js.map
