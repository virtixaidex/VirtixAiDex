const { getTradingPairs, getLiquidity } = require('./api/dexApi');
const TradingPair = require('./models/tradingPair');
const Liquidity = require('./models/liquidity');
const { formatTime } = require('./utils/utils');

async function main() {
    try {
        // Mendapatkan pasangan perdagangan
        const tradingPairs = await getTradingPairs();
        console.log('Available Trading Pairs:', tradingPairs);

        // Contoh mengambil likuiditas untuk pasangan tertentu
        const liquidityData = await getLiquidity('pair_id_example');
        const liquidity = new Liquidity('pair_id_example', liquidityData.volume, liquidityData.availableLiquidity);
        console.log(liquidity.displayLiquidityInfo());

        // Contoh menampilkan informasi waktu
        const time = formatTime(3661);
        console.log('Formatted Time:', time);

        // Membuat objek TradingPair dan menampilkan info
        const pair = new TradingPair('BTC/USD', 'BTC', 'USD', 35000);
        console.log(pair.displayPairInfo());
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
