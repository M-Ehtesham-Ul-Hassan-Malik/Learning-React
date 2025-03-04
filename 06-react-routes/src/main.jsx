import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Github from './components/Github/Github.jsx';
import {githubInfo} from './components/Github/Github.jsx';
import Team from './components/Team/Team.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      {/*Nested route*/}
      <Route path='about' element={<About />} >
        <Route path='team' element={<Team/>} />
      </Route>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:id' element={<User />} />
      
      <Route
      loader = {githubInfo}
      path='github' 
      element={<Github/>}/>


    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
