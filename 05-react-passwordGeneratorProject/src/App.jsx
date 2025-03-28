import { useCallback, useEffect, useState, useRef } from "react";

function App() {

  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+{}|?<>~`\/"

    for (var i = 0; i < length; i++){
      let char = Math.floor(Math.random() * str.length )
      pass += str.charAt(char)  
    }

    setPassword(pass);

  },[numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select(); // Seleting using useRef hook
    // passRef.current?.setSelectionRange(0,9);
    // window.navigator.clipboard.writeText(password) // Seleting without using useRef hook

  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])


  return (

    <>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 text-center bg-gray-800">
            <h1 className="text-white text-center my-3">Password Generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
              <input 
              type="text" 
              value={password}
              className="outline-none w-full py-1 px-3 bg-white"
              placeholder="Password"
              ref={passRef}
              readOnly
              />
              <button
               className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
               onClick={copyPasswordToClipboard}
              >
                copy
              </button>

            </div>
            <div className="flex text-sm gap-x-2">
                  <div className="flex items-center gap-x-1">
                      <input 
                      type="range"
                      min={8}
                      max={21}
                      value={length}
                      className="cursor-pointer"
                      onChange={(e) => {setLength(e.target.value)}}
                      />
                      <label >Length: {length}</label>
                  </div>

                  <div className="flex items-center gap-x-1">
                        <input
                        type="checkbox"
                        id="numberInput"
                        defaultChecked = {numAllowed}
                        onChange={() => {
                          setNumAllowed((prev) => !prev)
                        }}
                        />
                        <label htmlFor="numberInput">Numbers</label>
                  </div>

                  <div className="flex items-center gap-x-1">
                        <input 
                        type="checkbox" 
                        id="charInput"
                        defaultChecked= {charAllowed}
                        onChange={() => {
                          setCharAllowed((prev) => !prev)
                        }}
                        />
                        <label htmlFor="charInput">Special Characters</label>
                        

                  </div>
            </div>

      </div>
    

    </>
  );
}

export default App;



