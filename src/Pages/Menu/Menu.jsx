import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg  from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'


import UseMenu from "../Hooks/UseMenu";
import Sectiontitle from "../../components/Sectiontitle/Sectiontitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = UseMenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
            {/* main cover  */}
            <Sectiontitle SubHeading="Don't Miss" heading="Today's Offered "></Sectiontitle>
          
            {/* desserts menu items  */}
            <MenuCategory items={desserts} title={"Desserts"} coverImg={dessertImg}></MenuCategory>

            <MenuCategory items={pizza} title={"Pizza"} coverImg={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} coverImg={saladImg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} coverImg={soupImg}></MenuCategory>



        </div>
    );
};

export default Menu;