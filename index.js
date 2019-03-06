let balance = 500.00;

class Account {
  constructor(name) {
    this.username = name;
    this.transactions = [];
  }
  addTransaction (transaction) {
    this.transactions.push(transaction);
  }
  get balance () {
    let balance = 0;
    for (let transaction of this.transactions) {
      balance += transaction.amount;
    }
    return balance;
  }
}

class Transactions {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  isAllowed () {
    return (this.value + this.account.balance > 0) ? true : false;
    }
  commit () {
    if (this.isAllowed()) {
    this.time = new Date();
    this.amount = this.value;
    this.account.addTransaction(this);
    return true;
    } else {
      return false;
    }
  }
}
class Withdrawal extends Transactions {
  get value () {
    return -this.amount;
  }
}

class Deposit extends Transactions {
  get value () {
    return this.amount;
  }
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("Darren");

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
// console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
// console.log('Transaction 2:', t2);

t3 = new Deposit(120.00, myAccount);
t3.commit();
//console.log('Transaction 3:', t3);

t4 = new Withdrawal(50.25, myAccount);
t4.commit();
// console.log('Transaction 1:', t1);

t5 = new Withdrawal(9.99, myAccount);
t5.commit();


console.log(myAccount);
console.log('Balance:', myAccount.balance);
