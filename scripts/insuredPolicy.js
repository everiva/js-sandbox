var policy = {
    insured: 1,
    run: function(num, a) { console.log(a * (num + policy.insured)) }
}

policy.run(3, 5);

