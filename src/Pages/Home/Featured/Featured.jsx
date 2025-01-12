import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";
import featuredImage from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item text-white bg-fixed pt-8 my-20 ">
            <Sectiontitle className='font-bold' SubHeading={"Check it out"} heading={"FEATURED ITEM "}>

            </Sectiontitle>
            <div className="md:flex  justify-center items-center bg-opacity-60 pb-20 pt- 12 px-36">
                <div>
                    <img className="rounded-3xl" src={featuredImage} alt="" />
                </div>
                <div className="md:ml-10 text-balck ">
                    <p className="text-black text-3xl ">Aug 20, 2025</p>
                    <p className="uppercase text-black text-2xl"> Where  can i get  some ? </p>
                    <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deserunt sint repellendus natus quis magni ipsam autem debitis, harum incidunt rem aut saepe laborum ab. Totam quisquam aperiam iure illo deleniti vero recusandae. Veniam tempore numquam necessitatibus reiciendis placeat consequatur voluptas sapiente amet! Voluptatibus excepturi doloribus expedita qui, eos non?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 ">Order Now </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;