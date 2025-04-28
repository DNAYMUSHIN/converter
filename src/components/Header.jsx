import "./header.css"

export default function Header (props) {
    return (
        <header className="header">
            <div className="title-wrapper">
                <h1 className="title">Конвертер валют</h1>
            </div>
            <ul className="header__list">
                <li className="header__list-item">
                    <button
                        onClick={() => props.onChange("uan")}
                        className={`header__button ${props.currency === "uan" ? "header__button-chosen" : ""}`}
                    >
                        Юань
                    </button>
                </li>
                <li className="header__list-item">
                    <button
                        onClick={() => props.onChange("ruble")}
                        className={`header__button ${props.currency === "ruble" ? "header__button-chosen" : ""}`}
                    >
                        Рубль
                    </button>
                </li>
                <li className="header__list-item">
                    <button
                        onClick={() => props.onChange("dollar")}
                        className={`header__button ${props.currency === "dollar" ? "header__button-chosen" : ""}`}
                    >
                        Доллар
                    </button>
                </li>
            </ul>
        </header>
    )
}