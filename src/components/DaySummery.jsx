import {useState, useEffect} from "react";
import {Table} from "react-bootstrap";
import app from "../services/appService";

export default function DaySummery(props) {
    const Cards = props.data.map((item, index) => (
        <div className={`${props.Dark ? "border" : ""} table-responsive my-2 shadow-lg rounded-3`}>
            <Table className={`text-center table-borderless align-middle ${props.Dark ? "table-dark" : "table-light"}`}>
                <thead>
                    <tr className="border-bottom">
                        <th colSpan="2" className="d-flex text-start p-3">
                            <h2
                                className={`fw-bold d-inline-block fs-1 ${
                                    index === 0 ? "blueText" : props.Dark ? "text-white" : "darkBlue"
                                }`}
                            >
                                {item.date.split("-")[2]}
                            </h2>
                            <div className="col ms-1" style={{fontSize: "12px"}}>
                                <span
                                    className={`d-block ${
                                        index === 0 ? "blueText" : props.Dark ? "text-white" : "darkBlue"
                                    }`}
                                >
                                    {app.GetMonth(item.date, props.Lang)}
                                </span>
                                <span
                                    className={`d-block ${
                                        index === 0 ? "blueText" : props.Dark ? "text-white" : "darkBlue"
                                    }`}
                                >
                                    {index === 0
                                        ? app.translate("Today", props.Lang)
                                        : index === 1
                                        ? app.translate("Tomorrow", props.Lang)
                                        : app.GetDay(item.date, props.Lang)}
                                </span>
                            </div>
                        </th>
                        <th className="darkGrayText">{app.translate("Pressure", props.Lang)}</th>
                        <th className="darkGrayText">{app.translate("Humidity", props.Lang)}</th>
                        <th className="darkGrayText">{app.translate("Wind, m/s", props.Lang)}</th>
                        <th className="darkGrayText">{app.translate("FeelsLike", props.Lang)}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="2" className="d-flex text-start">
                            <div className="col-6">
                                <span className="d-block small grayText">{app.translate("Morning", props.Lang)}</span>
                                <span className={`${props.Dark ? "text-white" : "darkBlue"} d-block fw-bold`}>
                                    {GetAverage(6, 11, props.Unit, item)}
                                </span>
                            </div>
                            <div className="col-6 text-center">
                                <img src={item.hour[6].condition.icon} alt={item.hour[6].condition.text} />
                                {item.hour[6].condition.text}
                            </div>
                        </td>
                        <td>{item.hour[6].pressure_in}</td>
                        <td>{item.hour[6].humidity}</td>
                        <td>{item.hour[6].wind_mph}</td>
                        <td>{props.Unit === "f" ? item.hour[6].feelslike_f : item.hour[6].feelslike_c}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="d-flex text-start">
                            <div className="col-6">
                                <span className="d-block small grayText">{app.translate("Day", props.Lang)}</span>
                                <span className={`${props.Dark ? "text-white" : "darkBlue"} d-block fw-bold`}>
                                    {GetAverage(11, 17, props.Unit, item)}
                                </span>
                            </div>
                            <div className="col-6 text-center">
                                <img src={item.hour[11].condition.icon} alt={item.hour[11].condition.text} />
                                {item.hour[11].condition.text}
                            </div>
                        </td>
                        <td>{item.hour[11].pressure_in}</td>
                        <td>{item.hour[11].humidity}</td>
                        <td>{item.hour[11].wind_mph}</td>
                        <td>{props.Unit === "f" ? item.hour[11].feelslike_f : item.hour[11].feelslike_c}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="d-flex text-start">
                            <div className="col-6">
                                <span className="d-block small grayText">{app.translate("Evening", props.Lang)}</span>
                                <span className={`${props.Dark ? "text-white" : "darkBlue"} d-block fw-bold`}>
                                    {GetAverage(18, 23, props.Unit, item)}
                                </span>
                            </div>
                            <div className="col-6 text-center">
                                <img src={item.hour[18].condition.icon} alt={item.hour[18].condition.text} />
                                {item.hour[18].condition.text}
                            </div>
                        </td>
                        <td>{item.hour[18].pressure_in}</td>
                        <td>{item.hour[18].humidity}</td>
                        <td>{item.hour[18].wind_mph}</td>
                        <td>{props.Unit === "f" ? item.hour[18].feelslike_f : item.hour[18].feelslike_c}</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="d-flex text-start">
                            <div className="col-6">
                                <span className="d-block grayText small ">{app.translate("night", props.Lang)}</span>
                                <span className={`${props.Dark ? "text-white" : "darkBlue"} d-block fw-bold`}>
                                    {GetAverage(0, 5, props.Unit, item)}
                                </span>
                            </div>
                            <div className="col-6 text-center">
                                <img src={item.hour[0].condition.icon} alt={item.hour[5].condition.text} />
                                {item.hour[0].condition.text}
                            </div>
                        </td>
                        <td>{item.hour[0].pressure_in}</td>
                        <td>{item.hour[0].humidity}</td>
                        <td>{item.hour[0].wind_mph}</td>
                        <td>{props.Unit === "f" ? item.hour[0].feelslike_f : item.hour[0].feelslike_c}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    ));
    return <>{Cards}</>;
}

function GetAverage(start, end, Unit, item) {
    return (
        <>
            {Unit === "f"
                ? item.hour[start].temp_f > 0
                    ? `+${item.hour[start].temp_f}`
                    : `-${item.hour[start].temp_f}`
                : item.hour[start].temp_c > 0
                ? `+${item.hour[start].temp_c}`
                : `-${item.hour[start].temp_c}`}
            ...
            {Unit === "f"
                ? item.hour[end].temp_f > 0
                    ? `+${item.hour[end].temp_f}`
                    : `-${item.hour[end].temp_f}`
                : item.hour[end].temp_c > 0
                ? `+${item.hour[end].temp_c}`
                : `-${item.hour[end].temp_c}`}
        </>
    );
}
