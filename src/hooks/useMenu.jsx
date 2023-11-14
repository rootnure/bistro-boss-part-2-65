import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/bistro-boss-restaurant-resources/main/menu.json")
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);
            })
    }, []);
    return [menu, loading];
};

export default useMenu;