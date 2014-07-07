/**
 * DocBuilder middleware module.
 *
 * @module middleware/renderPages
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
function RenderPagesOptions ()
{}

RenderPagesOptions.prototype = {
  something: []
};

/**
 * @mixin
 */
var RenderPagesOptionsMixin = {
  /**
   * Options specific to the Main Module Synthetizer middleware.
   * @type {RenderPagesOptions}
   */
  render: new RenderPagesOptions ()
};

exports.options = RenderPagesOptionsMixin;

//----------------------------------------------------------------------------------------------------------------------

exports.middleware = RenderPagesMiddleware;

/**
 * @constructor
 * @implements {MiddlewareInterface}
 * @param {Context} context The execution context for the middleware stack.
 */
function RenderPagesMiddleware (context)
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
