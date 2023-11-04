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
const getDataPromise = (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`This is the success data ${data}`)
      //reject("This is the promise error")
    }, 2000)
  })

const myPromise = getDataPromise(123)
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
