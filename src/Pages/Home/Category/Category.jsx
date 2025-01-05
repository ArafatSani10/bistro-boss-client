// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'


// import required modules
import { Pagination } from 'swiper/modules';

const Category = () => {
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className='text-4xl text-center uppercase -mt-16 text-white'>salads</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h1 className='text-4xl text-center uppercase -mt-16 text-white'>Pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h1 className='text-4xl text-center uppercase -mt-16 text-white'>Soups</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h1 className='text-4xl text-center uppercase -mt-16 text-white'>desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h1 className='text-4xl text-center uppercase -mt-16 text-white'>salads</h1>
        </SwiperSlide>
       
      </Swiper>
    );
};

export default Category;