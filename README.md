## docbuilder
> A documentation builder for javascript projects.

## NOT READY FOR USE YET!

### What is DocBuilder?

(to do: explain the concept)

## Getting Started

> This plugin is available for installation from **npm**.

>**Do not donwload the source code from the git repository into your project**, for you could end up using a (possibly) very unstable development version and **not a stable release**.

Start by installing Grunt `~0.4.1` on your project.

If you haven't used [Grunt](http://gruntjs.com) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-docbuilder --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-docbuilder');
```

## The "docbuilder" task

### Overview
In your project's Gruntfile, add a section named `docbuilder` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'docbuilder': {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Debugging build failures

The build tool will display extended information when warnings or errors occur during the build process if you run the `grunt` command with the `-v` option.

You may also force Grunt to ignore some warnings and continue building by running `grunt` with the `--force` option (not recommended, though).

## Contributing

In lieu of a formal style-guide, take care to maintain the existing coding style.

A linter is already present on the project, so just type `grunt` to run it.

If it's appropriate, create some test cases on the `/tests` folder and include them as individual tasks on the project's Gruntfile.

Always start developing by creating a topic branch on your forked repository from the latest tagged stable version on the `master` branch.

When your work is ready, submit a pull request.

__Important:__ all contributions that are accepted will be made available under the project's license.

## Release History

[v0.1.0](https://github.com/AssemblyKit/grunt-docbuilder/releases/tag/v0.1.0) / 2014-07-08

- Initial release.

## Author

#### Cláudio Silva
- [GitHub profile](http://github.com/claudio-silva)
- [LinkedIn profile](http://www.linkedin.com/pub/cl%C3%A1udio-silva/7/713/367)
