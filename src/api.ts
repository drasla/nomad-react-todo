const BASE_URL = "https://api.coinpaprika.com";
const NICO_BASE_URL = "https://ohlcv-api.nomadcoders.workers.dev";

export function fetchCoins() {
    return fetch(`${BASE_URL}/v1/coins`).then(response => response.json());
}

export function fetchCoinInfo(coinId: string) {
    return fetch(`${BASE_URL}/v1/coins/${coinId}`).then(response => response.json());
}

export function fetchCoinTickers(coinId: string) {
    return fetch(`${BASE_URL}/v1/tickers/${coinId}`).then(response => response.json());
}

export function fetchCoinHistory(coinId: string) {
    return fetch(
        `${NICO_BASE_URL}?coinId=${coinId}`,
    ).then(response => response.json());
}
