import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
const ImageSlider = ({ slide }) => {
    const [current, setCurrent] = useState(0);
    const length = slide.length
    const nextSlide = () => {
        setCurrent(current == length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current == 0 ? length - 1 : current - 1)
    }
    return (
        <>
            <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={nextSlide} />
                <FaArrowAltCircleRight className="right-arrow" onClick={prevSlide} />
                {SliderData.map((slide, index) => {
                    return (
                        <div className={index == current ? "slide-active" : "slide"} key={index}>
                            {index === current && <img src={slide.image} alt="Kratos" className="image" />
                            }
                        </div>
                    )
                })}
            </section>

        </>
    );

};


export default ImageSlider;