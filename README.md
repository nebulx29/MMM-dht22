# MMM-dht22
Magic Mirror Module that displays temperature/humidity readings from DHT22 sensor connected via GPIO pin

### Prerequisites

- tested only on MagicMirror v2.0.0
- a DHT22 temperature/humidity sensor connected to a GPIO of your Raspberry Pi
- working installation of DHT22 utility - see https://github.com/nebulx29/dht22


### Download and Installation 

To use this module, clone this repository to your __modules__ folder of your MagicMirror: `git clone https://github.com/nebulx29/MMM-dht22`


### Configuration

The module needs the default configuration block in your config.js to work.

```
{
	module: 'MMM-dht22',
	position: 'bottom_left',                    // the location where the module should be displayed
	config: {
		header: 'DHT22 Sensor'                  // name to be displayed in the module
		tempUnit: 'celsius',                    // alternatively use  'fahrenheit'
		dht22gpio: 22,                          // gpio pin that the sensor is connected to
		dht22util: 'sudo /home/pi/bin/dht22'    // path to the dht22 utility
		updateInterval: 10000,                  // interval in ms to read the sesor
		animationSpeed: 0,                      // animation speed
	}
}
```

The following properties can be configured:

|Option|Description|Values|Default|
|---|---|---|---|
|header|The name that should be displayed at the top of the module<br>**Example:** `header: 'DHT22 sensor'`|String|'DHT22 Sensor'|
|tempUnit|This can be either 'celsius' or 'fahrenheit'.<br>|'celsius' or 'fahrenheit'|'celsius'|
|dht22gpio|The GPIO pin (wiringPi numbering) that the DHT22 sensor is connected to.<br>**Example:** `dht22gpio: 22`|int|22|
|dht22util|Valid path to where the DHT22 is installed<br>**Example:** `dht22util: 'sudo /home/pi/bin/dht22'`|String|`'sudo /home/pi/bin/dht22'`|
|updateInterval|The update interval. Determines the refresh rate at which sensor is read.<br>**Example:** `updateInterval: 10000`|int|10000|
|animationSpeed|Speed of animation when updates occur.<br>**Example:** `animationSpeed: 0`|int|0|
