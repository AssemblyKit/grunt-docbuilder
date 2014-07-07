/**
 * DocBuilder's data types.
 *
 * @module lib/types
 *
 * @license
 * Copyright 2013 Cláudio Manuel Brás da Silva
 * https://github.com/AssemblyKit/grunt-docbuilder
 * Licensed under the MIT license.
 */
'use strict';

/* jshint unused: vars */

var util = require ('./gruntUtil')
  , extend = util.extend;

//======================================================================================================================

/**
 * DocBuilder's task options.
 *
 * Note: Middleware classes augment this class with their own options.
 *
 * @constructor
 * @mixes ParseDocsOptionsMixin
 * @mixes ParseJsdocOptionsMixin
 * @mixes RenderPagesOptionsMixin
 */
function TaskOptions ()
{}

TaskOptions.prototype = {
  /**
   * Allows loading third-party middleware into the middleware stack.
   * This is a task-level option. Do not specify it at target-level.
   *
   * This option allows the definition of a list of external middleware modules to load and for each one, to specify
   * where to place it on the middleware stack.
   * Each element in the list defines a module name (with the `load` property) and one of the following properties:
   * `before`, `after` or `over`. The property name selects the insertion position on the middleware stack for the
   * loaded one.
   * Note: internal middlewares are loaded into the middleware stack before the external middlewares.
   * @type {Array.<{load: string, before: ?string, after: ?string}>|null}
   */
  externalMiddleware: null,
  /**
   * Defines the list of bundled middleware.
   * This is a task-level option. Do not specify it at target-level.
   *
   * This option sets a list of modules names to load and assemble into a middleware stack in the specified order.
   * This is reserved for internal use, but could be overridden if you wish to replace some or all of the
   * built-in behavior. Usually, though, you should use the `externalMiddleware` option.
   * WARNING: the order of middleware listed here is important! If you change it, the build process may fail!
   * @type {string[]}
   * @const
   */
  internalMiddleware: [
    './middleware/parseDocs',
    './middleware/parseJsdoc',
    './middleware/renderPages'
  ]
};

//======================================================================================================================

/**
 * A Grunt file references array.
 * @interface
 */
function GruntFilesArray ()
{}

GruntFilesArray.prototype = {
  /**
   * @type {string[]|null}
   */
  src:  null,
  /**
   * @type {string|null}
   */
  dest: null

};

//======================================================================================================================

/**
 * API for a middleware plugin.
 * Defines handlers for the main stages of the build process: analyze --> trace --> build.
 *
 * Note: implementing classes must have a compatible constructor.
 *
 * @interface
 * @param {Context} context The execution context for the middleware stack.
 */
function MiddlewareInterface (context)
{}

MiddlewareInterface.prototype = {
  /**
   * Load and analyze the specified source files.
   * Invoked once.
   *
   * @param {GruntFilesArray} filesArray The set of source code files to be processed.
   */
  analyze: function (filesArray) {},
  /**
   * Scan a module for relevant information.
   * Invoked once for each required module in the application, in the order defined by the dependency graph.
   * Each module, in turn, is passed trough all the middlewares on the stack.
   *
   * Note: external and excluded modules are never traced; dependencies of excluded modules may be traced.
   *
   * @param {ModuleDef} module Gives you access to the module's metadata and its source code.
   */
  trace:   function (module) {},
  /**
   * Build the compilation output.
   * Invoked once.
   *
   * @param {string} targetScript Path to the output script.
   */
  build:   function (targetScript) {}
};

//======================================================================================================================

/**
 * Reference types enum.
 * @enum {string}
 */
var REFERENCE_TYPE = {
  NONE: '',
  SYMBOL: 'S',
  TEXT: 'T'
};

function Reference ()
{

}

Reference.prototype = {
  name: '',
  /**
   * What kind of reference is it?
   * @type {REFERENCE_TYPE}
   */
  type: ''
};

//======================================================================================================================

/**
 * The execution context for the middleware stack.
 * Contains shared information available throughout the middleware stack.
 * @constructor
 * @param grunt The Grunt API.
 * @param task The currently executing Grunt task.
 * @param {TaskOptions} defaultOptions The default values for all of the Angular Builder's options, including all
 * middleware options.
 */
function Context (grunt, task, defaultOptions)
{
  this.grunt = grunt;
  this.options = extend ({}, defaultOptions, task.options ());
  this.references = {};
  this.shared = {};
}

Context.prototype = {
  /**
   * The Grunt API.
   */
  grunt:      null,
  /**
   * Task-specific options set on the Gruntfile.
   * @type {TaskOptions}
   */
  options:    null,
  /**
   * A map of documentation references --> reference definitions.
   * @type {Object.<string, Reference>}
   */
  references: null,
  /**
   * Custom data shared between extensions.
   */
  shared:     null

};

//======================================================================================================================
// EXPORT
//======================================================================================================================

module.exports = {
  ExtensionInterface: MiddlewareInterface,
  Context:            Context,
  TaskOptions:        TaskOptions
};
