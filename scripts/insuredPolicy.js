var policy = {
    policyHolder: {
        name: 'Alex',
        age: Math.ceil(Math.random() * 100),
    },
    policyProgramm: {
        basicTariff: Math.random() / 1000,
        sumInsured: Math.floor(Math.random() * 1000000)
    },
    calculatePremium: function () {
        var p = policy.policyProgramm;
        var premium = Math.floor(p.basicTariff * p.sumInsured);
        return premium;
    },
    printPolicy: function () {
        var ph = policy.policyHolder;
        var output = 'Policyholder ' + ph.name + ' is ' + ph.age + ' years old ' + ' should pay ' + policy.calculatePremium() + ' USD';
        var output2 = `Policyholder ${ph.name} is ${ph.age} years old should pay ${policy.calculatePremium()} USD`;
        console.log(output);
        console.log(output2);

    }
}

policy.printPolicy();
//console.log(policy.printPolicy());

function a() {
    {
        var i = 5;
    }
    console.log(i);

}

a();
