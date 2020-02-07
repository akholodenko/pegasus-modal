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
    result.confirmClose === undefined ? false : result.confirmClose;
    result.cssClasses === undefined ? {} : result.cssClasses;
    return result;
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

var Footer = function (_a) {
    var type = _a.type, isFirstScreen = _a.isFirstScreen, isLastScreen = _a.isLastScreen, isHalfSize = _a.isHalfSize, next = _a.next, prev = _a.prev, footerStyle = _a.footerStyle;
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
    var footerContent = function () {
        return (React.createElement("div", { style: buttonContainerStyle },
            !isFirstScreen && (React.createElement("button", { style: __assign(__assign({}, buttonStyle), { marginRight: '10px', float: 'left' }), onClick: function () { return prev(); } }, "prev")),
            !isLastScreen && (React.createElement("button", { style: __assign(__assign({}, buttonStyle), { float: 'right' }), onClick: function () { return next(); } }, "next"))));
    };
    var footerByType = function (type) {
        switch (type) {
            case 'sticky':
                return (React.createElement("div", { style: __assign(__assign({}, stickyFooterStyle), footerStyle) }, footerContent()));
            case 'none':
                return React.createElement("div", null);
            case 'inline':
            default:
                return React.createElement("div", { style: footerStyle }, footerContent());
        }
    };
    return footerByType(type);
};

var confirmCloseContainerStyle = {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    zIndex: 10001
};
var buttonContainerStyle = {
    transform: 'translate(-50%,-50%)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '220px'
};
var textLabelStyle = {
    marginBottom: '20px'
};
var ConfirmClose = function (_a) {
    var onConfirmClose = _a.onConfirmClose, onCancelClose = _a.onCancelClose;
    return (React.createElement("div", { style: confirmCloseContainerStyle },
        React.createElement("div", { style: buttonContainerStyle },
            React.createElement("div", { style: textLabelStyle }, "Close modal?"),
            React.createElement("button", { style: __assign(__assign({}, buttonStyle), { marginRight: '10px' }), onClick: function () {
                    onConfirmClose();
                } }, "yes"),
            React.createElement("button", { style: buttonStyle, onClick: function () {
                    onCancelClose();
                } }, "no"))));
};

var containerStyle = function (isOpen) {
    return {
        // display: isOpen ? 'block' : 'none',
        display: 'block',
        opacity: isOpen ? 1 : 0,
        position: 'fixed',
        top: isOpen ? 0 : '-150%',
        backgroundColor: '#eee',
        paddingTop: '50px',
        transition: 'all 0.3s ease',
        overflow: 'hidden'
    };
};
var containerSizeStyle = function (isHalfSize) {
    return {
        width: isHalfSize ? '50%' : '100%',
        height: isHalfSize ? '50%' : '100%',
        border: isHalfSize ? '1px solid #ccc' : 'none',
        left: isHalfSize ? '50%' : 0,
        transform: isHalfSize ? 'translate(-50%, 15%)' : 'translate(0%, 0%)',
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
    var screens = _a.screens, data = _a.data, onClose = _a.onClose, onNext = _a.onNext, onPrev = _a.onPrev, isOpen = _a.isOpen, footer = _a.footer, size = _a.size, startScreenIndex = _a.startScreenIndex, confirmClose = _a.confirmClose, cssClasses = _a.cssClasses;
    var _b = useState(startScreenIndex || 0), currentScreenIndex = _b[0], setCurrentScreenIndex = _b[1];
    var _c = useState(data), inputData = _c[0], setInputData = _c[1];
    var _d = useState(false), showConfirmClose = _d[0], setShowConfirmClose = _d[1];
    useEffect(function () {
        if (isOpen &&
            startScreenIndex !== null &&
            startScreenIndex !== undefined &&
            startScreenIndex >= 0 &&
            startScreenIndex !== currentScreenIndex) {
            setCurrentScreenIndex(startScreenIndex);
        }
    }, [isOpen, startScreenIndex]);
    var close = function () {
        if (confirmClose) {
            setShowConfirmClose(true);
        }
        else {
            onClose(__assign({}, inputData));
        }
    };
    var onConfirmClose = function () {
        setShowConfirmClose(false);
        onClose(__assign({}, inputData));
    };
    var onCancelClose = function () { return setShowConfirmClose(false); };
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
    return (React.createElement("div", { style: __assign(__assign(__assign({}, containerStyle(isOpen)), currentContainerSizeStyle), cssClasses.containerStyle) },
        showConfirmClose && (React.createElement(ConfirmClose, { onConfirmClose: onConfirmClose, onCancelClose: onCancelClose })),
        React.createElement("div", { onClick: function () {
                close();
            }, style: __assign(__assign({}, closeButtonStyle), cssClasses.closeButtonStyle) }, "\u00D7"),
        screens &&
            screens.length &&
            renderScreen(screens[currentScreenIndex], currentScreenIndex),
        React.createElement(Footer, { type: footer || 'inline', isFirstScreen: isFirstScreen(currentScreenIndex), isLastScreen: isLastScreen(currentScreenIndex), isHalfSize: isHalfSize(), next: next, prev: prev, footerStyle: cssClasses.footerStyle })));
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
    return (React.createElement(ModalContainer, { data: configWithDefaults.data, screens: configWithDefaults.screens, onClose: onClose, onNext: onNext, onPrev: onPrev, isOpen: !!configWithDefaults.isOpen, size: configWithDefaults.size, footer: configWithDefaults.footer, startScreenIndex: configWithDefaults.startScreenIndex, confirmClose: configWithDefaults.confirmClose, cssClasses: configWithDefaults.cssClasses }));
};

var inputStyle = {
    boxShadow: 'inset 0 1px 3px 0 rgba(160,160,160,0.5)',
    borderRadius: '2px',
    border: 'none',
    minHeight: '45px',
    marginBottom: '20px',
    display: 'block',
    width: '100%',
    height: '34px',
    padding: '6px 12px',
    fontSize: '14px',
    lineHeight: '1.45',
    color: '#555',
    backgroundColor: '#fff',
    backgroundImage: 'none'
};

var TextInputField = function (_a) {
    var config = _a.config, onChange = _a.onChange;
    var _b = useState(config.value || ''), inputValue = _b[0], setInputValue = _b[1];
    var handleChange = function (value) {
        setInputValue(value);
        if (onChange) {
            onChange(config.id, value);
        }
    };
    return (React.createElement("span", null,
        config.isValid === false && React.createElement("div", null, "invalid input"),
        React.createElement("input", { id: config.id, name: config.name, type: config.formType, placeholder: config.placeholder, className: config.cssClass, value: inputValue, onChange: function (event) { return handleChange(event.target.value); }, autoComplete: "none", style: inputStyle })));
};

var TextareaField = function (_a) {
    var config = _a.config, onChange = _a.onChange;
    var _b = useState(config.value || ''), inputValue = _b[0], setInputValue = _b[1];
    var handleChange = function (value) {
        setInputValue(value);
        if (onChange) {
            onChange(config.id, value);
        }
    };
    return (React.createElement("span", null,
        config.isValid === false && React.createElement("div", null, "invalid input"),
        React.createElement("textarea", { id: config.id, name: config.name, className: config.cssClass, placeholder: config.placeholder, autoComplete: "none", onChange: function (event) { return handleChange(event.target.value); }, value: inputValue })));
};

var Button = function (_a) {
    var config = _a.config, formValues = _a.formValues;
    var handleClick = function () {
        if (config.onClick) {
            config.onClick(formValues);
            //   window.dispatchEvent(new Event('form-button-clicked'))
        }
    };
    return (React.createElement("span", null,
        React.createElement("button", { id: config.id, name: config.name, className: config.cssClass, onClick: function () { return handleClick(); } }, config.value)));
};

var FormElementType;
(function (FormElementType) {
    FormElementType["Text"] = "text";
    FormElementType["Password"] = "password";
    FormElementType["Email"] = "email";
    FormElementType["Phone"] = "tel";
    FormElementType["Number"] = "number";
    FormElementType["RadioButton"] = "radio";
    FormElementType["Checkbox"] = "checkbox";
    FormElementType["File"] = "file";
    FormElementType["TextArea"] = "textarea";
    FormElementType["DropDown"] = "select";
    FormElementType["Button"] = "button";
})(FormElementType || (FormElementType = {}));
var FormElementType$1 = FormElementType;

var SelectField = function (_a) {
    var config = _a.config, onChange = _a.onChange;
    var _b = useState(config.value || ''), inputValue = _b[0], setInputValue = _b[1];
    var handleChange = function (value) {
        setInputValue(value);
        if (onChange) {
            onChange(config.id, value);
        }
    };
    return (React.createElement("span", null,
        config.isValid === false && React.createElement("div", null, "invalid input"),
        React.createElement("select", { id: config.id, name: config.name, placeholder: config.placeholder, className: config.cssClass, value: inputValue, onChange: function (event) { return handleChange(event.target.value); }, autoComplete: "none", style: inputStyle },
            config.placeholder && React.createElement("option", { value: "" }, config.placeholder),
            config.options &&
                config.options.map(function (option, index) { return (React.createElement("option", { key: index, value: option.value }, option.label)); }))));
};

var CheckboxField = function (_a) {
    var config = _a.config, onChange = _a.onChange;
    var _b = useState(config.value || false), inputValue = _b[0], setInputValue = _b[1];
    var handleChange = function (checkbox) {
        setInputValue(checkbox.checked);
        if (onChange) {
            onChange(config.id, checkbox.checked);
        }
    };
    return (React.createElement("span", null,
        config.isValid === false && React.createElement("div", null, "invalid input"),
        React.createElement("input", { id: config.id, name: config.name, type: config.formType, placeholder: config.placeholder, className: config.cssClass, onChange: function (event) { return handleChange(event.target); }, checked: !!inputValue }),
        React.createElement("label", { htmlFor: config.id }, config.label)));
};

var PegasusForm = function (_a) {
    var config = _a.config;
    var container = config.container, components = config.components, onChange = config.onChange;
    var _b = useState({}), formValues = _b[0], setFormValues = _b[1];
    var containerId = container && container.id ? container.id : "formContainer" + Date.now();
    useEffect(function () {
        if (onChange) {
            onChange(formValues);
        }
    }, [formValues]);
    var handleChange = function (index, value) {
        var _a;
        setFormValues(__assign(__assign({}, formValues), (_a = {}, _a[index] = value, _a)));
    };
    var renderFormComponents = function (component, index) {
        var element = null;
        switch (component.formType) {
            case FormElementType$1.Text:
            case FormElementType$1.Email:
            case FormElementType$1.Password:
            case FormElementType$1.Phone:
                element = React.createElement(TextInputField, { config: component, onChange: handleChange });
                break;
            case FormElementType$1.TextArea:
                element = React.createElement(TextareaField, { config: component, onChange: handleChange });
                break;
            case FormElementType$1.DropDown:
                element = React.createElement(SelectField, { config: component, onChange: handleChange });
                break;
            case FormElementType$1.Button:
                element = React.createElement(Button, { config: component, formValues: formValues });
                break;
            case FormElementType$1.Checkbox:
                element = React.createElement(CheckboxField, { config: component, onChange: handleChange });
                break;
        }
        return React.createElement("div", { key: index }, element);
    };
    return (React.createElement("div", { id: container.id || containerId },
        "Form component w/config",
        components.map(function (component, index) {
            return renderFormComponents(component, index);
        })));
};

export { FormElementType$1 as FormElementType, PegasusForm, PegasusModal };
//# sourceMappingURL=index.esm.js.map
