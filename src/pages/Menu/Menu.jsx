import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";

const Menu = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <div className="space-y-24 mb-24">
                <Cover
                    bgImg={menuImg}
                    title="Menu"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur similique ex iure quo magnam magni quos velit inventore corporis dolorum?"
                ></Cover>
            </div>
        </>
    );
};

export default Menu;