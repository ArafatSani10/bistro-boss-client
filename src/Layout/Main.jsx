
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Footer/Footer';
import NavBar from '../Pages/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;