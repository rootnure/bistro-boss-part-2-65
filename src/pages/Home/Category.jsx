import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import categoryImg1 from "../../assets/home/slide1.jpg";
import categoryImg2 from "../../assets/home/slide2.jpg";
import categoryImg3 from "../../assets/home/slide3.jpg";
import categoryImg4 from "../../assets/home/slide4.jpg";
import categoryImg5 from "../../assets/home/slide5.jpg";
import SectionTitle from '../../components/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                heading="Order Online"
                subHeading="From 11:00AM to 10:00PM"
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={categoryImg1} alt="" className='w-fit mx-auto' />
                    <h3 className='text-4xl uppercase text-center -mt-16 mb-12 text-white font-medium [text-shadow:_4px_4px_0_rgb(0_0_0_/_40%)]'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={categoryImg2} alt="" className='w-fit mx-auto' />
                    <h3 className='text-4xl uppercase text-center -mt-16 mb-12 text-white font-medium [text-shadow:_4px_4px_0_rgb(0_0_0_/_40%)]'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={categoryImg3} alt="" className='w-fit mx-auto' />
                    <h3 className='text-4xl uppercase text-center -mt-16 mb-12 text-white font-medium [text-shadow:_4px_4px_0_rgb(0_0_0_/_40%)]'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={categoryImg4} alt="" className='w-fit mx-auto' />
                    <h3 className='text-4xl uppercase text-center -mt-16 mb-12 text-white font-medium [text-shadow:_4px_4px_0_rgb(0_0_0_/_40%)]'>Dessert</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={categoryImg5} alt="" className='w-fit mx-auto' />
                    <h3 className='text-4xl uppercase text-center -mt-16 mb-12 text-white font-medium [text-shadow:_4px_4px_0_rgb(0_0_0_/_40%)]'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;