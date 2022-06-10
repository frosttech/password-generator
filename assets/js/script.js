var passLengthMin = 8;
var passLengthMax = 128;


var characterTypes = {
    "lowercase": false,
    "uppercase": false,
    "numeric": false,
    "special": false
}

var userInput = {
    "length": 0,
    "config": {
        "lowercase": false,
        "uppercase": false,
        "numeric": false,
        "special": false
    }
}

var checkPassLength = function(passLength) {
    var lengthError = false;
    if (passLength) {
        if (passLength >= passLengthMin && passLength <= passLengthMax) {
            lengthError = false;
            $("#length-slider").val(passLength);
            $("#slider-value").val(passLength);
            //$("#length-error").val('')
        }
        else {
            lengthError = true;
            console.log("Please enter a valid password length and try again");
            //console.log("Please enter a number between 8 and 128!");
            //$("#length-error").val(`Please enter a number between ${passLengthMin} and ${passLengthMax}!`);
        }
    }
    else {
        lengthError = true;
        console.log("Please enter a valid password length and try again");
        //$("#length-error").val(`Please enter a number between ${passLengthMin} and ${passLengthMax}!`);
    }

    if (lengthError) {
        $("#length-error").show();
        switch (true) {
            case (!($("#slider-value").hasClass("lenError"))):
                $("#slider-value").addClass("lenError");
            case (!($("#modal-btn").hasClass("noclick"))):
                $("#modal-btn").addClass("noclick");
        }
    }
    else {
        $("#length-error").hide();
        switch (true) {
            case (($("#slider-value").hasClass("lenError"))):
                $("#slider-value").removeClass("lenError");
            case (($("#modal-btn").hasClass("noclick"))):
                $("#modal-btn").removeClass("noclick");
        }
    }
}

var removeAllChildren = function(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
};

var eventHandler = function(event) {
    var targetEl = event.target;
    switch (true) {
        case targetEl.id === "generate":
            console.log("Generate button element clicked.")
            $("#modal").show();
            $("#modal-content").show();
            $("#modal-container").show();
            //$("#chartype-content").hide();
            //$("#length-content").show();
            break;
        case targetEl.id === "modal-btn":
            if ($(targetEl).attr("stage") === "next") {
                console.log("NEXT")
                userInput.length = Number($("#slider-value").val());
                $("#modal-title").val("Please enable/disable each character type that you'd like to include during generation.")
                $("#modal-btn").attr("stage", "submit")
                $("#slider-value").hide();
                $("#slidecontainer").hide();
                $(".check-container").show();
                console.log("Modal next button element clicked.")
            }
            else if (targetEl.stage === "submit") {
                console.log("Modal submit button element clicked.")
            }
            
            $("#length-content").hide();
            $("#chartype-content").show();
            break;
        case targetEl.id === "finish-btn":
            console.log("Modal finish button element clicked.")
            $("#modal").hide();
            break;
        case targetEl.classList.contains("close"):
            console.log("Modal close element clicked.")
            $("#modal").hide();
            break;
        case targetEl == $("#modal")[0]:
            console.log("Outside of modal element clicked.")
            $("#modal").hide();
            break;
        default:
            console.log("Non specified element clicked.")
            break;
    }
}

var setEventListeners = function() {
    $("#length-slider").on("input", function() {
        var passLength = Number(this.value);
        checkPassLength(passLength);
    });
    $("#slider-value").on("input", function() {
        var passLength = Number(this.value);
        checkPassLength(passLength);    
    });
    $("#page-content").click(function() {
        eventHandler(event);
    })
}

var initializeElements = function() {
    removeAllChildren($("#modal")[0]);
    $("<div class='modal-content' id='modal-content'><div class='container' id='modal-container'></div></div>").appendTo("#modal");
    $("<div class='row justify-content-end'><span class='close col-1' id='close'>&times;</span></div>").appendTo("#modal-container");
    $("<div class='row' id='titleDiv'><div class='col text-center' id='modal-title'>Please enter your desired password length.</div></div>").appendTo("#modal-container");
    $(`<div class='row justify-content-center'><textarea wrap='off' maxlength='3' rows='1' cols='3' id='slider-value' class='col-2 text-center slider-value'>${passLengthMin}</textarea></div>`).appendTo("#modal-container"); 
    $(`<div class='row'><div class='col text-center' id='length-error'>Please enter a number between ${passLengthMin} and ${passLengthMax}!</div></div>`).appendTo("#modal-container");
    $(`<div class='slidecontainer row justify-content-center' id='slidecontainer'><div class='col-1 slider-range'>Min: ${passLengthMin}</div><input type='range' min='${passLengthMin}' max='${passLengthMax}' value='${passLengthMin}' class='slider col-4' id='length-slider'><div class='col-1 slider-range'>Max: ${passLengthMax}</div></div>`).appendTo("#modal-container");
    $(`<div class='check-container row justify-content-center' id='check-container1'><div class="form-check col-5"><input class="form-check-input" type="checkbox" value="" id="lowercase"><label class="form-check-label" for="lowercase">Lowercase (i.e. a, b, c, ...)</label></div><div class="form-check col-5"><input class="form-check-input" type="checkbox" value="" id="uppercase"><label class="form-check-label" for="uppercase">Uppercase (i.e. A, B, C, ...)</label></div></div>`).appendTo("#modal-container");
    $(`<div class='check-container row justify-content-center' id='check-container1'><div class="form-check col-5"><input class="form-check-input" type="checkbox" value="" id="numeric"><label class="form-check-label" for="numeric">Numeric (i.e. 1, 2, 3, ...)</label></div><div class="form-check col-5"><input class="form-check-input" type="checkbox" value="" id="special"><label class="form-check-label" for="special">Special (i.e. !, @, $, ...)</label></div></div>`).appendTo("#modal-container");
    $("<div class='row justify-content-center'><div class='btn modal-btn col-3' id='modal-btn' stage='next'>NEXT</div></div>").appendTo("#modal-container");
    console.log("Defaults have been restored.")
    setEventListeners();

}




// Assignment code here
var generatePassword = function() {

};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}





var modalHandler = function(btn) {
    // Show main modal div element
    $("#modal").show();
}








// Add event listener to generate button
initializeElements();








