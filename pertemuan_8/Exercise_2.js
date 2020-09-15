let account = {
    Name: "Kevin wullur",
    Expenses:[],
        addExpenses: function(description, amount)
        {
            this.Expenses.push({"description":description,"amount":amount});
        },
        getAccountSummary:function()
        {
            let totalExpenses=0;
            this.Expenses.forEach(function(el)
            {
                totalExpenses=totalExpenses+el.amount;
            });
        return totalExpenses;
        }

};
account.addExpenses('Beli camilan', 27000);
account.addExpenses('Beli minuman', 6000);

console.log("Total biaya"+name+" = Rp."+account.getAccountSummary());