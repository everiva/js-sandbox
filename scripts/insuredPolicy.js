var policy = {
    policyHolder: {
        name: 'Vera',
        age: Math.ceil(Math.random() * 100)
    },
    coverage: {
        basicTariff: Math.random() / 1000,
        insuredSum: Math.random() * 100000
    },

    calculatePremium: function () {
        var p = policy.coverage;
        return Math.ceil(p.basicTariff * p.insuredSum);
    },
    printPolicy: function () {
        var ph = policy.policyHolder;
        var output = 'Policyholder (' + ph.name + ', ' + ph.age + ' years old) has a premium equals to ' + policy.calculatePremium() + ' USD.';
        console.log(output);
    }
}

policy.printPolicy();
