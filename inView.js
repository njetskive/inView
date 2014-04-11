/**
 * inView checks if the element is currently in view.
 *
 * @param int paddingTop Include a padding-top to the evaluation.
 * @param int paddingBottom Include a padding-bottom to the evaluation.
 * 
 * @return bool Returns true if element is in view.
 */
(function( $, window ) {
	
	$.fn.inView = function( paddingTop = 0, paddingBottom = 0 ) {
		
		// reverse padding value to act as expected
		paddingTop = ( paddingTop > 0 ) ? -paddingTop : Math.abs( paddingTop );
		
		// check to see if the element is in view
		if (
			(this.offset().top + paddingTop) <= (window.height() + window.scrollTop())
		&&
			(this.offset().top + this.height() + paddingBottom) >= window.scrollTop()
		)
			return true;
		else
			return false;
		
	};

})( jQuery, $(window) );
