import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import Items from "../Shared/Items";

const PopularMenu = () => {
    const [popularMenu, setPopularMenu] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/menu.json")
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category.toLowerCase() === "popular".toLowerCase())
                setPopularMenu(popularItems);
            })
    }, []);

    return (
        <section>
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <Items items={popularMenu} isBgWhite={true}></Items>
        </section>
    );
};

export default PopularMenu;