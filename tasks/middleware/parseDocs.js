/**
 * DocBuilder middleware module.
 *
 * @module middleware/docs
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
function ParseDocsOptions ()
{}

ParseDocsOptions.prototype = {
  something: []
};

/**
 * @mixin
 */
var ParseDocsOptionsMixin = {
  /**
   * Options specific to the Main Module Synthetizer middleware.
   * @type {ParseDocsOptions}
   */
  docs: new ParseDocsOptions ()
};

exports.options = ParsedocsOptionsMixin;

//----------------------------------------------------------------------------------------------------------------------

exports.middleware = ParsedocsMiddleware;

/**
 * @constructor
 * @implements {MiddlewareInterface}
 * @param {Context} context The execution context for the middleware stack.
 */
function ParsedocsMiddleware (context)
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
