import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import reactDom from 'react-dom';
import { createBrowserRouter,Router,RouterProvider } from 'react-router';
import Aboutpage from './Aboutpage/Aboutpage.jsx'


    const page_link= createBrowserRouter(

    [
        {
            path:"/",
            element:<App/>

        },
        {
            path:"aboutpage",
            element:<Aboutpage/>
        }

    ]
)

createRoot(document.getElementById('root')).render(

<RouterProvider router={page_link}/>


)
