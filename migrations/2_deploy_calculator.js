var Calculator = artifacts.require("./Calculator.sol");
//var CalculatorV2 = artifacts.require("./CalculatorV2.sol");

module.exports = function(deployer) {
  // #2 Deploy the instance of the contract
  var init_val=10;
  deployer.deploy(Calculator,init_val);//, 10);
 // deployer.deploy(CalculatorV2, 10);
};