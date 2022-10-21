
let transactions = [200, 250, -100, 300, -500, 600]

let box = document.getElementById("box")

let activities = function (transactions){
    transactions.forEach(function(el) {
        let type = el > 0 ? "Deposit" : "Withdrawl"
        let html = `

        <div class="row">
        <div>
        ${type}
        </div>
        <div>
        ${el}
        </div>
        </div>
        `;
        box.insertAdjacentHTML("afterbegin", html)
    })
}
activities(transactions)