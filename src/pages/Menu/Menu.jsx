import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import MenuItems from "./MenuItems";
import sectionBannerBgImg from "../../assets/home/chef-service.jpg";

const Menu = () => {
    const [menu, loading] = useMenu();
    const offers = menu.filter(item => item.category.toLowerCase() === "offered");
    const desserts = menu.filter(item => item.category.toLowerCase() === "dessert");
    const pizzas = menu.filter(item => item.category.toLowerCase() === "pizza");
    const salads = menu.filter(item => item.category.toLowerCase() === "salad");
    const soups = menu.filter(item => item.category.toLowerCase() === "soup");
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <div className="space-y-24 mb-24">
                <Cover
                    isPageCover
                    bgImg={menuImg}
                    title="Menu"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur similique ex iure quo magnam magni quos velit inventore corporis dolorum?"
                ></Cover>
                {/* offer menu */}
                <MenuItems
                    sectionHeading="Today's Offer"
                    sectionSubHeading="Don't Miss"
                    loading={loading}
                    items={offers}
                    sectionBtnText="Order Your Favourate Food"
                ></MenuItems>
                {/* dessert menu */}
                <MenuItems
                    sectionBannerBgImgLink={sectionBannerBgImg}
                    sectionBannerTitle="Desserts"
                    sectionBannerDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta dolorem accusantium architecto voluptatum provident? Expedita beatae vero dignissimos sit dicta repellat, ad quaerat veritatis!"
                    loading={loading}
                    items={desserts}
                    sectionBtnText="Order Your Favourate Food"
                ></MenuItems>
                {/* pizza menu */}
                <MenuItems
                    sectionBannerBgImgLink={sectionBannerBgImg}
                    sectionBannerTitle="Pizza"
                    sectionBannerDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta dolorem accusantium architecto voluptatum provident? Expedita beatae vero dignissimos sit dicta repellat, ad quaerat veritatis!"
                    loading={loading}
                    items={pizzas}
                    sectionBtnText="Order Your Favourate Food"
                ></MenuItems>
                {/* salads menu */}
                <MenuItems
                    sectionBannerBgImgLink={sectionBannerBgImg}
                    sectionBannerTitle="Salad"
                    sectionBannerDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta dolorem accusantium architecto voluptatum provident? Expedita beatae vero dignissimos sit dicta repellat, ad quaerat veritatis!"
                    loading={loading}
                    items={salads}
                    sectionBtnText="Order Your Favourate Food"
                ></MenuItems>
                {/* soups menu */}
                <MenuItems
                    sectionBannerBgImgLink={sectionBannerBgImg}
                    sectionBannerTitle="Soups"
                    sectionBannerDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta dolorem accusantium architecto voluptatum provident? Expedita beatae vero dignissimos sit dicta repellat, ad quaerat veritatis!"
                    loading={loading}
                    items={soups}
                    sectionBtnText="Order Your Favourate Food"
                ></MenuItems>
            </div>
        </>
    );
};

export default Menu;