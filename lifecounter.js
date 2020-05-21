/*	Magic Mirror 2
*	Module: Lifecounter
*	by Razvan Cristea 
*	https://github.com/hangorazvan
*/

Module.register("lifecounter", {
	defaults: {
		birthday: "1970-12-31 12:00:00",
		counter: "years", // seconds, minutes, hours, months, weeks, days, years
		comment: " secunde", // your comment
	},
	
	getScripts: function() {return ["moment.js", "jquery.js"];},

	start: function() {
		Log.info("Starting module: " + this.name); 
		var self = this;
		setInterval(function() {
			self.updateDom(0);
		},0);
	},

	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.className = "normal ssmall";
		wrapper.innerHTML = moment().diff(this.config.birthday, this.config.counter) + this.config.comment;
		return wrapper;
	}
});