import app from "../services/appService";
import {Forecast, DaySummery, CurrentWCard} from "../components";
import MapWithClick from "../components/Map";
export default function Weather(props) {
    let W = app.GetWidth().width;

    function CalculateShow(W) {
        if (W > 1019) {
            return 10;
        } else if (W > 945 && W < 1019) {
            return 8;
        } else if (W > 721 && W < 945) {
            return 6;
        } else if (W > 609 && W < 721) {
            return 5;
        } else if (W > 497 && W < 609) {
            return 4;
        } else if (W > 385 && W < 497) {
            return 3;
        } else {
            return 2;
        }
    }

    return (
        <div className="container-fluid">
            <div className="row m-0 mt-5">
                <div className="col-12 col-md-6">
                    <CurrentWCard
                        data={{
                            CurrentWeather: props.data.CurrentWeather,
                            location: props.data.Location,
                            oneDayWeather: props.data.oneDayWeather,
                        }}
                        Unit={props.Unit}
                        Dark={props.Dark}
                        Lang={props.Lang}
                    />
                </div>
                <div className="col-12 col-md-6" style={{height: W > 767 ? "auto" : "300px"}}>
                    {props.search.lon && <MapWithClick preLocation={props.search} />}
                </div>
            </div>
            <div className="row m-0 my-4">
                <div className="col-12 mt-2">
                    <Forecast
                        data={props.data.Forecast}
                        Dark={props.Dark}
                        Unit={props.Unit}
                        NumOfSlid={CalculateShow(W)}
                        Lang={props.Lang}
                    />
                </div>
            </div>
            <div className="row m-0 my-4">
                <div className="col-12 mt-2">
                    <DaySummery
                        data={props.data.Forecast.slice(0, 3)}
                        Lang={props.Lang}
                        Dark={props.Dark}
                        Unit={props.Unit}
                    />
                </div>
            </div>
        </div>
    );
}
