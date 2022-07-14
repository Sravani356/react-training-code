var Account = /** @class */ (function () {
    function Account(amount, openingDate) {
        this.amount = 0;
        this.amount = amount;
        this.openingDate = openingDate;
    }
    return Account;
}());
var account1 = new Account(100, new Date());
console.log(account1.amount);
console.log(account1.openingDate);
