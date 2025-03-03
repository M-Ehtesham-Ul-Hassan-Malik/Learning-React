import { useState } from "react"

function App() {

  // let counter = 5

//     [variable name, method name which will handle the variable] = useState(value)
  let [counter, setCounter] = useState(5)
  // let counter = 5

  const addValue = () => {
    if (counter < 20){
    console.log('clicked ' + counter)
    // counter += 1
    setCounter(counter + 1)
    // counter += 1;
  }
  }

  const removeValue = () => {
    if (counter > 0 ){
    setCounter(counter - 1)
    // counter -= 1;
    console.log('clicked ' + counter)
  }
}
  return (
    <>
      <h2>Chai Counter</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <br />
      <p>footer {counter}</p>
    </>
  )
}

export default App
