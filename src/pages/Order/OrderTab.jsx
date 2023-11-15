import PropTypes from "prop-types";
import FoodCard from "../Shared/FoodCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./OrderTabPaginationSwiperStyles.css";


const OrderTab = ({ foodItems }) => {
    const pageCount = Math.ceil(foodItems.length / 6);
    const pages = [...Array(pageCount).keys()];
    console.log(pages);
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    pages.map(page => <SwiperSlide key={page}>
                        <div className="grid grid-cols-3 gap-4 my-16">
                            {
                                foodItems.slice(page * 6, (page + 1) * 6).map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

OrderTab.propTypes = {
    foodItems: PropTypes.array.isRequired
}

export default OrderTab;