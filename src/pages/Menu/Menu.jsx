import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import MenuItems from "./MenuItems";
import sectionBannerBgImg from "../../assets/home/chef-service.jpg";

const Menu = () => {
    const [menu, loading] = useMenu();
    const offered = menu.filter(item => item.category.toLowerCase() === "offered");
    const dessert = menu.filter(item => item.category.toLowerCase() === "dessert");
    // const salad = menu.filter(item => item.category.toLowerCase() === "salad");
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
                {/* offer menu */}
                <MenuItems
                    sectionHeading="Today's Offer"
                    sectionSubHeading="Don't Miss"
                    loading={loading}
                    items={offered}
                    sectionBtnText="Order Your Favourate Food"
                ></MenuItems>
                {/* dessert menu */}
                <MenuItems
                    sectionBannerBgImgLink={sectionBannerBgImg}
                    sectionBannerTitle="Desserts"
                    sectionBannerDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta dolorem accusantium architecto voluptatum provident? Expedita beatae vero dignissimos sit dicta repellat, ad quaerat veritatis!"
                    loading={loading}
                    items={dessert}
                    sectionBtnText="Order Your Favourate Food"
                ></MenuItems>

            </div>
        </>
    );
};

export default Menu;