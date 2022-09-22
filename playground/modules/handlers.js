export async function handleButtonClick(event) {
        const { localCurrency, default: currency } = await import('./currencies.js');
        // console.log(currenciesModule.default);
        console.log(localCurrency);
        console.log(currency);
}
