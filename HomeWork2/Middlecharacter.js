function getMiddle(str) {
    return (str.length % 2 == 1) ? str.substring((str.length) / 2, ((str.length) / 2) + 1) : str.substring(((str.length) / 2) - 1, (((str.length) / 2) - 1) + 2)

}