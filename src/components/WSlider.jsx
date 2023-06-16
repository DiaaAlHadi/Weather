import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";
export default function WSlider(props) {
    var settings = {
        speed: 500,
        slidesToShow: props.slidesToShow,
        slidesToScroll: props.slidesToShow,
        infinite: false,
        nextArrow: <NextArrow style={{right: "0"}} />,
        prevArrow: <PrevArrow style={{left: "-10px", zIndex: "1"}} />,
    };

    return (
            <Slider {...settings} className="w-100 p-0">
                {props.children}
            </Slider>
    );
}

function NextArrow(props) {
    const {className, style, onClick} = props;
    return <div className={className} style={{...style, display: "block", right: "0"}} onClick={onClick} />;
}

function PrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, background: "unset", color: "black", zIndex: "1", left: "-10px"}}
            onClick={onClick}
        />
    );
}
