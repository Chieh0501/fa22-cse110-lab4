function discountPrice(prices, discount){
    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < length; i++){
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

    console.log(length);

    return discounted;
}

console.log('3' + 2);