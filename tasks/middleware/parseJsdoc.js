/**
 * DocBuilder middleware module.
 *
 * @module middleware/parsejsdoc
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
function ParseJsdocOptions ()
{}

ParseJsdocOptions.prototype = {
  jsdoc: []
};

/**
 * @mixin
 */
var ParseJsdocOptionsMixin = {
  /**
   * Options specific to the Main Module Synthetizer middleware.
   * @type {ParseJsdocOptions}
   */
  parseJsdoc: new ParseJsdocOptions ()
};

exports.options = ParseJsdocOptionsMixin;

//----------------------------------------------------------------------------------------------------------------------

exports.middleware = ParseJsdocMiddleware;

/**
 * @constructor
 * @implements {MiddlewareInterface}
 * @param {Context} context The execution context for the middleware stack.
 */
function ParseJsdocMiddleware (context)
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
