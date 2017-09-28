
$(document).ready(function(){




	var sum = 0;
	var operator = "";
	var total = $("#input");
	var nums = $(".numbers div");
	total.text('0');


	var testLength = function()
	{
		if (total.text().length > 9)
		{
			return false;
			// number.substr(number.length-9,9);
		}
		return true;
		if (total.text().length > 15)
		{
			total.text();// = "";
			total.text( "Wow! HUGE!" );
		}
	}


	nums.click(function(){
		if( total.text() === '0')
			total.text('');
		if( testLength() )
			total.text( total.text() + $(this).text());

	})

	$(".operators div").click(function(){
		total.text( total.text() + $(this).text());
		// operator = $(this).text();
		// total.text( number1 + operator );
	})



$("#result").click(function(){
	total.text(eval(total.text()));

 // switch (operator){
 // 	case "+":
 // 		operate = parseFloat(number1) + parseFloat(number2);
 // 		break;
 // 	case "-":
 // 			operate = parseFloat(number1) - parseFloat(number2);
 // 		break;
 // 	case "*":
 // 			operate = parseFloat(number1) * parseFloat(number2);
 // 		break;
 // 	case "/":
 // 			operate = parseFloat(number1) / parseFloat(number2);
 // 		break;
 // default: total.text('0.');
 // }
	// total.text(operate);
})
$("#clear").click(function(){

	total.text(sum);
})
}); //Everything ends here!
