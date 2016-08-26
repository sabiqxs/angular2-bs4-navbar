/**
 * PLUNKER VERSION (based on systemjs.config.js in angular.io)
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  var ngVer = '@2.0.0-rc.5'; // lock in the angular package version; do not let it float to current!
  var routerVer = '@3.0.0-rc.1'; // lock router version
  var formsVer = '@0.2.0'; // lock forms version

  //map tells the System loader where to look for things
  var  map = {
    'app':                        'app',
    'main-io':                       'main-io.js',

    '@angular':                   'https://npmcdn.com/@angular', // sufficient if we didn't pin the version
    '@angular/router':            'https://npmcdn.com/@angular/router' + routerVer,
    // '@angular/forms':             'https://npmcdn.com/@angular/forms' + formsVer,
    // 'angular2-in-memory-web-api': 'https://npmcdn.com/angular2-in-memory-web-api', // get latest
    'rxjs':                       'https://npmcdn.com/rxjs@5.0.0-beta.6',
    // 'ts':                         'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
    // 'typescript':                 'https://npmcdn.com/typescript@1.9.0-dev.20160409/lib/typescript.js',
 };

  //packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'rxjs':                       { defaultExtension: 'js' }
    // 'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    // 'http',
    'platform-browser',
    'platform-browser-dynamic',
    // 'router',
    // 'upgrade',
  ];

  // Add map entries for each angular package
  // only because we're pinning the version with `ngVer`.
  ngPackageNames.forEach(function(pkgName) {
    map['@angular/'+pkgName] = 'https://npmcdn.com/@angular/' + pkgName + ngVer;
  });

  map['@angular/router'] = 'https://npmcdn.com/@angular/router' + routerVer;

  // Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {

    // Bundled (~40 requests):
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };

    // Individual files (~300 requests):
    //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  // No umd for router yet
  packages['@angular/router'] = { main: '/bundles/router.umd.js', defaultExtension: 'js' };

  // Forms not on rc yet
  packages['@angular/forms'] = { main: 'index.js', defaultExtension: 'js' };

  var barrels = [
    // Thirdparty barrels.
    // App specific barrels.
    'app',
    'app/navbar',
    'app/home',
    'app/home/about',
    'app/home/contact',
    'app/hero',
    'app/hero/hero-list',
    'app/hero/hero-list/shared',
    'app/hero/hero-detail'
  ];
  barrels.forEach(function (barrelName) {
      packages[barrelName] = { main: 'index', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/