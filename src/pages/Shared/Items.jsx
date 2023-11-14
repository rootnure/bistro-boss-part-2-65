import PropTypes from "prop-types";
import Item from "../../components/Item";
import MainBtn from "../../components/MainBtn";

const Items = ({ items, isBgWhite }) => {
    return (
        <div>

            <div className="grid grid-cols-2 gap-6">
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
            <div className="flex justify-center my-6">
                <MainBtn isBgWhite={isBgWhite}>View Full Menu</MainBtn>
            </div>
        </div>
    );
};

Items.propTypes = {
    items: PropTypes.array.isRequired,
    isBgWhite: PropTypes.bool
}

export default Items;