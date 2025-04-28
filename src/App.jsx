import {useEffect, useState} from 'react'
import Header from './components/Header'

import './App.css'
import Converter from "./components/Converter.jsx";

function App() {
    const api_key = "b443dad3c01b4da28425a5bca860a375";
    const [currency, setCurrency] = useState("ruble")

    function handleCurrencyChange(curr) {
        setCurrency(curr);
    }


    const [currencies, setCurrencies] = useState(null)

    useEffect(() => {

            fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=" + api_key)
                .then(res => res.json())
                .then(data => {
                    setCurrencies(data)
                });

    }, []);


    return (
    <>
        <Header onChange={handleCurrencyChange} currency={currency} />
        {currencies && <Converter currencies={currencies} currency={currency} />}
    </>
    )
}

export default App


