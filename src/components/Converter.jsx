import CurrencyList from "./CurrencyList.jsx";
import Value from "./Value.jsx";

import "./converter.css"
import {useState, useEffect} from "react";

export default function Converter(props) {
    let [value, setValue] = useState("")
    let [currencyValueFirst, setCurrencyValueFirst] = useState("")
    let [currencyValueSecond, setCurrencyValueSecond] = useState("")

    function handleChange(event) {
        setValue(event.target.value);
    }

    function changeCurrency() {
        switch (props.currency) {
            case "uan":
                setCurrencyValueFirst("ruble");
                setCurrencyValueSecond("dollar");
                break;
            case "ruble":
                setCurrencyValueFirst("uan");
                setCurrencyValueSecond("dollar");
                break;
            case "dollar":
                setCurrencyValueFirst("ruble");
                setCurrencyValueSecond("uan");
                break;
        }
    }

    useEffect(() => {
        changeCurrency();
    }, [props.currency])

    return (
        <section className="converter">
            <div className="converter__currency-wrapper">
                <CurrencyList currency={props.currency} />
                <input
                    type="text"
                    className="input"
                    placeholder="Количество"
                    onChange={handleChange}
                    value={value}
                />
            </div>
            <section className="value">
                <Value currencies={props.currencies} value={value} currency={currencyValueFirst} />
                <Value currencies={props.currencies} value={value} currency={currencyValueSecond} />
            </section>
        </section>
    )
}