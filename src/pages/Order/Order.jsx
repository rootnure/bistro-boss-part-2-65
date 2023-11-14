import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import orderCoverImg from "../../assets/order/order.jpg";

const Order = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <main className="space-y-24 mb-24">
                <Cover
                    bgImg={orderCoverImg}
                    title="Order Now"
                    description="Order your desire food from Bistro Boss Now!"
                    isPageCover={true}
                ></Cover>
            </main>
        </>
    );
};

export default Order;