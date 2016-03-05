#!/usr/bin/env node

//
const input = process.stdin;

//
exports.on = (callback) => {

    //
    input.setEncoding( 'utf8' );

    //
    input.on('data', callback);

    //
    input.setRawMode(true);
    input.resume();

};

exports.off = (callback) => {

    input.removeListener('data', callback);

}
