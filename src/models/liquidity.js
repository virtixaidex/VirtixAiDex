class Liquidity {
    constructor(pairId, volume, availableLiquidity) {
        this.pairId = pairId;
        this.volume = volume;
        this.availableLiquidity = availableLiquidity;
    }

    displayLiquidityInfo() {
        return `Liquidity for pair ${this.pairId}: Volume: ${this.volume}, Available: ${this.availableLiquidity}`;
    }
}

module.exports = Liquidity;
