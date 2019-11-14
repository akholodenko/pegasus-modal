import React, { useState, useEffect } from 'react';

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
    result.onOpen = result.onOpen === undefined ? function () { } : result.onOpen;
    return result;
};

var ModalContainer = function (_a) {
    var screens = _a.screens, data = _a.data, onClose = _a.onClose, isOpen = _a.isOpen;
    var close = function () {
        onClose();
    };
    var renderFirstScreen = function () {
        if (screens && screens.length) {
            var Screen_1 = screens[0];
            return React.createElement(Screen_1, { data: data });
        }
        return null;
    };
    var displayStyle = function (isOpen) { return (isOpen ? 'block' : 'none'); };
    var containerStyle = {
        display: displayStyle(isOpen),
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        paddingTop: '50px'
    };
    var closeButtonStyle = {
        position: 'absolute',
        right: '15px',
        top: '10px',
        fontSize: '30px',
        fontWeight: 100,
        cursor: 'pointer'
    };
    return (React.createElement("div", { style: containerStyle },
        React.createElement("div", { onClick: function () {
                close();
            }, style: closeButtonStyle }, "\u00D7"),
        renderFirstScreen()));
};

var PegasusModal = function (_a) {
    var config = _a.config;
    var _b = useState(initConfigDefaults(config)), configWithDefaults = _b[0], setConfigWithDefaults = _b[1];
    useEffect(function () {
        setConfigWithDefaults(__assign(__assign({}, configWithDefaults), { isOpen: config.isOpen }));
        if (config.isOpen && configWithDefaults.onOpen) {
            configWithDefaults.onOpen();
        }
    }, [config.isOpen]);
    var onClose = function () {
        if (typeof configWithDefaults.onClose === 'function') {
            configWithDefaults.onClose();
        }
    };
    return (React.createElement(ModalContainer, { data: configWithDefaults.data, screens: configWithDefaults.screens, onClose: onClose, isOpen: !!configWithDefaults.isOpen }));
};

export { PegasusModal };
//# sourceMappingURL=index.esm.js.map
