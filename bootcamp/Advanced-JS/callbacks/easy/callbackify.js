// Problem Description – callbackify(fn)
//
// You are required to write a function named callbackify that takes a function
// which returns a Promise.
// The function should return a new function that accepts a callback as its
// last argument.
// When the Promise resolves, the callback should be called with `(null, data)`.
// When the Promise rejects, the callback should be called with the error.

function callbackify(fn) {
  return function (...args) {
    const callback = args.pop();
    fn(...args)
      .then(function (data) {
        callback(null, data);
      })
      .catch(function (err) {
        callback(err);
      });
  };
}

module.exports = callbackify;

//what this question wanted was , simply write a callbackify function jiske argument mein ek function already hau jo ek promise return karega
// now i have to make sure ki jab ye callbackify call ho then i should return a function jisme bahut se argument honge but last will be callback ,
// and this function will make aure ki hamara fn jo mainly argument mein liya gya hai wo run ho aur uske .then aur .catch pe alag se 2 callback functions
//call hojaye with different arguments as specified , it is as simple as we write a promisified version of readfile which takes the fn in outer function
// and then actually calls the async thing inside the inner function.
// similiar thing for reference
/*function fsReadFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}
 */
