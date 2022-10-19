function discountPrice(prices, discount){
    const discounted = [];
    const finalPrice = 0;

    for (let i = 0; i < prices.length; i++){
        const discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }

    console.log(finalPrice);

    return discounted;
}

console.log(discountPrice([100, 200, 300], 0.5));