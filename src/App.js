import React from "react";
import Home from "./components/Home";
import Submissions from "./components/Submissions";
import {RouterProvider, createBrowserRouter} from "react-router-dom"


const appRouter = createBrowserRouter([
  {
    
    path : "/",
    element : <Home/>,
  },
    {
    path : "/submissions",
    element : <Submissions/>
    },
  
    ])

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
};

export default App;
