import "./currencyList.css"

export default function CurrencyList(props) {


    return <ul className="converter__currency-list">
        <li
            className={`converter__currency-item ${props.currency === "ruble" ? "converter__currency-item_chosen" : ""}`}
        >
            ₽
        </li>
        <li
            className={`converter__currency-item ${props.currency === "dollar" ? "converter__currency-item_chosen" : ""}`}
        >
            $
        </li>
        <li
            className={`converter__currency-item ${props.currency === "uan" ? "converter__currency-item_chosen" : ""}`}
        >
            ¥
        </li>
    </ul>
}