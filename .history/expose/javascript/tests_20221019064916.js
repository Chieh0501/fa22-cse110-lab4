function discountPrice(prices, discount){
    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < prices.length; i++){
        const discountedPrice = prices[i] * (1 - discount);
        discounted.push(finalPrice);
    }

    console.log(i);

    return discounted;
}

console.log(discountPrice([100, 200, 300], 0.5));