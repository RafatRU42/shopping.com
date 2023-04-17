import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authienticate/Login";
import SignUp from "../Pages/Authienticate/SignUp";

const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
        {path:'/', element:<Home></Home>},
        {path:'/login', element:<Login></Login>},
        {path:'/signUp', element:<SignUp></SignUp>},
    ]}
])

export default router;