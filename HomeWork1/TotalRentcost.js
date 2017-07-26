function rentalCarCost(d) {
    var total, amount;
    amount = d * 40;
    return total = (d >= 7) ? amount - 50 : (d < 7 && d >= 3) ? amount - 20 : amount;
}