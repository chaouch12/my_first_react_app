import Navbar from "../components/Navbar";
import HeaderBar from "../components/HeaderBar";
import {Outlet} from "react-router-dom";

function Main () {

    return <div>
        <HeaderBar/>
        <Navbar/>
        <Outlet/>
    </div>
}

export default Main;