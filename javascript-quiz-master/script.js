let questions = [
    {
    numb: 1,
    question: " Which file controls how your frames will appear?",
    answer: "Frameset",
    options: [
      "Frameset" ,
     "Master Document",
     "Template",
     "Timeline"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "Can a data cell contain images?",
    answer: "Yes",
    options: [
      "Yes",
      "No",
    ]
  },
    {
    numb: 5,
    question: "Is this web technology is benefit?",
    answer: "Yes",
    options: [
      "Yes",
      "No",

    ]
  },

];

 function shuffel (array){
   for(var i = array.length -1;i>0; i--){
     var j=Math.floor(Math.random()*(i+1));
     var temp = array[i];
     array[i]=array[j];
     array[j]=temp;
   }
   return array;
 }

 const shuffling = shuffel(questions);

console.log(shuffling);

const que_text1 = document.getElementById("terminal1");
const option_text1= document.getElementById("option_list1");

    let que_tag1 = '<p>'+ "1" + ". " + shuffling[0].question +'</p><br/>';
    let option_tag1= '<input type = "radio" id = "mc" name = "question1" value = "Frameset">'+ shuffling[0].options[0] + "<br />"
    + '<input type = "radio" id = "mc" name = "question1" value = "Master Document">'+ shuffling[0].options[1] + "<br />"
    + '<input type = "radio" id = "mc" name = "question1" value = "Template">'+ shuffling[0].options[2] + "<br />"
    + '<input type = "radio" id = "mc" name = "question1" value = "Timeline">'+ shuffling[0].options[3] +'<br />';
    que_text1.innerHTML = que_tag1;
    option_text1.innerHTML = option_tag1;



    const que_text2 = document.getElementById("terminal2");
    const option_text2 = document.getElementById("option_list2");

        let que_tag2 = '<p>'+ "2" + ". " + shuffling[1].question +'</p><br/>';
        let option_tag2= '<input type = "radio" id = "mc" name = "question2" value = "Common Style Sheet">'+ shuffling[1].options[0] + "<br />"
        + '<input type = "radio" id = "mc" name = "question2" value = "Colorful Style Sheet">'+ shuffling[1].options[1] + "<br />"
        + '<input type = "radio" id = "mc" name = "question2" value = "Computer Style Sheet">'+ shuffling[1].options[2] + "<br />"
        + '<input type = "radio" id = "mc" name = "question2" value = "Cascading Style Sheet">'+ shuffling[1].options[3] +'<br />';
        que_text2.innerHTML = que_tag2;
        option_text2.innerHTML = option_tag2;


        const que_text3 = document.getElementById("terminal3");
        const option_text3 = document.getElementById("option_list3");

            let que_tag3 = '<p>'+ "3"+ ". " + shuffling[2].question +'</p><br/>';
            let option_tag3= '<input type = "radio" id = "mc" name = "question3" value = "Hypertext Preprocessor">'+ shuffling[2].options[0] + "<br />"
            + '<input type = "radio" id = "mc" name = "question3" value = "Hypertext Programming">'+ shuffling[2].options[1] + "<br />"
            + '<input type = "radio" id = "mc" name = "question3" value = "Hypertext Preprogramming">'+ shuffling[2].options[2] + "<br />"
            + '<input type = "radio" id = "mc" name = "question3" value = "Hometext Preprocessor">'+ shuffling[2].options[2] +'<br />';
            que_text3.innerHTML = que_tag3;
            option_text3.innerHTML = option_tag3;


            const que_text4 = document.getElementById("terminal4");
            const option_text4 = document.getElementById("option_list4");

                let que_tag4 = '<p>'+ "4" + ". " + shuffling[3].question +'</p><br/>';
                let option_tag4= '<input type = "radio" id = "mc" name = "question4" value = "Yes">'+ shuffling[3].options[0] + "<br />"
                + '<input type = "radio" id = "mc" name = "question4" value = "No">'+ shuffling[3].options[1] + "<br />"
                + '<input type = "radio" id = "mc" name = "question4" value = "undefined">'+ shuffling[3].options[2] + "<br />"
                + '<input type = "radio" id = "mc" name = "question4" value = "undefined">'+ shuffling[3].options[3] +'<br />';
                que_text4.innerHTML = que_tag4;
                option_text4.innerHTML = option_tag4;

                const que_text5 = document.getElementById("terminal5");
                const option_text5 = document.getElementById("option_list5");

                    let que_tag5 = '<p>'+ "5" + ". " + shuffling[4].question +'</p><br/>';
                    let option_tag5= '<input type = "radio" id = "mc" name = "question5" value = "Yes">'+ shuffling[4].options[0] + "<br />"
                    + '<input type = "radio" id = "mc" name = "question5" value = "No">'+ shuffling[4].options[1] + "<br />"
                    + '<input type = "radio" id = "mc" name = "question5" value = "undefined">'+ shuffling[4].options[2] + "<br />"
                    + '<input type = "radio" id = "mc" name = "question5" value = "undefined">'+ shuffling[4].options[3] +'<br />';
                    que_text5.innerHTML = que_tag5;
                    option_text5.innerHTML = option_tag5;







function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;



	if (question1 == "Frameset") {
		correct++;
}
	if (question2 == "Cascading Style Sheet") {
		correct++;
}
	if (question3 == "Hypertext Preprocessor") {
		correct++;
	}
	if (question4 == "Yes") {
		correct++;
	}
	if (question5 == "Yes") {
		correct++;
	}

	var messages = ["Great job!", "That's just okay", "You really need to do better","your score is low","very bad"];
	var score;

	if (correct == 0) {
		score = 4;
	}

	if (correct > 0 && correct < 3) {
		score = 3;
	}

	if (correct > 2 && correct < 4) {
		score = 2;
	}

	if (correct > 3 && correct < 5) {
		score = 1;
	}

	if (correct == 5) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").innerHTML = "<h1>Correct answer</h1>" + "<br/>" +"Frameset"+ "<br/>" + "Cascading Style Sheet"+ "<br/>"  + "Hypertext Preprocessor "+ "<br/>"  + "Yes"+ "<br/>"  + "Yes";
	}



  var count = 5;
    var timeInterval =setInterval(function(){
       document.getElementById("minutes").innerHTML= count;
        count--;
        if (count===0) {
          clearInterval(timeInterval);
						document.getElementById('relogio').innerHTML='Done';
					   alert("You're out of time!");
						 check();
        }
    }, 60000)
    var count = 0;

    var timeInterval = setInterval(function(){
       document.getElementById("seconds").innerHTML=count;

        count++;
        if (count >59) {
            clearInterval(timeInterval);
        }
    }, 1000)
