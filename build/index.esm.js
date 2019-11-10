import React from 'react';

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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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

var setConfigDefaults = function (config) {
    var result = __assign({}, config);
    result.isOpen = result.isOpen === undefined ? false : result.isOpen;
    result.size = result.size === undefined ? 'full' : result.size;
    result.data = result.data === undefined ? {} : result.data;
    result.screens = result.screens === undefined ? [] : result.screens;
    return result;
};

var withData = function (WrappedComponent, data) { return function (props) { return React.createElement(WrappedComponent, __assign({}, props, data)); }; };

var PegasusModal = /** @class */ (function (_super) {
    __extends(PegasusModal, _super);
    function PegasusModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PegasusModal.prototype.renderFirstScreen = function (configWithDefaults) {
        if (configWithDefaults.screens && configWithDefaults.screens.length) {
            var ScreenWithData = withData(configWithDefaults.screens[0], configWithDefaults.data);
            return React.createElement(ScreenWithData, null);
        }
        return null;
    };
    PegasusModal.prototype.render = function () {
        var config = this.props.config;
        var configWithDefaults = setConfigDefaults(config);
        console.log('config', config, configWithDefaults);
        return (React.createElement("div", { style: { color: 'green' } }, this.renderFirstScreen(configWithDefaults)));
    };
    return PegasusModal;
}(React.Component));

export { PegasusModal };
//# sourceMappingURL=index.esm.js.map
