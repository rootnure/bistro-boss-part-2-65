import bossBg from "../../assets/home/banner.jpg";

const About = () => {
    return (
        <section style={{ backgroundImage: `url("${bossBg}")` }} className="bg-cover py-20 text-center bg-fixed">
            <div className="m-20 px-40 py-20 bg-white w-3/4 mx-auto">
                <h2 className="text-5xl font-bold mb-4">Bistro Boss</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eos magni deserunt explicabo architecto laboriosam animi adipisci ipsam omnis accusamus cumque, molestiae eligendi eius quis consequuntur, quam eaque ducimus facere.</p>
            </div>
        </section>
    );
};

export default About;