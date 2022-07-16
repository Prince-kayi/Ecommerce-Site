import React, { useEffect, useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
let count = 0;
const ImageSlider = ({ slide }) => {
    const [current, setCurrent] = useState(0);
    const nextSlide = () => {
        count = (count + 1) % slide.length
        setCurrent(count)
    }
    const prevSlide = () => {
        const prevLength = slide.length;
        count = (current + prevLength - 1) % prevLength;
        setCurrent(count)
    }
    useEffect(() => {
        startSlider();
    }, [])
    const startSlider = () => {
        setInterval(() => {
            nextSlide();
        }, 3000)
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