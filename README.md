# MMM-dht22
Magic Mirror Module that displays temperature/humidity readings from local DHT22 sensor

## Prerequisites

- requires MagicMirror v2.0.0
- a DHT22 temperature/humidity sensor connected to VCC/GND and a GPIO of your Raspberry Pi
- working installation of DHT22 utility - see https://github.com/nebulx29/dht22


## Download and Installation 

To use this module, just clone this repository to your __modules__ folder of your MagicMirror: `git clone https://github.com/nebulx29/MMM-dht22`


### Configuration

The module needs the default configuration block in your config.js to work.

```
{
	module: 'MMM-dht22',
	position: 'bottom_left',    // the location where the module should be displayed
	config: {
		header: '' // name to be displayed in the module
		tempUnit: 'celsius',    // alternatively use  'fahrenheit'
		dht22gpio: 22,          // gpio pin that the sensor is connected to
		dht22util: 'sudo /home/pi/bin/dht22' // path to the dht22 utility
		updateInterval: 10000,  // interval in ms to read the sesor
		animationSpeed: 0,      // animation speed
	}
}
```

The following properties can be configured:

|Option|Description|
|---|---|
|header|The name that should be displayed at the top of the module<br><br>This value is required.<br><br>**Example: `header: 'DHT22 sensor'`|
|tempUnit|This can be either<br><br>This value is **REQUIRED**|
|dht22gpio|The generated refresh token you got from the POST request to the auth api.<br><br>This value is **REQUIRED**|
|dht22util|How often does the content needs to be updated? (Minutes)<br>Data is updated by netatmo every 10 minutes.<br><br>**Default value:** `3`|
|updateInterval|The rendering order of your weather modules, ommit a module to hide the output.<br><br>**Example:** `["Kitchen","Kid's Bedroom","Garage","Garden"]` <br>Be aware that you need to use the module names that you set in the netatmo configuration.|
|animationSpeed|The rendering order of the data types of a module, ommit a data type to hide the output.<br><br>**Example:** `["Noise","Pressure","CO2","Humidity","Temperature","Rain"]`|
