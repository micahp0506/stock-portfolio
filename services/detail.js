'use strict'


module.exports = {
    setInfo: setInfo,
    getName: getName,
    getSymbol: getSymbol,
    getLastPrice: getLastPrice
}

let Stock = {};

const setInfo = (n, s, l) => {
    Stock.Name = n;
    // console.log("storage details", Stock.Name);
    Stock.Symbol = s;
    // console.log("storage details", Stock.Symbol);
    Stock.LastPrice = l;
    // console.log("storage details", Stock.LastPrice);
}

const getName = () => {
    return Stock.Name;
}

const getSymbol = () => {
    return Stock.Symbol;
}

const getLastPrice = () =>{
    return Stock.LastPrice
}


