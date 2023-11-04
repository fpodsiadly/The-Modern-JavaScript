// Callback
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === "number") {
      callback(undefined, num * 2)
    } else {
      callback("Number must be provided")
    }
  }, 2000)
}
getDataCallback(2, (err, data) => {
  if (err) {
    console.log(`Error: ${err}`)
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log(`Error: ${err}`)
      } else {
        console.log(`Data: ${data}`)
      }
    })
  }
})

// Promise
const getDataPromise = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("Number must be provided")
    }, 2000)
  })

getDataPromise(2).then(
  (data) => {
    getDataPromise(data).then(
      (data) => {
        console.log(`Promise Data: ${data}`)
      },
      (err) => {
        console.log(`Error: ${err}`)
      }
    )
  },
  (err) => {
    console.log(`Error: ${err}`)
  }
)

getDataPromise(10)
  .then((data) => {
    return getDataPromise(data)
  })
  .then((data) => {
    return getDataPromise(data)
  })
  .then((data) => {
    console.log(`Data: ${data}`)
  })
  .catch((err) => {
    console.log(`Error: ${err}`)
  })