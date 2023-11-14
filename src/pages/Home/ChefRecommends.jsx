import SectionTitle from "../../components/SectionTitle";
import chefRecImg from "../../assets/home/slide1.jpg";
import MainBtn from "../../components/MainBtn";

const ChefRecommends = () => {
    return (
        <section>
            <SectionTitle
                heading="Chef Recommends"
                subHeading="Should Try"
            ></SectionTitle>
            <div className="grid grid-cols-3 gap-6">
                <div className="card bg-base-100 rounded-lg">
                    <figure className="h-60">
                        <img src={chefRecImg} alt="Shoes" className="min-w-full min-h-full" />
                    </figure>
                    <div className="card-body bg-gray-100 items-center text-center rounded-b-lg">
                        <h2 className="card-title text-2xl font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <MainBtn isBgWhite>Add To Cart</MainBtn>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 rounded-lg">
                    <figure className="h-60">
                        <img src={chefRecImg} alt="Shoes" className="min-w-full min-h-full" />
                    </figure>
                    <div className="card-body bg-gray-100 items-center text-center rounded-b-lg">
                        <h2 className="card-title text-2xl font-bold ">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <MainBtn isBgWhite>Add To Cart</MainBtn>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 rounded-lg">
                    <figure className="h-60">
                        <img src={chefRecImg} alt="Shoes" className="min-w-full min-h-full" />
                    </figure>
                    <div className="card-body bg-gray-100 items-center text-center rounded-b-lg">
                        <h2 className="card-title text-2xl font-bold">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <MainBtn isBgWhite>Add To Cart</MainBtn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;