import app from "../services/appService";
import PropTypes from "prop-types";
import React from "react";

export default function Card(props) {
    return (
        <div className={`card  ${props.Class}`}>
            {props.Header && <div className={`card-header py-0 ${props.HeaderClass}`}>{props.headerContent}</div>}
            {props.Img && (
                <img
                    src={props.ImgSrc}
                    alt={props.ImgAlt}
                    width={props.ImgWidth}
                    height={props.ImgHeight}
                    className={`${props.ImgClass}`}
                />
            )}
            <div className={`card-body py-0 ${props.BodyClass}`}>{props.children}</div>
            {props.Footer && <div className={`card-footer py-0 ${props.FooterClass}`}>{props.footerContent}</div>}
        </div>
    );
}
Card.propTypes = {
    Dark: PropTypes.bool,
    Class: PropTypes.string,
    HeaderClass: PropTypes.string,
    BodyClass: PropTypes.string,
    FooterClass: PropTypes.string,
    ImgClass: PropTypes.string,
    Header: PropTypes.bool,
    Img: PropTypes.bool,
    ImgWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ImgHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    Footer: PropTypes.bool,
    headerContent: PropTypes.element,
    footerContent: PropTypes.element,
    ImgSrc: PropTypes.string,
    ImgAlt: PropTypes.string,
};

Card.defaultProps = {
    Class: "",
    HeaderClass: "",
    BodyClass: "",
    FooterClass: "",
    ImgClass: "",
    Header: false,
    Img: true,
    Footer: false,
    // ImgWidth: 80,
    ImgHeight: 60,
};
