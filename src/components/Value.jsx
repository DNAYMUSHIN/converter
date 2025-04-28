import CurrencyList from "./CurrencyList.jsx";

import "./value.css"

export default function Value(props) {
    const calculateMoney = () => {
        const value = Number(props.value);
        if (isNaN(value)) return 0;

        function rubToCny(rubAmount, usdToRubRate, usdToCnyRate) {
            const dollars = rubAmount / usdToRubRate; // RUB → USD
            const yuan = dollars * usdToCnyRate;      // USD → CNY
            return yuan;
        }

        switch (props.currency) {
            case "ruble":
                return value * Number(props.currencies.rates["RUB"]);
            case "uan":
                return rubToCny(value, Number(props.currencies.rates["RUB"]), Number(props.currencies.rates["CNY"]));
            case "dollar":
                return value * (1 / Number(props.currencies.rates["RUB"]));
            default:
                return 0;
        }
    };

    const money = Math.round(calculateMoney() * 100) / 100;

    return (
        <div className="value__wrapper">
            <div className="value__sign">
                <CurrencyList currency={props.currency} />
            </div>
            <p className="value__text">{money}</p>
        </div>
    )
}