function hello(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        `Hi ${name}.Welcome to webpack-template to build your code snippet`
      )
    }, 100)
  })
}
hello('小鑫同学')
