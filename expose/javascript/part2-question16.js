let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const token in statistics){
    if(token[0] == 'r' || statistics[token] % 2 == 1){
        console.log(statistics[token]);
    }
}