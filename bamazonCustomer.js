const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Dilldill1",
    database: "bamazon_db"
  });

connection.connect(function(err) {
    if (err) throw err;
    start();
});

function start() {
    // query the database for all items being auctioned
    console.log("\n=====================================\n");
    console.log("WELCOME TO THE BAMAZON ADULT STORE!!!\n");
    console.log("=====================================\n");

    console.log("\nLIST OF ITEMS:\n")

    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log(
          "\nProduct: " +
            res[i].prodName +
            "\nDeptartment: " +
            res[i].deptName +
            "\nPrice: " +
            res[i].price +
            "\nQuantity: " +
            res[i].quantity
        );
      };
    })
}
      // once you have the items, prompt the user for which they'd like to bid on
    //   inquirer
    //     .prompt([
    //       {
    //         name: "choice",
    //         type: "rawlist",
    //         choices: function() {
    //           var choiceArray = [];
    //           for (var i = 0; i < res.length; i++) {
    //             choiceArray.push(res[i].prodName);
    //           }
    //           return choiceArray;
    //         },
    //         message: "Which product would you like to select?"
    //       },
    //       {
    //         name: "quantity",
    //         type: "input",
    //         message: "How many would you like to buy?"
    //       }
    //     ])
    //     .then