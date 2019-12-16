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
    result.onNext = result.onNext === undefined ? function () { } : result.onNext;
    result.footer = result.footer === undefined ? 'inline' : result.footer;
    result.startScreenIndex =
        result.startScreenIndex === undefined ? 0 : result.startScreenIndex;
    return result;
};

var Footer = function (_a) {
    var type = _a.type, isFirstScreen = _a.isFirstScreen, isLastScreen = _a.isLastScreen, isHalfSize = _a.isHalfSize, next = _a.next, prev = _a.prev;
    var stickyFooterStyle = {
        position: 'absolute',
        bottom: isHalfSize ? '0px' : '50px',
        left: '0',
        width: '100%',
        height: '80px',
        borderTop: '1px solid #ccc',
        textAlign: 'center'
    };
    var buttonContainerStyle = {
        display: 'inline-block',
        minWidth: '220px',
        marginTop: '20px'
    };
    var buttonStyle = {
        width: '100px',
        padding: '10px 20px',
        fontSize: '14px',
        textTransform: 'uppercase',
        borderRadius: '3px',
        fontWeight: 600,
        outline: 'none',
        cursor: 'pointer'
    };
    var footerContent = function () {
        return (React.createElement("div", { style: buttonContainerStyle },
            !isFirstScreen && (React.createElement("button", { style: __assign(__assign({}, buttonStyle), { marginRight: '10px', float: 'left' }), onClick: function () { return prev(); } }, "prev")),
            !isLastScreen && (React.createElement("button", { style: __assign(__assign({}, buttonStyle), { float: 'right' }), onClick: function () { return next(); } }, "next"))));
    };
    var footerByType = function (type) {
        switch (type) {
            case 'sticky':
                return React.createElement("div", { style: stickyFooterStyle }, footerContent());
            case 'none':
                return React.createElement("div", null);
            case 'inline':
            default:
                return React.createElement("div", null, "inline footer");
        }
    };
    return footerByType(type);
};

var containerStyle = function (isOpen) {
    return {
        // display: isOpen ? 'block' : 'none',
        display: 'block',
        opacity: isOpen ? 1 : 0,
        position: 'fixed',
        top: isOpen ? 0 : '-150%',
        left: 0,
        backgroundColor: '#eee',
        paddingTop: '50px',
        transition: 'all 0.3s ease'
    };
};
var containerSizeStyle = function (isHalfSize) {
    return {
        width: isHalfSize ? '50%' : '100%',
        height: isHalfSize ? '50%' : '100%',
        border: isHalfSize ? '1px solid #ccc' : 'none',
        transform: isHalfSize ? 'translate(50%, 15%)' : 'translate(0%, 0%)',
        borderRadius: isHalfSize ? '5px' : '0px'
    };
};
var closeButtonStyle = {
    position: 'absolute',
    right: '15px',
    top: '10px',
    fontSize: '30px',
    fontWeight: 100,
    cursor: 'pointer'
};

var CONTAINER_HALF_SIZE = 'half';
var ModalContainer = function (_a) {
    var screens = _a.screens, data = _a.data, onClose = _a.onClose, onNext = _a.onNext, onPrev = _a.onPrev, isOpen = _a.isOpen, footer = _a.footer, size = _a.size, startScreenIndex = _a.startScreenIndex;
    var _b = useState(startScreenIndex || 0), currentScreenIndex = _b[0], setCurrentScreenIndex = _b[1];
    var _c = useState(data), inputData = _c[0], setInputData = _c[1];
    useEffect(function () {
        if (isOpen &&
            startScreenIndex !== null &&
            startScreenIndex !== undefined &&
            startScreenIndex >= 0 &&
            startScreenIndex !== currentScreenIndex) {
            setCurrentScreenIndex(startScreenIndex);
        }
    }, [isOpen, startScreenIndex]);
    var close = function () { return onClose(__assign({}, inputData)); };
    var renderScreen = function (Screen, index) {
        return (React.createElement(Screen, { data: inputData, isFirstScreen: isFirstScreen(index), isLastScreen: isLastScreen(index), isOpen: isOpen, next: next, prev: prev, updateData: updateData }));
    };
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
    var currentContainerSizeStyle = containerSizeStyle(isHalfSize());
    return (React.createElement("div", { style: __assign(__assign({}, containerStyle(isOpen)), currentContainerSizeStyle) },
        React.createElement("div", { onClick: function () {
                close();
            }, style: closeButtonStyle }, "\u00D7"),
        screens &&
            screens.length &&
            renderScreen(screens[currentScreenIndex], currentScreenIndex),
        React.createElement(Footer, { type: footer || 'inline', isFirstScreen: isFirstScreen(currentScreenIndex), isLastScreen: isLastScreen(currentScreenIndex), isHalfSize: isHalfSize(), next: next, prev: prev })));
};

var PegasusModal = function (_a) {
    var config = _a.config;
    var _b = useState(initConfigDefaults(config)), configWithDefaults = _b[0], setConfigWithDefaults = _b[1];
    useEffect(function () {
        setConfigWithDefaults(__assign(__assign({}, configWithDefaults), { isOpen: config.isOpen, startScreenIndex: config.startScreenIndex }));
        if (config.isOpen && configWithDefaults.onOpen) {
            configWithDefaults.onOpen(configWithDefaults.data);
        }
    }, [config.isOpen, config.startScreenIndex]);
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
    return (React.createElement(ModalContainer, { data: configWithDefaults.data, screens: configWithDefaults.screens, onClose: onClose, onNext: onNext, onPrev: onPrev, isOpen: !!configWithDefaults.isOpen, size: configWithDefaults.size, footer: configWithDefaults.footer, startScreenIndex: configWithDefaults.startScreenIndex }));
};

export { PegasusModal };
//# sourceMappingURL=index.esm.js.map
