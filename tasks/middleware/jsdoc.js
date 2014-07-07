/**
 * DocBuilder middleware module.
 *
 * @module middleware/jsdoc
 *
 * @license
 * Copyright 2013 Cláudio Manuel Brás da Silva
 * https://github.com/AssemblyKit/grunt-docbuilder
 * Licensed under the MIT license.
 */
'use strict';

//----------------------------------------------------------------------------------------------------------------------
// OPTIONS
//----------------------------------------------------------------------------------------------------------------------

/**
 * Options specific to this middleware.
 * @constructor
 */
function JsdocOptions ()
{}

JsdocOptions.prototype = {
  something: []
};

/**
 * @mixin
 */
var JsdocOptionsMixin = {
  /**
   * Options specific to the Main Module Synthetizer middleware.
   * @type {JsdocOptions}
   */
  jsdoc: new JsdocOptions ()
};

exports.options = JsdocOptionsMixin;

//----------------------------------------------------------------------------------------------------------------------

exports.middleware = JsdocMiddleware;

/**
 * @constructor
 * @implements {MiddlewareInterface}
 * @param {Context} context The execution context for the middleware stack.
 */
function JsdocMiddleware (context)
{
  /* jshint unused: vars */

  //--------------------------------------------------------------------------------------------------------------------
  // PUBLIC API
  //--------------------------------------------------------------------------------------------------------------------

  this.analyze = function (filesArray)
  {
    /* jshint unused: vars */
    // Do nothing
  };

  this.trace = function (module)
  {
    /* jshint unused: vars */
  };

  this.build = function (targetScript)
  {
    /* jshint unused: vars */
  };
}
