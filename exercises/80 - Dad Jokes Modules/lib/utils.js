function generateRandomNumber(max) {
        return Math.floor(max * Math.random());
}

export function recursiveRandomItemFromArray(arr, not) {
        const item = arr[generateRandomNumber(arr.length)];
        if (item === not) {
                return recursiveRandomItemFromArray(arr, not);
        }
        return item;
}

export function wait(ms = 0) { 
        return new Promise(resolve => setTimeout(resolve, ms));
}
