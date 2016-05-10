/*jslint forin: true, sloppy: true, unparam: true, vars: true, white: true, nomen: true, plusplus:true */
/*global window, document, jQuery, console, Modernizr */

/*
 * sample-module.js
 *
 * @project:    SN-FE-QS
 * @requires:   jQuery 1.11.1
 * @date:       xxxx-xx-xx
 * @author:     name, name@sapient.com
 * @licensor:   SAPIENNITRO
 * @namespaces: snqs
 */

/**
 * @namespace snqs
 */
var snqs = window.snqs || {};

/**
 * @namespace Main
 * @memberof snqs
 * @property {null} property - description of property
 */
snqs.Main = (function (window, $, namespace) {
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
     * @memberof snqs.Main
     */
    _privateMethod = function () {
        return property;
    };

    /**
     * @method init
     * @description Description of init
     * @memberof snqs.Main
     * @example
     * snqs.Main.init()
     */
    init = function () {
        return _privateMethod();
    };

    // Public API
    return {
        init: init
    };

}(this, jQuery, 'snqs'));

jQuery(snqs.Main.init());
