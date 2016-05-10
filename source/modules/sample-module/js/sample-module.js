/*jslint forin: true, sloppy: true, unparam: true, vars: true, white: true, nomen: true, plusplus:true */
/*global window, document, jQuery, console */

/*
 * sample-module.js
 * [ Description of the sample module script ]
 *
 * @project:    SN-FE-QS
 * @date:       xxxx-xx-xx
 * @author:     name, name@sapient.com
 * @licensor:   SAPIENNITRO
 * @namespaces: snqs
 */

var snqs = window.snqs || {};

/**
 * @namespace SampleModule
 * @memberof snqs
 * @property {null} property - description of property
 */
snqs.SampleModule = (function (window, $, namespace) {
    'use strict';

    // public methods
    var init,

    // private methods
        _privateMethod,

    // properties
        property = null;

    /**
     * @method _privateMethod
     * @description Description of _privateMethod
     * @memberof snqs.SampleModule
     */
    _privateMethod = function () {
        return property;
    };

    /**
     * @method init
     * @description Description of init
     * @memberof snqs.SampleModule
     * @example
     * snqs.SampleModule.init()
     */
    init = function () {
        return _privateMethod();
    };

    // Public API
    return {
        init: init
    };

}(this, jQuery, 'snqs'));

jQuery(snqs.SampleModule.init());
