import PropTypes from "prop-types";
import { Parallax } from 'react-parallax';

const Cover = ({ bgImg, title, description, isPageCover = false }) => {
    return (
        <>
            {(title || description || bgImg) ?
                <Parallax
                    blur={{ min: -50, max: 50 }}
                    bgImage={bgImg}
                    bgImageAlt={`Background Image for ${title}`}
                    strength={-200}
                >
                    <section className={`hero min-h-fit ${isPageCover ? "md:h-[850px]" : "md:h-[700px]"} px-8 md:px-16 lg:px-40 py-12 md:py-28`} >
                        <div className="hero-overlay bg-opacity-70 bg-black"></div>
                        <div className="hero-content text-center p-6 md:p-12 lg:p-20 text-white">
                            <div className="mb-4">
                                {title ? isPageCover ?
                                    <h1 className="font-cinzel mb-6 text-7xl font-bold uppercase">{title}</h1> : <h1 className="font-cinzel mb-5 text-5xl font-bold uppercase"><span className="text-6xl">{title[0]}</span>{title.slice(1, title.length)}</h1> : ""}
                                {description ?
                                    <p>{description}</p> : ""}
                            </div>
                        </div>
                    </section>
                </Parallax> : ""}
        </>
    );
};

Cover.propTypes = {
    isPageCover: PropTypes.bool,
    bgImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Cover;