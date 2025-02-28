import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('olive'); 
  return (

    <div className='w-full h-screen duration-200 ' 
    style={{ backgroundColor: color }}>

      <div className='fixed flex flex-wrap justify-center top-7 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-4 drop-shadow-lg bg-amber-100 px-3 py-2 rounded-4xl'>
              <button onClick= {() => setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'red'}}>
                Red
                </button>
                <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'green'}}>
                Green
                </button>
                <button onClick={() => setColor('yellowgreen')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'yellowgreen'}}>
                Yellow Green 
                </button>
                <button onClick={() => setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'blue'}}>
                Blue
                </button>
                <button onClick={() => setColor('orange')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'orange'}}>
                Orange
                </button>
                <button onClick={() => setColor('purple')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'purple'}}>
                Purple
                </button>
                <button onClick={() => setColor('pink')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'pink'}}>
                Pink
                </button>
                <button onClick={() => setColor('teal')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'teal'}}>
                Teal
                </button>
                <button onClick={() => setColor('brown')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'brown'}}>
                Brown
                </button>
                <button onClick={() => setColor('gray')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'gray'}}>
                Gray
                </button>
                <button onClick={() => setColor('black')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'black'}}>
                Black
                </button>
                <button onClick={() => setColor('lightblue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'lightblue'}}>
                Light Blue
                </button>
                <button onClick={() => setColor('lightgreen')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: 'lightgreen'}}>
                Light Green
                </button>

            </div>
      </div>
      
    </div>
  );
}

export default App;



