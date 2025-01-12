
import { useState } from 'react';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../../Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../Hooks/UseMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Order = () => {
    const categories = ["salad", "pizza", "desserts", "  soup", "drinks"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = UseMenu();



    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered ');
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss || Order Food
                </title>
            </Helmet>
            <Cover img={orderImg} title="Order Food "></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="text-center p-5 gap-5 font-bold text-[25px] max-sm:text-[18px]">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Soups</Tab>


                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default Order;