'use strict';

/* Magic Mirror
 * Module: MMM-dht22
 *
 * By Juergen Wolf-Hofer
 * MIT Licensed.
 */

const NodeHelper = require('node_helper');
var async = require('async');
var sys = require('sys');
var exec = require('child_process').exec;

module.exports = NodeHelper.create({
  start: function() {
    console.log('Starting node helper: ' + this.name);
  },

  // Subclass socketNotificationReceived received.
  socketNotificationReceived: function(notification, payload) {
    var self = this;

    if (notification === 'CONFIG') {
      this.config = payload;
      setInterval(function() {
        self.getStats();
      }, this.config.updateInterval);
    }
  },

  getStats: function() {
    var self = this;
	var path = this.config.dht22Util + " ";

    async.parallel([
      //async.apply(exec, 'sudo /home/pi/bin/dht22 c 22'),
      //async.apply(exec, 'sudo /home/pi/bin/dht22 f 22'),
      //async.apply(exec, 'sudo /home/pi/bin/dht22 h 22'),
      async.apply(exec, this.config.dht22util + ' c ' + this.config.dht22gpio),
      async.apply(exec, this.config.dht22util + ' f ' + this.config.dht22gpio),
      async.apply(exec, this.config.dht22util + ' h ' + this.config.dht22gpio)
    ],
    function (err, res) {
      var stats = {};
	  stats.celsius = res[0][0];
	  stats.fahrenheit = res[1][0];
	  stats.humidity = res[2][0];
      //console.log(stats);
      self.sendSocketNotification('STATS', stats);
    });
  },

});
