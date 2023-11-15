import PropTypes from "prop-types";
import FoodCard from "../Shared/FoodCard";

const OrderTab = ({ foodItems }) => {
    return (
        <div className="grid grid-cols-3 gap-4 my-16">

            {
                foodItems.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

OrderTab.propTypes = {
    foodItems: PropTypes.array.isRequired
}

export default OrderTab;