import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-red-500 text-white p-4 rounded-xl mb-4">Tailwind Test</h1>
      <Card title='Street Phtography' artist='M Ehtesham' link='https://images.unsplash.com/photo-1740246199769-309d3dab633c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D'/>
      <Card title={'Road Photography'} artist={'Ahmed'} link={'https://images.unsplash.com/photo-1740165886249-ec4b5785acf4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D'}/>
      <Card title={'Food'} artist={'Umer Abbasi'} link={'https://images.unsplash.com/photo-1656057205408-4a0a62cf2dfb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
    </>
  );
}

export default App;
