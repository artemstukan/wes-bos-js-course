const userEndpoint = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies';

const form = document.querySelector('.app form');
const fromSelect = document.querySelector('select[name="from_currency"]');
const toSelect = document.querySelector('select[name="to_currency"]');
const fromInput = document.querySelector('input[name="from_amount"]');
const toEl = document.querySelector('p.to_amount');

const ratesByBase = {};

const currencies = {
        USD: 'United States Dollar',
        AUD: 'Australian Dollar',
        BGN: 'Bulgarian Lev',
        BRL: 'Brazilian Real',
        CAD: 'Canadian Dollar',
        CHF: 'Swiss Franc',
        CNY: 'Chinese Yuan',
        CZK: 'Czech Republic Koruna',
        DKK: 'Danish Krone',
        GBP: 'British Pound Sterling',
        HKD: 'Hong Kong Dollar',
        HRK: 'Croatian Kuna',
        HUF: 'Hungarian Forint',
        IDR: 'Indonesian Rupiah',
        ILS: 'Israeli New Sheqel',
        INR: 'Indian Rupee',
        JPY: 'Japanese Yen',
        KRW: 'South Korean Won',
        MXN: 'Mexican Peso',
        MYR: 'Malaysian Ringgit',
        NOK: 'Norwegian Krone',
        NZD: 'New Zealand Dollar',
        PHP: 'Philippine Peso',
        PLN: 'Polish Zloty',
        RON: 'Romanian Leu',
        RUB: 'Russian Ruble',
        SEK: 'Swedish Krona',
        SGD: 'Singapore Dollar',
        THB: 'Thai Baht',
        TRY: 'Turkish Lira',
        ZAR: 'South African Rand',
        EUR: 'Euro',
};

async function fetchCurrency(currency = 'usd') {
        const response = await fetch(`${userEndpoint}/${currency}.json`);

        if (response.status === 200) {
                const responseData = await response.json();
                return responseData[currency];
        }
        return response.status;
}

function generateOptions(options) {
        return Object.entries(options)
                .map(
                        ([currencyCode, currencyName]) =>
                                ` <option value=${currencyCode}>${currencyCode} - ${currencyName}</option>`
                )
                .join('');
}

async function convert(amount, from, to) {
        if (!ratesByBase[from]) {
                console.log(`Adding ${from} currency into our local array`);
                ratesByBase[from] = await fetchCurrency(from);
        }
        const rate = ratesByBase[from][to];
        const convertedAmount = rate * amount;
        return convertedAmount;
}

function formatCurrency(amount, currency) {
        return Intl.NumberFormat('en', { style: 'currency', currency }).format(amount);
}

async function handleInput(event) {
        const fromCurrency = fromSelect.value.toLowerCase();
        if (event.target !== fromInput) {
                fromInput.value = formatCurrency(fromInput.dataset.unformattedValue, fromCurrency);
        } else {
                fromInput.dataset.unformattedValue = fromInput.value;
        }
        const toCurrency = toSelect.value.toLowerCase();
        const rawAmount = await convert(fromInput.dataset.unformattedValue, fromCurrency, toCurrency);
        toEl.textContent = formatCurrency(rawAmount, toCurrency);
}

const optionsHTML = generateOptions(currencies);

fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

form.addEventListener('input', handleInput);

fromInput.addEventListener('blur', function() {
        console.log('blurred!');
        fromInput.type = 'text';
        fromInput.dataset.unformattedValue = fromInput.value;
        fromInput.value = formatCurrency(fromInput.value, fromSelect.value);
});

fromInput.addEventListener('focus', function() {
        fromInput.type = 'number';
        fromInput.value = fromInput.dataset.unformattedValue;
});
