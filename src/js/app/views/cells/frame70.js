/*global define $ requestAnimationFrame*/

define(function (require) {
	
	var Backbone = require('backbone'),
        Vars = require('app/models/vars'),
        UserEvent = require('app/events/user-event'),
        AppEvent = require('app/events/app-event'),
        CellView = require('app/views/cells/cell-view'),
        Frame;

    Frame = CellView.extend({
        initialize: function () {
            CellView.prototype.initialize.call(this);
        },

		animate: function () {
            this.delta += 0.1;
            this.layers[0].y = this.layers[0].y < this.layers[0].origin.y + 250 ? this.layers[0].y + 5 : this.layers[0].origin.y + 250;
            this.layers[1].y = this.layers[1].y > this.layers[1].origin.y - 30 ? this.layers[1].y - 0.5 : this.layers[1].origin.y - 30;
            this.layers[2].y = this.layers[2].y < this.layers[2].origin.y + 30 ? this.layers[2].y + 0.5 : this.layers[2].origin.y + 30;
            this.layers[3].y = this.layers[3].y < this.layers[3].origin.y + 30 ? this.layers[3].y + 0.5 : this.layers[3].origin.y + 30;
		},
		
		freeze: function () {
			var i;
			
            this.delta = 0;
            for (i = 0; i < this.layers.length; i += 1) {
                this.layers[i].x = this.layers[i].origin.x;
                this.layers[i].y = this.layers[i].origin.y;
                this.layers[i].rotation = 0;
            }
		}
    });

	return Frame;
});

