var exec = require("child_process").exec;
var Service, Characteristic;

module.exports = function(homebridge) {
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;

  homebridge.registerAccessory("homebridge-temperature-cmd", "TemperatureCmd", TemperatureCmdAccessory);
}

function TemperatureCmdAccessory(log, config) {
  this.log = log;
  this.name = config["name"];
  this.cmd = config["cmd"];

  this.service = new Service.TemperatureSensor(this.name);

  this.service
    .getCharacteristic(Characteristic.CurrentTemperature)
    .on('get', this.getState.bind(this));
}

TemperatureCmdAccessory.prototype.getState = function(callback) {
  exec(this.cmd, function (err, data) {
    if (err) {
      callback(err);
      return
    }
    callback(null, parseFloat(data))
  })
}

TemperatureCmdAccessory.prototype.getServices = function() {
  return [this.service];
}
