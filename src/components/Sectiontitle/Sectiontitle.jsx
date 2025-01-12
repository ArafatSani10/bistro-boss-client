
const Sectiontitle = ({heading,SubHeading}) => {
    return (
        <div className="md:w-3/12 mx-auto text-center my-8 ">
            <p className="text-yellow-600 mb-2">---{SubHeading}---</p>
            <h1 className="text-4xl uppercase border-y-4 py-4 ">{heading}</h1>
        </div>
    );
};

export default Sectiontitle;