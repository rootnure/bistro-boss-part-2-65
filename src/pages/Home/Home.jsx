import Container from "../../components/Container";
import About from "./About";
import Banner from "./Banner";
import Category from "./Category";
import ChefRecommends from "./ChefRecommends";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div className="space-y-24 mb-20">
            <Banner></Banner>
            <Container>
                <Category></Category>
                <About></About>
                <PopularMenu></PopularMenu>
                <section>
                    <h2 className="text-4xl text-center font-medium w-full py-20 bg-black text-white">Call Us: +88 0192345678910</h2>
                </section>
                <ChefRecommends></ChefRecommends>
            </Container>
            <Featured></Featured>
            <Container>
                <Testimonials></Testimonials>
            </Container>
        </div>
    );
};

export default Home;