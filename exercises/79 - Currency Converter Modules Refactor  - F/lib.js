const userEndpoint = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies';
const ratesByBase = {};

export async function fetchCurrency(currency = 'usd') {
        const response = await fetch(`${userEndpoint}/${currency}.json`);

        if (response.status === 200) {
                const responseData = await response.json();
                return responseData[currency];
        }
        return response.status;
}

export async function convert(amount, from, to) {
        if (!ratesByBase[from]) {
                console.log(`Adding ${from} currency into our local array`);
                ratesByBase[from] = await fetchCurrency(from);
        }
        const rate = ratesByBase[from][to];
        const convertedAmount = rate * amount;
        return convertedAmount;
}
