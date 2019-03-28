# node-libnmap-web-ui #
A deployable web based tool to interact with [node-libnmap](https://github.com/jas-/node-libnmap)

# demo
A demo of the deployable app can be found at [node-libnmap-web-ui.herokuapp.com](http://node-libnmap-web-ui.herokuapp.com)

# requirements
You will need node.js, npm & bower

# installation
Simple setup

1. Clone the repo `git clone https://github.com/jas-/node-libnmap-web-ui`
2. Change into the repo `cd node-libnmap-web-ui`
3. Setup dependancies with npm `npm install`
4. Setup additional browser dependancies `bower install`
5. Run the application `npm start`
6. Browse to URL `http://localhost:3000` (unless you setup `process.env.PORT`)

# populate list of scans (besides the current default set)
To create a new scan set you must add your CIDR, IPv4, IPv6 or range of hosts to the `app/nmap.js` and run it:

`node app/nmap.js`

Then regenerate the `scans/index.json` file like so:

`node app/index.js`
