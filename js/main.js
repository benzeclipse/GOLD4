// MIU
// Term 1306
// Banchop Ben Kangdouangnhot
// Project 4

$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	

$('#home').on('pageinit', function(){

	var rbform = $('#recordform');	// calling form
    var FEerror = $('#formerrorlink'); // calling error dialog 
	
	rbform.validate({
		invalidHandler: function(form, validator){
			FEerror.click(); // taget error anchor tag
			//console.log(validator.submitted);
			
			var html = "";
			
			
			for(var key in validator.submitted){  //Looping through keys
				var label = $('label[for^="'+ key +'"]'); // finding label thats start with 'for'
				//console.log(label.text());
				var legend = label.closest('fieldset').find('.ui-controlgroup-label').not(); // getting radios
				var fieldName = legend.length ? legend.text() :label.text();
				//console.log(fieldName);
				
				
				html += '<li>' + fieldName + '</li>'; //Strings added to dialog by targeting
			};
			$('#formErrors ul').html(html);
		
		},
		
		    submitHandler: function(){
			var data = rbform.serializeArray();
			
			getData();
			console.log(data);
			
		}
		
	});
		


});
  
  

      
	// getElementById function
	function main ( x) {
		var elements = document.getElementById( x );
		return elements ;
}

	// Create drop down elements from js
	function dropDownList ( ) {
		var formTag = document.getElementsByTagName("form");  //form tags are an array
		var selector = main('moretickets');
		makeSelection = document.createElement('select');
		makeSelection.setAttribute("id", "mStuff");   // used for idGetter function
			for ( var i = 0, j= addStuff.length; i<j; i++) {
	 		var makeOpt = document.createElement('option');
	 		var opt = addStuff[i];
	 		makeOpt.setAttribute("value", opt);
	 		makeOpt.innerHTML = opt;
	 		makeSelection.appendChild(makeOpt);
		 }
	  	   selector.appendChild(makeSelection);
}


	// Find values of selected radio buttons
	function getRadios() {
		var setRadios = document.forms.addform.seasons;
		for ( var i=0; i<setRadios.length; i++) {
			if(setRadios[i].checked) {
				seasonValue = setRadios[i].value;
			}
	 }
} 
 

	function getToggle(){
	
		var setTogg =  document.forms.addform.switches;  //main('toGG');
		
		for(i = 0; i<setTogg; i++){
			if(setTogg[i].value === "off"){
				setToggle = setTogg[i].value
			}else if(setTogg[i].value === "on"){
				setToggle = setTogg[i].value
			}
		
		}
		
	}	
	

	// get random number
	function getData( key ) {  // passing in "edit" item from tutorial 3.6
	// if there is no key, this means this is a brand new item and need a new key.
		
		if(!key){
			var getId =  Math.floor(Math.random()*100000001);
		}else{
			getId = key;
		
		}
		
		getRadios();
		getToggle();
		

		var item		= {};
		item.List	= ["Drop down list: ", $('#mStuff').val()]; 
		item.Name	= ["Name: ", $('#fullname').val()];
		item.email	= ["Email: ", $('#email').val()]; 
		item.number	= ["Number: ", $('#ssn').val()]; 
		item.toggles = ["Toggle", $('#toGG').val()];
		item.zip	= ["Zip Code: ", $('#zip').val()];
		item.range = ["Range: ",$('#ranges').val()];
		item.date = ["Date: ", $('#aDate').val()];
		item.season = ["Season: ", seasonValue];
		item.concerns = ["Concerns", $('#concerns').val()];
		
		// save data to local storage! use Stringify to convert our object to a string
		localStorage.setItem( getId, JSON.stringify(item) );
		alert("Data has been saved!");
		//console.log('#fullname');
}




var clearData = function(){
    if (localStorage.length === 0) {
        alert("Local Storage is Empty...");
    } else {
        localStorage.clear();
        alert("All Data has been Deleted!");
        window.location.reload();
        return false;
    }
};



		var setToggle;
		
		var seasonValue; 

		var addStuff = ["Sports", "NFC", "NBA", "MLB" ];

		dropDownList();

		var clearStorage = main("clearLocal");
		clearStorage.addEventListener("click", clearData);
