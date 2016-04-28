 $(function(){

var firstQ = $( "input[name='q1']" );
var secondQ = $( "input[name='q2']" );
var thirdQ = $( "input[name='q3']" );
var fourthQ = $( "input[name='q4']" );
var fifthQ = $( "input[name='q5']" );

$("#testresult").click(function() { 
    testResult(); 
    });

 
var result = 0;


function testResult() {
	result = 0;
	if (firstQ[0].checked) {
		result += 2;
	};
	
	if (secondQ[2].checked) {
		result += 2;
	};
	
	if (thirdQ[3].checked) {
		result += 2;
	};

    checkRes = 0;
    
       if (!fourthQ[0].checked && fourthQ[1].checked && !fourthQ[2].checked && fourthQ[3].checked) {
        checkRes +=2;   
    };    
      if (checkRes > 1) result +=2; 
    
    checkRes = 0;
   
   
   if (fifthQ[0].checked && fifthQ[1].checked && !fifthQ[2].checked && !fifthQ[3].checked) {
         checkRes +=2;  
    };
      if (checkRes > 1) result +=2; 

	
alert("Вы набрали " + result + " баллов " + result * 10 + "% правильных ответов!"); 
}
});