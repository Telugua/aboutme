function NumberOrNot(valNum) {
    const num=parseFloat(valNum);
if(valNum<0)
    return 0;
   // alert("value cannot be negative");
else
    return num*num*num;
  //document.getElementById("output").innerHTML=num*num*num;
}

QUnit.test("NumberOrNot", function(assert) {
    assert.equal(NumberOrNot(3), 27, "Given input is number");
    assert.equal(NumberOrNot(5), 125, "Given input is number");
    assert.equal(NumberOrNot(2), 8, "Given input is number");
    assert.equal(NumberOrNot(4), 64, "Given input is number");
    assert.equal(NumberOrNot(6), 216, "Given input is number");
    
 });