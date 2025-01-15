class TradingPair {
    constructor(symbol, baseAsset, quoteAsset, price) {
        this.symbol = symbol;
        this.baseAsset = baseAsset;
        this.quoteAsset = quoteAsset;
        this.price = price;
    }

    displayPairInfo() {
        return `${this.baseAsset} / ${this.quoteAsset} at price: ${this.price}`;
    }
}

module.exports = TradingPair;
