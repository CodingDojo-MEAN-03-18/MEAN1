const color = require('colors');


/**
* Create middleware that reports information about the incoming http request
* Certain elements will be objects(body), display the key value pairs
* Items to report iff they have value, use colors (an external module):
*                 method
*                 hostname
*                 ip
*                 body
*                 cookies
*                 parameters
*                 protocol
*                 route
*                 url
*/


module.exports = function(request, response, next) {
  console.log('inside logger', request.hostname);

  // if (request.method) {
  //   console.log(request.method)
  // }
  //
  // if (request.hostname) {
  //   console.log(request['hostname']);
  // }

  const keys = ['method', 'hostname', 'ip', 'body', 'cookies', 'params', 'path', 'protocol', 'route'];

  // for (let index = 0; index < keys.length; index++) {}

  keys.forEach(key => {
    // console.log('key', key, request[key]);
    const data = request[key];

    if (data) {
      // console.log('I have value', key);

      if (typeof data === 'object') {
        // do something with objects
        // console.log('I am an object', key, data);

        if (Object.keys(data).length) {
          console.log(color.red(`The request ${ key } object has these properties:`));

          // for (const prop in data) {
          //   // console.log('prop', prop, data[prop]);
          //   console.log(color.blue(`\t${ prop } => ${ data[prop] }`));
          // }

          for (const [prop, value] of Object.entries(data)) {
            // const prop = things[0];
            // const value = things[1];
            // console.log('things', prop, value);
            console.log(color.blue(`\t${ prop } => ${ value }`));
          }
        }
      } else {
        console.log(color.gray(`The request ${ key } is ${ data }`));
      }
    }
  });

  next();
};
