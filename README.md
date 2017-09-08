# homebridge-temperature-cmd
First prototype, get temperature executing a shell script

Example config.json

   "accessories":[  
      {
         "accessory":"TemperatureCmd",
         "name":"Your Name",
         "cmd":"/path/script.sh"
      },
      
It should output just a number in this format: 25.6
