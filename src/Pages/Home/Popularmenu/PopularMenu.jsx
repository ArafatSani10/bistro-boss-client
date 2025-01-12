
import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";
import MenuItem from "../../MenuItems/MenuItem";
import UseMenu from "../../Hooks/UseMenu";


const PopularMenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu,setMenu]= useState([])
    // useEffect(() =>{
    //     fetch("Menu.json")
    //     .then(res => res.json())
    //     .then(data =>{
    //         const PopularItems = data.filter (item => item.category === 'popular')
            
    //         setMenu(PopularItems)} )

    // } ,[])
    return (
        <section className="mb-12">
            <Sectiontitle heading={"From Our  Menu"}
                SubHeading={"Popular Items "}
            >
            </Sectiontitle>

            <div className="grid md:grid-cols-2  gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;