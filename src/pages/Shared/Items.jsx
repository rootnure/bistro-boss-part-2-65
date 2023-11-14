import PropTypes from "prop-types";
import Item from "../../components/Item";
import MainBtn from "../../components/MainBtn";

const Items = ({ items, isBgWhite = true, btnText = "View Full Menu" }) => {
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
            <div className="flex justify-center my-8">
                <MainBtn isBgWhite={isBgWhite}>{btnText}</MainBtn>
            </div>
        </div>
    );
};

Items.propTypes = {
    items: PropTypes.array.isRequired,
    isBgWhite: PropTypes.bool,
    btnText: PropTypes.string
}

export default Items;