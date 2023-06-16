import app from "../services/appService";
import {CiLocationOn} from "react-icons/ci";
import {WSlider, Card} from ".";

export default function CurrentWCard(props) {
    const TodayCards = props?.data?.oneDayWeather.map((hour, index) => {
        return (
            <Card
                key={index}
                ImgSrc={hour.condition.icon}
                ImgAlt={hour.condition.text}
                ImgWidth={"50%"}
                Class={`${props.Dark && "bg-info "} border-0`}
            >
                <p className={`${props.Dark ? "text-white" : "grayText"}  p-0 m-0`} style={{fontSize: "12px"}}>
                    {index === 0 ? app.translate("now", props.Lang) : hour.time.split(" ")[1]}
                </p>
                <p className={`${props.Dark ? "text-white" : "darkBlue"} fw-bold p-0 m-0`} style={{fontSize: "12px"}}>
                    {props.Unit === "f" ? hour.temp_f : hour.temp_c} <sup>&deg;{props.Unit}</sup>
                </p>
            </Card>
        );
    });

    return (
        <div className={`rounded-3 mb-2 ${props.Dark ? "bg-info" : "bg-white"}`}>
            <div className="row">
                <div className="col-6">
                    <p className={`m-0 ${props.Dark ? "text-white" : "darkGrayText"}`}>
                        {app.getCurrentDateTime(props.Lang)}
                    </p>
                    <h3 className={`${props.Dark ? "text-white" : "darkBlue"} fw-medium`}>
                        {props?.data?.location?.name}
                        {"  "}
                        <CiLocationOn size={18} />
                    </h3>
                    <h1 className={`m-0 ${props.Dark ? "text-white" : "darkBlue"}`}>
                        {props.Unit === "f" ? props.data?.CurrentWeather.temp_f : props.data?.CurrentWeather.temp_c}
                        <sup>&deg;{props.Unit}</sup>
                    </h1>
                    <p className={props.Dark ? "text-white" : "darkGrayText"}>
                        {props.data?.CurrentWeather.condition?.text}, {app.translate("FeelsLike", props.Lang)}{" "}
                        <span className="darkBlue">
                            {props.Unit === "f"
                                ? props.data?.CurrentWeather.feelslike_f
                                : props.data?.CurrentWeather.feelslike_c}
                            <sup>&deg;{props.Unit}</sup>
                        </span>
                    </p>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <img
                        src={props.data?.CurrentWeather.condition?.icon}
                        alt={props.data?.CurrentWeather.condition?.text}
                        className="h-100 w-auto"
                    />
                </div>
            </div>
            
                <WSlider slidesToShow={5}>{TodayCards}</WSlider>
            
        </div>
    );
}
