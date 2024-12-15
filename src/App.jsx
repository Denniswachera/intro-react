const App = () => {
  const now = new Date()
  const a = 1679300023
  const b = 20090385562
  console.log(now, a+b)

  return (
 <div>
<p>My name is Dennis and I am a fruitful child of God</p>
      <p>Current time is {now.toString()}</p>
      <p>{a} plus {b} is {a + b}</p>
    </div>
  )
}

export default App
