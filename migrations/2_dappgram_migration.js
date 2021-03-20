const DappgramContract = artifacts.require('Dappgram');

module.exports = function(deployer) {
  deployer.deploy(DappgramContract);
}
