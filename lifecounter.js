/*	Magic Mirror 2
 *	Module: Lifecounter
 *	by Razvan Cristea 
 *	https://github.com/hangorazvan
 */

Module.register("lifecounter", {
	defaults: {
		birthday: "1970-01-01 00:00:00",	// year, month, day, 24 hour birthday time
		counter: "seconds",					// seconds, minutes, hours, months, weeks, days, years
		before: "UNIX Epoch Time",			// your comment before
		after: "seconds",					// your comment after
		cssclass: "small",
		decimalSymbol: ".",
	},
	
	getScripts: function () {
		return ["moment.js"];
	},
	
	start: function () {
		Log.info("Starting module: " + this.name);
		var self = this;
		setInterval(function() {
			self.updateDom();
		}, 1000);
	},

	getDom: function () {
		var wrapper = document.createElement("div");
		var yourtime = moment.utc().diff(this.config.birthday, this.config.counter);
		var lifecounter = this.config.before + " " + yourtime + " " + this.config.after;

		if (yourtime > 999395200 && yourtime < 1000086400) { // one week before and one day after
			wrapper.className = "bright " + this.config.cssclass;
		} else {
			wrapper.className = "normal " + this.config.cssclass;
		}

		if (this.config.decimalSymbol == "."){
			wrapper.innerHTML = lifecounter.replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace("-", "");
		} else {
			wrapper.innerHTML = lifecounter.replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace("-", "");
		}
		
		return wrapper;
	}
});