/* js file */

(function( window, undefined ){

})( window, undefined );

/*ternary, operating on three values*/
$(document).ready(function() {
        $('.menu-link').bigSlide();
    });

/*****************************/

var Dropdown = function (button, nav){
	var that = this;

	this.button 	= document.getElementById ( button );
	this.nav 		= document.getElementById ( nav );

	this.isHidden 	= false;

	this.button.addEventListener( "click", function( e ){

		if( that.isHidden){
			that.show();
		}
		else{
			that.hide();
		}

		e.preventDefault();
	} // end of function passing in e

	); // end of event listner
}; // end of dropdown


Dropdown.prototype.show = function(){
	
	//remove a class of hidden from the nav
	var c = this.nav.className;

	c = c.replace( " hidden", "");

	this.nav.className = c;

	this.isHidden = false;

	return this.nav.className;
};

Dropdown.prototype.hide = function(){
	
	//add a class of hidden to the nav
	var c = this.nav.className;
	this.nav.className = c + " hidden";

	this.isHidden = true;

	return this.nav.className;
};

var dd = new Dropdown ( "dropdown_button", "dropdown_menu");

dd.hide();