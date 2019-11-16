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
    result.onOpen = result.onOpen === undefined ? function () { } : result.onOpen;
    result.onNext = result.onNext === undefined ? function () { } : result.onNext;
    result.footer = result.footer === undefined ? 'inline' : result.footer;
    result.startScreenIndex =
        result.startScreenIndex === undefined ? 0 : result.startScreenIndex;
    return result;
};

var Footer = function (_a) {
    var type = _a.type, isFirstScreen = _a.isFirstScreen, isLastScreen = _a.isLastScreen, next = _a.next, prev = _a.prev;
    var stickyFooterStyle = {
        position: 'absolute',
        bottom: '50px',
        left: '0',
        width: '100%',
        height: '50px',
        borderTop: '1px solid #ccc',
        textAlign: 'center'
    };
    var footerContent = function () {
        return (React__default.createElement("div", null,
            !isFirstScreen && React__default.createElement("button", { onClick: function () { return prev(); } }, "prev"),
            !isLastScreen && React__default.createElement("button", { onClick: function () { return next(); } }, "next")));
    };
    var footerByType = function (type) {
        switch (type) {
            case 'sticky':
                return React__default.createElement("div", { style: stickyFooterStyle }, footerContent());
            case 'none':
                return React__default.createElement("div", null);
            case 'inline':
            default:
                return React__default.createElement("div", null, "inline footer");
        }
    };
    return footerByType(type);
};

var CONTAINER_HALF_SIZE = 'half';
var ModalContainer = function (_a) {
    var screens = _a.screens, data = _a.data, onClose = _a.onClose, onNext = _a.onNext, onPrev = _a.onPrev, isOpen = _a.isOpen, footer = _a.footer, size = _a.size, startScreenIndex = _a.startScreenIndex;
    var _b = React.useState(startScreenIndex || 0), currentScreenIndex = _b[0], setCurrentScreenIndex = _b[1];
    var _c = React.useState(data), inputData = _c[0], setInputData = _c[1];
    var close = function () { return onClose(__assign({}, inputData)); };
    var renderScreen = function (Screen, index) {
        return (React__default.createElement(Screen, { data: inputData, isFirstScreen: isFirstScreen(index), isLastScreen: isLastScreen(index), isOpen: isOpen, next: next, prev: prev, updateData: updateData }));
    };
    var displayStyle = function (isOpen) { return (isOpen ? 'block' : 'none'); };
    var isFirstScreen = function (index) { return index === 0; };
    var isLastScreen = function (index) { return index === screens.length - 1; };
    var next = function () {
        onNext(__assign(__assign({}, inputData), { fromIndex: currentScreenIndex, toIndex: currentScreenIndex + 1 }));
        setCurrentScreenIndex(currentScreenIndex + 1);
    };
    var prev = function () {
        onPrev(__assign(__assign({}, inputData), { fromIndex: currentScreenIndex, toIndex: currentScreenIndex - 1 }));
        setCurrentScreenIndex(currentScreenIndex - 1);
    };
    var updateData = function (newData) {
        setInputData(newData);
    };
    var isHalfSize = function () { return size === CONTAINER_HALF_SIZE; };
    var containerStyle = {
        display: displayStyle(isOpen),
        position: 'fixed',
        top: 0,
        left: 0,
        width: isHalfSize() ? '50%' : '100%',
        height: isHalfSize() ? '50%' : '100%',
        backgroundColor: '#fff',
        paddingTop: '50px',
        border: isHalfSize() ? '1px solid #555555' : 'none',
        transform: isHalfSize() ? 'translate(50%, 15%)' : 'translate(0%, 0%)'
    };
    var closeButtonStyle = {
        position: 'absolute',
        right: '15px',
        top: '10px',
        fontSize: '30px',
        fontWeight: 100,
        cursor: 'pointer'
    };
    return (React__default.createElement("div", { style: containerStyle },
        React__default.createElement("div", { onClick: function () {
                close();
            }, style: closeButtonStyle }, "\u00D7"),
        screens &&
            screens.length &&
            renderScreen(screens[currentScreenIndex], currentScreenIndex),
        React__default.createElement(Footer, { type: footer || 'inline', isFirstScreen: isFirstScreen(currentScreenIndex), isLastScreen: isLastScreen(currentScreenIndex), next: next, prev: prev })));
};

var PegasusModal = function (_a) {
    var config = _a.config;
    var _b = React.useState(initConfigDefaults(config)), configWithDefaults = _b[0], setConfigWithDefaults = _b[1];
    React.useEffect(function () {
        setConfigWithDefaults(__assign(__assign({}, configWithDefaults), { isOpen: config.isOpen }));
        if (config.isOpen && configWithDefaults.onOpen) {
            console.log('configWithDefaults', configWithDefaults.startScreenIndex);
            configWithDefaults.onOpen(configWithDefaults.data);
        }
    }, [config.isOpen]);
    var onClose = function (data) {
        if (typeof configWithDefaults.onClose === 'function') {
            configWithDefaults.onClose(data);
        }
    };
    var onNext = function (data) {
        if (typeof configWithDefaults.onNext === 'function') {
            configWithDefaults.onNext(data);
        }
    };
    var onPrev = function (data) {
        if (typeof configWithDefaults.onPrev === 'function') {
            configWithDefaults.onPrev(data);
        }
    };
    return (React__default.createElement(ModalContainer, { data: configWithDefaults.data, screens: configWithDefaults.screens, onClose: onClose, onNext: onNext, onPrev: onPrev, isOpen: !!configWithDefaults.isOpen, size: configWithDefaults.size, footer: configWithDefaults.footer, startScreenIndex: configWithDefaults.startScreenIndex }));
};

exports.PegasusModal = PegasusModal;
//# sourceMappingURL=index.js.map
