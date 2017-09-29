
$(document).ready(function(){

//Required variables.
	var operator = "";
	var total = $("#input");
	var nums = $(".numbers div");
	total.text('0');

//Error handler function, in case input number is greater
//than 9 or 15.
	var testLength = function()
	{
		if (total.text().length > 9)
		{
			return false;
			// substr(total.text().length-9,9);
		}

		if (total.text().length > 15)
		{
			// total.text();// = "";
			substr(total.text().length-9,9);

		}
		return true;
	}
	//Error handler for ppl who r trying to break the app.

	nums.click(function(){
		if( total.text() === '0'){
			total.text('');
		}
		if( testLength() )
			total.text( total.text() + $(this).text());

			if (total.text() === '0/0'){
				total.text('Ted? is that you ?')
			}

			// if (total.text() === '1/0' || '2/0'){
			// 	total.text('Ted? is that you ?')
			// }
	})


	$(".operators div").click(function(){
		total.text( total.text() + $(this).text());
		// operator = $(this).text();
		// total.text( number1 + operator );
	})



$("#result").click(function(){

	if(testLength()){
	total.text(eval(total.text()));
	if (total.text() == Number.POSITIVE_INFINITY )
	{
total.text('Ted? is that you ?')
	}
}
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
total.text('0');
$("#clear").click(function(){
	total.text(0);
})
}); //Everything ends here!
