// Callback
const getDataCallback = (callback) => {
  setTimeout(() => {
    callback("This is the callback data", undefined)
  }, 2000)
}
getDataCallback((err, data) => {
  if (err) {
    console.log(`Error: ${err}`)
  } else {
    console.log(`Callback Data: ${data}`)
  }
})

// Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("This is the promise data")
    reject("This is the promise error")
    reject("This is the promise error")
  }, 2000)
})

myPromise.then(
  (data) => {
    console.log(`Promise Data: ${data}`)
  },
  (err) => {
    console.log(`Promise Error: ${err}`)
  }
)

myPromise.then(
  (data) => {
    console.log(`Promise Data: ${data}`)
  },
  (err) => {
    console.log(`Promise Error: ${err}`)
  }
)
