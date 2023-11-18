document.write(
    unescape("%3Cscript src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js' type='text/javascript'%3E%3C/script%3E")
  );

function BLOCK_MOBILE() {
    $("#instrText").html('It seems that you are using a touchscreen device or a phone. Please use a laptop or desktop instead.<br /><br />If you believe you have received this message in error, please contact the experimenter at experimenter@domain.edu<br /><br />Otherwise, please switch to a laptop or a desktop computer for this experiment.');
    $("#instrNextBut").hide();
    $("#instrBackBut").hide();
    $("#instrPage").show();
}

function ALLOW_SHORTCUTS_FOR_TESTING() {
    document.onkeydown = function(event) {
       if(event.key == "s" || event.which == 83 || event.keyCode == 83) {
           console.log("s");
           instr.index = 11;
           instr.next();
       }
        else if (event.key == "p" || event.which == 80 || event.keyCode == 80) {
            console.log("p");
            instr.index = 16;
            instr.next();
        }
       else if (event.keyCode == "e" || event.which == 69 || event.keyCode == 69) {
           console.log("e");
           instr.index = 13;
           instr.next();
       } else if (event.keyCode == "d" || event.which == 68 || event.keyCode == 68) {
           console.log("d");
           instr.index = 15;
           instr.next();
       }
    };

}

function DISABLE_DEFAULT_KEYS() {
    document.onkeydown = function(e) {
        if(e.keyCode == 13) {
            e.preventDefault();
            //e.stopPropagation();
        }
    }
}

function ALLOW_SPACE() {
    document.onkeydown = function(e) {
        if(e.keyCode == 32) {
            return true;
        }
    }
}

function POST_DATA(page, trial_obj, success_func, error_func) {
    trial_obj = (trial_obj === undefined) ? null : trial_obj;
    success_func = (success_func === undefined) ? function() {return;} : success_func;
    error_func = (error_func === undefined) ? function() {return;} : error_func;
    $.ajax({
        type: "POST",
        url: page,
        data: trial_obj,
        success: success_func,
        error: error_func
    });
}

/*
 ### #     #  #####  ####### ######
  #  ##    # #     #    #    #     #
  #  # #   # #          #    #     #
  #  #  #  #  #####     #    ######
  #  #   # #       #    #    #   #
  #  #    ## #     #    #    #    #
 ### #     #  #####     #    #     #
*/

const REWARD = 0.4;
const STEP_COST = 0.05;
const COMPLETION_URL = "https://uclacomm.sona-systems.com/webstudy_credit.aspx?experiment_id=101&credit_token=ba49ffc4d07440b3bed00c58a257dd66&survey_code=";

var instr_text = new Array;
instr_text[0] = "<strong>Welcome!</strong><br><br>In this experiment, you will play a game that involves cooperating with a partner to maximize your points.<br><br>Hope you enjoy it!";
instr_text[1] = "Please read the instructions on the next few pages carefully. <strong>You will be asked about the instructions later</strong> and go through some practice rounds to make sure you understand the game.";
instr_text[2] = "During the experiment, you will be working with a partner to collect as many points as possible.<br><br>You are assigned the role of <i>the Helper</i> and will be <b>outside</b> of the map.<br>Your partner will be <i>the Player</i> " + "<img class='inlineShape' src='img/person.png' />" + "and will walk <b>inside</b>.";
instr_text[3] = "<b>You and your partner will be looking at two different screens.</b><br>On your screen, you will see 3 boxes " + "<img class='inlineShape' src='img/drkbrown_box.png' />" + " with either bananas " + "<img class='bananaShape' src='img/ai_banana.png' />" +  "or scorpions " + "<img class='scorpShape' src='img/ai_scorpion.png' />" +  "  located inside them.<br>Meanwhile, the Player " + "<img class='inlineShape' src='img/person.png' />" +  " will be able to see the boxes, but not what is inside.<br><br><div class='outlineBlock'>YOUR perspective: " + "<img class='outlineShape' src='img/controlYou.png' />" + "<div style='padding-left: 30px; display: inline-block'>Your PARTNER's perspective: " + " <img class='outlineShape' src='img/controlThem.png' /></div></div>"; 
instr_text[4] = "There are points involved in these mazes, but <b>only the Player " + "<img class='inlineShape' src='img/person.png' />" +  " can collect these points</b> for you.<br><br>If the Player opens a box " + "<img class='inlineShape' src='img/drkbrown_box.png' />" + " with a banana " + "<img class='bananaShape' src='img/ai_banana.png' />" +  "inside, you will both <b>gain 10</b> points. <br>If they open a box " + "<img class='inlineShape' src='img/drkbrown_box.png' />" +  " with a scorpion " + "<img class='scorpShape' src='img/ai_scorpion.png' />" +  " inside, you will both <b>lose 30</b> points.<br><br>Remember, <b>the Player " + "<img class='inlineShape' src='img/person.png' />" +  " does NOT know what is inside each box. Only you do.</b> Use your knowledge of the map to help the Player maximize both of your points." ;
instr_text[5] = "";

instr_text[6] = "How can you help? <b>You will be able to place tokens " + "<img class='inlineShape' src='img/aitoken2.png' />" +  " on the boxes " + "<img class='inlineShape' src='img/drkbrown_box.png' />" +  " on your partner’s screen.</b> <br><br>Each round you will be given either 1 or 2 tokens. You may use none, one, or all of your tokens. <b>The Player will also know how many tokens you are given.</b> <br>To place a token on a box, simply click on the desired box in the map. <br><br>In the example below, you possess 2 tokens, and have placed 1 on a box.<br>" + "<img class='outlineShapeHand' src='img/token_ex2.png' />" + "<img class='outlineShapeLonely' src='img/controlToken.png' />";
instr_text[7] = "If you wish to <b>erase</b> your selection after placing a token, there will be a “Clear Selections” button " + "<img class='inlineShape' src='img/clear_btn.png' />" + " available for you.<br><br> Once you are <b>done</b> making your selections, please click the “Confirm Selection” button. " + "<img class='inlineShape' src='img/conf_btn.png' />" + "<br><br><b>If you wish to use NONE of your tokens in a round</b>, you may click “Confirm Selection” twice."
instr_text[8] = "While you will have either 1 or 2 tokens " + "<img class='inlineShape' src='img/aitoken2.png' />" + ", <b>the Player will have either 1 or 2 axes</b> " + "<img class='inlineShape' src='img/axe2.png' />" + " to be able to open the boxes and collect the points inside. <br><br>There will be a grid showing you how many axes they possess in the round. For example, in this image they possess 1 ax.<br>" + "<img class='hamShape' src='img/axe_ex.png' />" + "<br><br>The axes represent <b>the number of boxes " + "<img class='inlineShape' src='img/drkbrown_box.png' />" + " the Player " + "<img class='inlineShape' src='img/person.png' />" + " will be able to open</b> in that round. <b>They can open one box per ax.</b><br><br>Remember: Just as you can choose to place tokens on 0, 1, or 2 boxes, they may choose to not use all or ANY of their axes.";
instr_text[9] = "Sometimes, the Player " + "<img class='inlineShape' src='img/person.png' />" +  " will <b>know how many</b> bananas " + "<img class='bananaShape' src='img/ai_banana.png' />" +  "and scorpions " + "<img class='scorpShape' src='img/ai_scorpion.png' />" +  " are present in the round, but <b>not know where</b> they are located. <br>Other times, they will <b>NOT know the amounts</b> that are present. <br><br>If they <b>DO know</b>, their “Knowledge” grid will show the amounts. In the first example below, they know there are 2 bananas and 1 scorpion in the boxes. <br>If they <b>do NOT know</b>, this grid will be filled with question marks, as shown in the second example." + "<br><div class = 'outlineShapeBuddies'><img class='outlineShapeKnowledge' src='img/aiknow_yes.png' />      " + "     <img class='outlineShapeKnowledge' src='img/know_question.png' />";
instr_text[10] = "Help the Player so that you both gain as many points as possible. Have fun!";

instr_text[11] = "";
instr_text[12] = "By clicking on the NEXT button, I have acknowledged and hereby accept the terms. I understand the task in this experiment.";
instr_text[13] = "Please start the practice rounds on the next page.";
instr_text[14] = "";
instr_text[15] = "You have finished all the practice rounds. You are now ready for the experiment. <br><br>Good luck!";
instr_text[16] = "";
instr_text[17] = "You have finished all the rounds in the experiment. Please answer all the questions on the next page.";
instr_text[18] = "";
instr_text[19] = ""; 


const INSTR_FUNC_DICT = {
    0: HIDE_BACK_BUTTON,
    1: SHOW_BACK_BUTTON,
    2: SHOW_INSTR,
    3: SHOW_INSTR,
    4: SHOW_INSTR, 
    5: SHOW_INSTR_QUESTION, 

    6: SHOW_INSTR, 
	7: SHOW_INSTR,
    8: SHOW_INSTR, 
    9: SHOW_INSTR, 
    10: SHOW_INSTR,

    11: SHOW_INSTR_QUESTION,
    12: SHOW_CONSENT,
    13: SHOW_INSTR,
    14: START_PRACTICE_TRIAL, 

    15: SHOW_INSTR,
    16: START_FORMAL_TRIAL,               
    17: SHOW_INSTR,
    18: SHOW_DEBRIEFING_PAGE,
    19: SHOW_FINAL
};

var instr_options = {
    text: instr_text,
    funcDict: INSTR_FUNC_DICT,
};

// defining the instrObject class
class instrObject {
    constructor(options = {}) {
        Object.assign(this, {
            text: [],      // current test on the screen
            funcDict: {},  // dictionary for calling functions in order
        }, options);
        this.index = 0;    // page index
        this.instrKeys = Object.keys(this.funcDict).map(Number);
        this.qAttemptN = 0;
        this.readingTimes = [];
    }

    start(textBox = $("#instrPage"), textElement = $("#instrText")) {
        textElement.html(this.text[0]);
        if (this.instrKeys.includes(this.index)) {
            this.funcDict[this.index]();
        }
        textBox.show();
        //this.startTime = Date.now();

        // BUFFER_ALL_IMG();
        DISABLE_DEFAULT_KEYS();  // a function in trail.js
    }

    next(textElement = $("#instrText")) {
        //this.readingTimes.push((Date.now() - this.startTime)/1000);
        this.index += 1;
        DISABLE_DEFAULT_KEYS();
        if (this.index < this.text.length) {
            textElement.html(this.text[this.index]);
            if (this.instrKeys.includes(this.index)) {
                this.funcDict[this.index]();
            }
            //this.startTime = Date.now();
        }

    }

    back(textElement = $("#instrText")) {
        //this.readingTimes.push((Date.now() - this.startTime)/1000);
        this.index -= 1;
        if (this.index >= 0) {
            textElement.html(this.text[this.index]);
            if (this.instrKeys.includes(this.index)) {
                this.funcDict[this.index]();
            }
            //this.startTime = Date.now();
        } else
            this.index = 0;
    }
	
}


function SHOW_FINAL() {
    HIDE_NEXT_BUTTON();
    SHOW_INSTR();
    $("#lastPage").show();
}

function HIDE_BACK_BUTTON(){
    $("#instrBackBut").hide();
}

function HIDE_NEXT_BUTTON(){
    $("#instrNextBut").hide();
}

function SHOW_BACK_BUTTON(){
    $("#instrBackBut").show();
}

function HIDE_EXAMPLE_GRID() {
    $("#examGrid").hide();
}

function SHOW_EXAMPLE_GRID() {
    $("#examGrid").css("display", "block");
}

function SHOW_INSTR() {
    HIDE_CONSENT();
    HIDE_INSTR_Q();
    RESET_INSTR();
    // RESET_GAMEBOARD();
    if (!instr.quizCorrect)
        RESET_INSTR_Q();

    if (midtermDone == 1){
        instr.quizCorrect = false;
    }
}

function HIDE_CONSENT() {
    $("#consent").hide();
}

function HIDE_INSTR_Q() {
    $("#instrQBox1").hide();
    $("#instrQBox2").hide();
}
function RESET_INSTR() {
    $("#instrText").show();
    $("#instrNextBut").show();
    $("#tryMovePage").hide();
    $("#trySayPage").hide();
}

function SHOW_CONSENT() {
    $("#consent").show();
    HIDE_INSTR_Q();
    RESET_INSTR();
}

var midtermDone = 0;
function SHOW_INSTR_QUESTION() {
    HIDE_CONSENT();
    $("#instrText").show();
    if (midtermDone == 0){
         $("#instrQBox1").show();
    }
   else {
        $("#instrQBox2").show();
   }

    if (!instr.quizCorrect)
        $("#instrNextBut").hide();
    $("#rewardInInstrQuiz").html(REWARD.toFixed(2));
    $("#stepCostInInstrQuiz").html(STEP_COST.toFixed(2));
}

function SUBMIT_INSTR_Q() {
    var instrChoice = $("input[name='instrQ']:checked").val();
    if (typeof instrChoice === "undefined") {
        if (midtermDone == 0){
            $("#instrQWarning1").text("Please answer the question. Thank you!");
        }
        else {
            $("#instrQWarning2").text("Please answer the question. Thank you!");
        }
        
    } else if (instrChoice == "several") {
        instr.qAttemptN++;
        // subj.qAttemptN = instr.qAttemptN;  // can be uncommented
        if (midtermDone == 0){
            $("#instrQWarning1").text("Correct! Your partner will be the one opening the boxes. Please click on NEXT to proceed!");
        
        }
        else {
            $("#instrQWarning2").text("Correct! You will only be gaining points based on which boxes the Player chooses to open. Please click on NEXT to proceed!");
        }
        
        if (midtermDone == 0){
            $("#instrQBut1").hide();
        }
        else{
            $("#instrQBut2").hide();
        }
        $("#instrNextBut").show();

        if (midtermDone == 1){
            $("#quizBox input").prop("disabled", true);
        }
        $("#quizBox label").css({"cursor": "auto",
                                "pointer-events": "none"});

        instr.quizCorrect = true;
        midtermDone++;
    } else {
        instr.qAttemptN++;
        if (midtermDone == 0){
           $("#instrQWarning1").text("You have given an incorrect answer. Please try again.");
         
        }
        else {
           $("#instrQWarning2").text("You have given an incorrect answer. Please try again."); 
        }
        
    }
}

function RESET_INSTR_Q() {
    $("#instrQWarning").text("");
    $("input[name='instrQ']").prop("checked", false);
    $("#quizBox label").css({"cursor": "auto",
                                "pointer-events": "auto"});
}



// Temporary for demo
function START_PRACTICE_TRIAL() {
	$("#practicePage").show()
	HIDE_BACK_BUTTON()
	HIDE_NEXT_BUTTON()
	time_start=Date.now()

    // generateMapPrac();
    drawMovementPrac();
}

// Temporary for demo 
function START_FORMAL_TRIAL() {
	$('input[name=ConfidenceScale]').attr('checked', false);
	$("#resultRate").hide(); $("#windowBox").hide()
	$("#formalPage").show()
	HIDE_BACK_BUTTON()
	HIDE_NEXT_BUTTON()
	time_start=Date.now()

    // generateMap();
    drawMovement();
}



function END_TO_SONA() {
    window.location.href = COMPLETION_URL + subj.id;
}




/*
 ######  ####### ######  ######  ### ####### ####### ### #     #  #####
 #     # #       #     # #     #  #  #       #        #  ##    # #     #
 #     # #       #     # #     #  #  #       #        #  # #   # #
 #     # #####   ######  ######   #  #####   #####    #  #  #  # #  ####
 #     # #       #     # #   #    #  #       #        #  #   # # #     #
 #     # #       #     # #    #   #  #       #        #  #    ## #     #
 ######  ####### ######  #     # ### ####### #       ### #     #  #####

*/

function SHOW_DEBRIEFING_PAGE() {
    $("#questionsBox").show();
    $("#instrPage").hide();
    ALLOW_SPACE();
}

function SUBMIT_DEBRIEFING_Q() {
    var serious = $("input[name='serious']:checked").val();
    var strategy = $("#strategy").val();
    var problems = $("#problems").val();
    //var rating = $("input[name='rating']:checked").val();
    // var motivation = $("input[name='motivation']:checked").val();
    if (serious == undefined || strategy == "" || problems == "")
    //if (serious == undefined || strategy == "" || problems == "" || rating === undefined || motivation === undefined)
        alert("Please finish all the questions. Thank you!")
    else {
        // RECORD_DEBRIEFING_ANSWERS(serious, strategy, problems, rating, motivation);
        // RECORD_DEBRIEFING_ANSWERS(serious, strategy, problems, rating);
        // subj.submitQ();
        $("#uidText").html("You have earned " + 10086 + " in total. Please put down both your UID and email address if you'd like to receive the money bonus.")
        $("#questionsBox").hide();
        // $("#uidPage").show();

        // don't want to repeat the same values as last trial
        $("#map_num").val(100); //too high so that it's noticable as nondata
        $("#trial_num").val(100);
        $("#version").val(100);
		$("#rewards").val(100);
        $("#tokens").val(100);
		$("#hammers").val(100);
		$("#walls").val(100);
		$("#point_to").val("100");
		$("#conf_rating").val(100);

        $("#data_container").submit()

        instr.next();
        $("#lastPage").show();
    }
}

function SUBMIT_UID() {
    var uid = $("#uid").val();
    var email = $("#email").val();
    // SAVE_UID(uid, email, expt.totalScore);
    $("#uidPage").hide();
    NEXT_INSTR();
    $("#lastPage").show();
}


$(document).ready(function() {
    // subj = new subjObject(subj_options);
    
    // start instructions
    instr = new instrObject(instr_options);
    instr.start();

	 // ask for username over instructions
     var windBoxInstr = document.getElementById("windowBoxInstr");
     windBoxInstr.style.display = "block";
     var nameDisplay = document.getElementById("namingDisplay");
     nameDisplay.style.display = "block";
	
    $(document).on('submit','#data_container', function(e){
        e.preventDefault();    // prevent page from refreshing
        // const form = document.getElementById("data_container")
        // const formData = new FormData(form);  // grab the data inside the form fields
        
		var formData = {
			username: $("#username").val(),
            trial_num: $("#trial_num").val(),
		    map_num: $("#map_num").val(),
            version: $("#version").val(),
		    rewards: $("#rewards").val(),
            tokens: $("#tokens").val(),
		    hammers: $("#hammers").val(),
		    walls: $("#walls").val(),
			signal: $("#point_to").val(),
            rt: $("#rt").val(),
			conf_rating: $("#conf_rating").val(),
            serious:  $("input[name='serious']:checked").val(),
            strategy: $("#strategy").val(),
            problems: $("#problems").val()
		};
        
		$.post(
            $('#data_container').attr('action'),
			formData,
			function(result){
				// do something with the response if needed
				// $('#result').html(result);
			}
		);
    });
    // sanity_check_options["subj"] = subj;
    // trial_options["subj"] = subj;
	
});