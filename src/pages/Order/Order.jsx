import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import orderCoverImg from "../../assets/order/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import Container from "../../components/Container";
import useMenu from "../../hooks/useMenu";
import Loading from "../Shared/Loading";
import OrderTab from "./OrderTab";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu, loading] = useMenu();
    const drinks = menu.filter(item => item.category.toLowerCase() === "drinks");
    const desserts = menu.filter(item => item.category.toLowerCase() === "dessert");
    const pizzas = menu.filter(item => item.category.toLowerCase() === "pizza");
    const salads = menu.filter(item => item.category.toLowerCase() === "salad");
    const soups = menu.filter(item => item.category.toLowerCase() === "soup");
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <main className="space-y-24 pb-24">
                <Cover
                    bgImg={orderCoverImg}
                    title="Order Now"
                    description="Order your desire food from Bistro Boss Now!"
                    isPageCover={true}
                ></Cover>
                {loading ?
                    <Loading></Loading> :
                    <Container>
                        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                            <div className="text-center">
                                <TabList className="space-x-8 text-xl font-bold border-b-2 border-gray-400">
                                    <Tab>Salad</Tab>
                                    <Tab>Pizza</Tab>
                                    <Tab>Soups</Tab>
                                    <Tab>Desserts</Tab>
                                    <Tab>Drinks</Tab>
                                </TabList>
                            </div>
                            <TabPanel>
                                <OrderTab foodItems={salads}></OrderTab>
                            </TabPanel>
                            <TabPanel>
                                <OrderTab foodItems={pizzas}></OrderTab>
                            </TabPanel>
                            <TabPanel>
                                <OrderTab foodItems={soups}></OrderTab>
                            </TabPanel>
                            <TabPanel>
                                <OrderTab foodItems={desserts}></OrderTab>
                            </TabPanel>
                            <TabPanel>
                                <OrderTab foodItems={drinks}></OrderTab>
                            </TabPanel>
                        </Tabs>
                    </Container>}
            </main>
        </>
    );
};

export default Order;