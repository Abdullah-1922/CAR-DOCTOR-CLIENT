import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";


const Main = () => {
    return ( 
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
           <div className="flex-1 flex flex-col overflow-hidden">
               <Outlet />
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;