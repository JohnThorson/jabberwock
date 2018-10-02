const config        = require( process.cwd() + '/gulp/config' );
const gulp          = require( 'gulp' );
const requireDir    = require( 'require-dir' );
 
requireDir('./gulp/tasks', { recurse: true });