import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Input} from "../components";
import {CiSearch} from "react-icons/ci";
import {FiGlobe} from "react-icons/fi";
import {Dropdown, DropdownButton} from "react-bootstrap";
import app from "../services/appService";
import {BsFillMoonFill, BsFillSunFill} from "react-icons/bs";
export default function Navbar(props) {
    const [model, setModel] = useState({
        search: props.search,
    });
    return (
        <nav className={`navbar ${props.data.Dark ? "bg-dark" : ""} border-bottom`}>
            <div className="container-fluid">
                <div className="row w-100 align-items-center">
                    <h2 className="navbar-brand today fw-bold col-4 py-0 m-0">
                        Weather<sup>&deg;{props.data.Unit}</sup>
                    </h2>
                    <Input
                        Type={"search"}
                        Icon
                        Placeholder={"SearchPlaceHolder"}
                        Lang={props.data.lang}
                        ContainerClass="col-4"
                        Class={`${props.data.Dark ? "bg-body-secondary" : "bg-light"}`}
                        InputContainerClass={`${props.data.Dark ? "bg-body-secondary" : "bg-light"}`}
                        Model={model.search}
                        OnChange={(newVal) => {
                            setModel((prev) => ({...prev, search: newVal}));
                        }}
                        OnKeyDown={(event) => {
                            if (event.keyCode === 13) {
                                props.searchResult(event.target.value);
                            }
                        }}
                    >
                        <CiSearch className={`${props.data.Dark ? "text-dark" : "text-dark"}`} />
                    </Input>
                    <div className="col-4 d-flex justify-content-evenly">
                        <DropdownButton
                            id="language-dropdown"
                            title={<FiGlobe className={`${props.data.Dark ? "text-white" : "text-black"}`} />}
                            onSelect={(eventKey) => {
                                if (eventKey !== props.data.Lang) props.set((prev) => ({...prev, lang: eventKey}));
                            }}
                            aria-labelledby="language-dropdown-label"
                        >
                            <Dropdown.Item eventKey="ar">{app.translate("Arabic", props.data.Lang)}</Dropdown.Item>
                            <Dropdown.Item eventKey="en-US">{app.translate("English", props.data.Lang)}</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton
                            id="unit-dropdown"
                            title={
                                <span className={`${props.data.Dark ? "text-white" : "text-dark"}`}>
                                    {props.data.Unit}
                                </span>
                            }
                            onSelect={(eventKey) => {
                                if (eventKey !== props.data.Unit) props.set((prev) => ({...prev, Unit: eventKey}));
                            }}
                            className="text-whtie"
                            aria-labelledby="unit-dropdown-label"
                        >
                            <Dropdown.Item eventKey="f">
                                F<sup>&deg;c</sup>
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="c">
                                C<sup>&deg;c</sup>
                            </Dropdown.Item>
                        </DropdownButton>
                        <button
                            className="btn p-0"
                            onClick={() => {
                                props.set((prev) => ({...prev, Dark: !prev.Dark}));
                            }}
                        >
                            {props.data.Dark ? <BsFillMoonFill fill="white" /> : <BsFillSunFill />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
