type Ticker = (ticker: number) => void

let startTime = Date.now();
function handleFrame() {
    tickers.forEach(ticker => {
        ticker(Date.now() - startTime)
    })
    startTime = Date.now();
    requestAnimationFrame(handleFrame)
}

requestAnimationFrame(handleFrame)

const tickers: Ticker[] = [];
export function addTicker(ticker: Ticker) {
    tickers.push(ticker)
}