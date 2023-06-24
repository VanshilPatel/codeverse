import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";

import "./Styles/App.css";


const appRouter = createBrowserRouter([
    {

        path: "/",
        element: <Home />,
    }
])

const App = () => {
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
};

export default App;
