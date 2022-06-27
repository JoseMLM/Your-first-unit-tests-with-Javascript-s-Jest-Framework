function fromEuroToDollar(euro) {
    return (euro*1.2);
}

function fromDollarToYen(dollar) {
    let euro = dollar/1.2;
    return euro*127.9;
}

function fromYanToPound(Yan) {
    let euro = Yan/127.9;
    return  euro*0.8;
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYanToPound}