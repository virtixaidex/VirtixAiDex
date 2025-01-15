const axios = require('axios');

// Base URL untuk API DEX
const BASE_URL = process.env.DEX_API_URL || 'https://api.dex.com';

// Fungsi untuk mengambil data pasangan perdagangan
async function getTradingPairs() {
    try {
        const response = await axios.get(`${BASE_URL}/trading-pairs`);
        return response.data;
    } catch (error) {
        console.error('Error fetching trading pairs:', error);
        throw error;
    }
}

// Fungsi untuk mengambil data likuiditas
async function getLiquidity(pairId) {
    try {
        const response = await axios.get(`${BASE_URL}/liquidity/${pairId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching liquidity:', error);
        throw error;
    }
}

module.exports = { getTradingPairs, getLiquidity };
