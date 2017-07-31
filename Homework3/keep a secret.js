function createSecretHolder(secret) {

    var sec = secret;
    this.setSecret = function (setsec) {

        sec = setsec;
    }
    this.getSecret = function () {

        return sec;
    }
    return this;
}
