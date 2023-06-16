import Card from "./Card";
import WSlider from "./WSlider";
import app from "../services/appService";
export default function Forecast(props) {
    const Cards = props.data.map((item, index) => {
        return (
            <Card
                key={index}
                Class={`${props.Dark ? "bg-info" : "bg-inherit"} border-0`}
                ImgSrc={item?.day?.condition?.icon}
                ImgAlt={item?.day?.CurrentWeather?.condition?.text}
                Header={true}
                HeaderClass="bg-transparent border-0 m-0"
                headerContent={
                    <div className="text-start">
                        <h4
                            className={` ${
                                !props.Dark ? "darkBlue" : index === 0 ? "darkBlue" : "text-white"
                            } fw-bold p-0`}
                        >
                            {index === 0 ? app.translate("Today", props.Lang) : app.GetDay(item.date, props.Lang)}
                        </h4>
                        <p className={`${props.Dark ? "text-white" : "grayText"} text-center m-0`}>
                            {app.getDayMonth(item.date, "en-US")}
                        </p>
                    </div>
                }
            >
                <h4 className="darkBlue">
                    {props.Unit === "f" ? item.day.maxtemp_f : item.day.maxtemp_c}
                    <sup>&deg;{props.Unit}</sup>
                </h4>
                <p className={`${props.Dark ? "text-light" : "darkGrayText"} m-0`}>
                    {app.translate("night", props.Lang)} {props.Unit === "f" ? item.day.mintemp_f : item.day.mintemp_c}
                    <sup>&deg;{props.Unit}</sup>
                </p>
                <p className={`${props.Dark ? "text-light" : "darkGrayText"} m-0`}>{item.day.condition.text}</p>
            </Card>
        );
    });
    return (
        <div className={`${props.Dark ? "bg-info" : "bg-white"} shadow-lg rounded-3`}>
            <h4 className={`${props.Dark ? "text-light" : "darkBlue "} p-2`}>{app.translate("10Days", props.Lang)}</h4>
            <hr />
            <WSlider slidesToShow={props.NumOfSlid}>{Cards}</WSlider>
        </div>
    );
}
