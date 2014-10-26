/**
 * fadeDelay.js - jQuery Plugin
 * Fades a row of elements smoothly
 *
 * @dependencies	jQuery v1.5.0 http://jquery.com
 * @author			Cornel Boppart <cornel@bopp-art.com>
 * @copyright		Author
 * @version			1.0.0 (26/10/2014)
 */

;(function ($) {

	var fadeDelay = {

		/**
		 * Default settings
		 *
		 */
		settings: {
			duration: 500,
			delay: 50,
			opacity: {
				start: 0.01,
				end: 1
			}
		},

		/**
		 * Initializes the plugin
		 *
		 * @param	{object}	options	The custom plugin options (Not yet merged with default settings)
		 * @return	{object}	this	The current element itself
		 */
		init: function (options) {
			var index = 0,
				settings = $.extend(fadeDelay.settings, options);

			return this.each(function () {
				var $this = $(this);

				fadeDelay.fade($this, settings, index);
				++index;
			});
		},

		/**
		 * Fades a single element to the end opacity
		 *
		 * @param	{object}	$object		The element that should get faded
		 * @param	{object}	settings	All custom plugin settings
		 * @param	{number}	index		Index of the current element
		 * @return	{void}
		 */
		fade: function ($object, settings, index) {
			$object.fadeTo(0, settings.opacity.start);
			$object.delay(settings.delay * index).fadeTo(settings.duration, settings.opacity.end);
		}

	};

	$.fn.fadeDelay = function (method) {
		if (fadeDelay[method]) {
			return fadeDelay[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || !method) {
			return fadeDelay.init.apply(this, arguments);
		}
		else {
			return $.error('Method ' + method + ' does not exist on jQuery.fadeDelay');
		}
	};

})(jQuery);