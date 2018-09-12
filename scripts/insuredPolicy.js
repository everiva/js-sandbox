var policy = {
    policyHolder: {
        name: 'Alex',
        age: 10,
    },
    policyProgramm: {
        basicTariff: Math.random() / 1000,
        sumInsured: Math.round(Math.random() * 1000)
    },
    calculatePremium: function () {
        var p = policy.policyProgramm;
        var premium = p.basicTariff * p.sumInsured;
        return premium;
    },
    printPolicy: function () {
        var ph = policy.policyHolder;
        var output = ph.name + ' is ' + ph.age + ' should paid ' + policy.calculatePremium();
        //console.log(output);
        function p() {
            console.log(this.output)
        }
        p();
    }
}

policy.printPolicy();

//console.log(policy.printPolicy());