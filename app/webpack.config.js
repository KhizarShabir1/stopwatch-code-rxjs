/***
 * Excerpted from "Build Reactive Websites with RxJS",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/rkrxjs for more book information.
***/
const path = require('path');
/***
let files = {
  creatingObservables: ['stopwatch']


};

let entry = Object.keys(files).reduce((prev, key) => {
  files[key].forEach(filename => {
    prev[`${key}/${filename}`] = `./${key}/${filename}.ts`
    prev[`${key}/${filename}-complete`] = `./${key}/${filename}-complete.ts`
  });
  return prev;
}, {});

entry['sandbox/sandbox'] = './sandbox/sandbox.ts';

#delete entry['multiplexingObservables/chatlib-complete'];


***/

module.exports = {
  mode: 'development',
  // defined above
 entry:{

    stopwatch: './stopwatch.ts'
},
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true
  },
  
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
