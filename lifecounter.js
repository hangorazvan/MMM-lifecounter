/*	Magic Mirror 2
*	Module: Lifecounter
*	by Razvan Cristea 
*	https://github.com/hangorazvan
*/

Module.register("lifecounter", {
	defaults: {
		birthday: "1988-12-31 12:00:00",
		counter: "seconds", // seconds, minutes, hours, months, weeks, days, years
		before: "Has been", // your comment
		after: "seconds of your life", // your comment
		cssclass: "small",
	},
	
	getScripts: function() {return ["moment.js"];},

	start: function() {
		Log.info("Starting module: " + this.name); 
		var self = this;
		setInterval(function() {
			self.updateDom(0);
		},0);
	},

	getDom: function() {
		var wrapper = document.createElement("div");
		var yourtime = moment().diff(this.config.birthday, this.config.counter);
		var lifecounter = this.config.before + " " + yourtime + " " + this.config.after;

		if (yourtime > 999395200 && yourtime < 1000086400){ // one week before and one day after
		    wrapper.className = "bright " + this.config.cssclass;
		} else {
		    wrapper.className = "normal " + this.config.cssclass;
		}

		if (this.config.decimalSymbol == "."){
		    wrapper.innerHTML = lifecounter.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		} else {
		    wrapper.innerHTML = lifecounter.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		}
		
		return wrapper;
	}
});
