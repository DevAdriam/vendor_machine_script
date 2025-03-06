type Drink = {
  name: string;
  price: number;
};

class VendingMachine {
  private drinks: Drink[] = [
    { name: "Coca Cola", price: 3.35 },
    { name: "Pepsi", price: 2.1 },
    { name: "Orange", price: 2.85 },
  ];

  private balance: number = 0;

  insertMoney(amount: number): void {
    if ([5, 10, 15, 20].includes(amount)) {
      this.balance += amount;
      console.log(`Inserted $${amount}. Current balance: $${this.balance}`);
    } else {
      console.log("Invalid amount. Please insert 5$, 10$, 15$, or 20$");
    }
  }

  selectDrink(drinkName: string): void {
    const drink = this.drinks.find(
      (d) => d.name.toLowerCase() === drinkName.toLowerCase()
    );

    if (!drink) {
      console.log("Invalid selection. Please choose a valid drink.");
      return;
    }

    if (this.balance < drink.price) {
      console.log(
        `Insufficient balance. ${drink.name} costs $${drink.price}. Please insert more money.`
      );
      return;
    }

    this.balance -= drink.price;
    console.log(
      `Purchased ${drink.name} for $${drink.price}. Remaining balance: $${this.balance}`
    );
  }

  askForAnotherPurchase(): boolean {
    return this.balance > 0;
  }
}

const vendingMachine = new VendingMachine();
vendingMachine.insertMoney(10);
vendingMachine.selectDrink("Pepsi");

if (vendingMachine.askForAnotherPurchase()) {
  console.log(
    "You have remaining balance. Would you like to buy another drink?"
  );
} else {
  console.log("Thank you for your purchase!");
}
