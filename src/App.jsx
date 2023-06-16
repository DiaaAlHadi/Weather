import {useState, useEffect} from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import F_Current from "./features/Forecast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Weather from "./pages/Weather";

function App() {
    const [control, setControl] = useState({
        Dark: false,
        Unit: "c",
        lang: "en-US",
    });

    const [search, setSearch] = useState("");

    const [model, setModel] = useState({
        q: "",
    });

    const [data, setData] = useState({
        CurrentWeather: {},
        Location: {},
        Forecast: [],
        oneDayWeather: [],
    });

    const getLocation = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((position) => {
                const location = `${position.coords.latitude},${position.coords.longitude}`;
                resolve(location);
            }, reject);
        });
    };

    useEffect(() => {
        document.body.className = control.Dark ? "bg-dark" : "bodyLight";
    }, [control.Dark]);

    useEffect(() => {
        if (search !== "") {
            F_Current.ACTIONS.GetCurrentWeather({q: search, days: 10, lang: control.lang}, (res) => {
                if (res)
                    setData((prev) => ({
                        ...prev,
                        CurrentWeather: res.current,
                        Location: res.location,
                        Forecast: res.forecast.forecastday,
                        oneDayWeather: [...res.forecast.forecastday[0].hour, ...res.forecast.forecastday[1].hour]
                        .filter((item) => new Date(item.time).getHours() >= new Date().getHours())
                        .slice(0, 24),
                    }));
            });
        } else {
            getLocation()
            .then((location) => {
                setModel((prev) => ({...prev, q: location}));
                F_Current.ACTIONS.GetCurrentWeather({q: location, days: 10, lang: control.lang}, (res) => {
                    if (res)
                        setData((prev) => ({
                            ...prev,
                            CurrentWeather: res.current,
                            Location: res.location,
                            Forecast: res.forecast.forecastday,
                            oneDayWeather: [...res.forecast.forecastday[0].hour, ...res.forecast.forecastday[1].hour]
                            .filter((item) => new Date(item.time).getHours() >= new Date().getHours())
                            .slice(0, 24),
                        }));
                });
            })
            .catch((error) => {
                alert(error)
            });
        }
    }, [control.lang, search]);

    return (
        <>
            <Navbar
                set={(newVal) => {
                    setControl(newVal);
                }}
                searchResult={(newVal) => {
                    setSearch(newVal);
                }}
                search={search}
                data={control}
            />
            <Weather
                Dark={control.Dark}
                Unit={control.Unit}
                Lang={control.lang}
                Result={data.search}
                data={data}
                search={{lat: data?.Location?.lat, lon: data?.Location?.lon}}
                searchResult={(newVal) => {
                    setSearch(newVal);
                }}
            />
        </>
    );
}

export default App;
