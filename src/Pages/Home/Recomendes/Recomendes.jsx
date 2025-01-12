import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";

import salad from '../../../assets/home/slide1.jpg'
import pizza from '../../../assets/home/slide2.jpg'
import desert from '../../../assets/home/slide3.jpg'


const Recomendes = () => {
    return (
        <section>
            <Sectiontitle SubHeading={"Should try"} heading={"CHEF RECOMMENDS"}></Sectiontitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ml-20">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={salad}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">salads!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn border-0 border-b-4 btn-outline">Add to cart </button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={pizza}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pizza!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn border-0 border-b-4 btn-outline">Add to cart </button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={desert}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Deserts!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn border-0 border-b-4 btn-outline">Add to cart </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recomendes;