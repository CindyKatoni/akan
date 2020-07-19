//define Akan Names
const akanNames = {
	male: [
		"Kwasi",
		"Kwadwo",
		"Kwabena",
		"Kwaku",
		"Yaw",
		"Kofi",
		"Kwame",
	],
	female: [
		"Akosua",
		"Adwoa",
		"Abenaa",
		"Akua",
		"Yaa",
		"Afua",
		"Ama",
	],
}

function getAkanNames() {
	/** Form validation */
	/** Access form inputs using DOM properties 
	 * in this case querySelector
	 * Check if date has been selected */
	const dob = document.querySelector("#dob").value;
	console.log(dob);

	/** If d.o.b is empty, alert user to enter a date */
	if (dob === "") {
		alert('Select a valid date');
		// Stop the function from executing further
		return false;
	};

	/**Check if Gender is selected */
	// Get list of radio buttons
	const radioButtonsList = document.querySelectorAll('.radio-button');
	// console.log(radioButtonsList);
	// radioButtonsList.forEach(r => console.log(r))

	/* The list of radio buttons is not really an array but a DOM NodeList
	* A NodeList object is a list of nodes extracted from a document,
	* in this case, <input/> nodes with the class "radio-button"
	* Convert the NodeList to an array so that we can use array methods */
	const radioButtons = Array.from(radioButtonsList);
	// console.log(radioButtons)
	// radioButtons.forEach(r=>console.log(r.value))

	/**Check if any of the radio buttons are selected 
	 * some() array method checks if even a single value in the array fulfill the condition
	 * If so, the method returns true, otherwise false
	*/
	const isChecked = radioButtons.some(function (radio) {
		return radio.checked;
	});
	// console.log(isChecked)

	/** If none of the radio buttons are checked
	 * Display an alert for the user to select a gender
	// */
	if (!isChecked) {
		alert('Select a gender');
		// Stop the function from executing further
		return false;
	}

	/**After validation get the dob value and split it into year, month and day 
	 * Using the string method .split(), at "-"
	 * The date format is YYYY-MM-DD therefore the resulting array will be [YYYY, MM, DD]
	*/
	const dobArray = dob.split("-");
	console.log(dobArray)

	const MM = parseInt(dobArray[1]);
	const DD = parseInt(dobArray[2]);

	// Further split the first item in the array into century digits and year digits variables
	// first convert the string into an array, next join the first 2 items for the century, then
	// and the last 2 items for the year.
	const year = Array.from(dobArray[0]); // dobArray[0].split("")
	console.log(year)

	const CC = parseInt(`${year[0]}${year[1]}`);
	const YY = parseInt(`${year[2]}${year[3]}`);

	console.log(YY, CC, MM, DD)

	/**Filter the array of radio buttons for the checked button
	 * Using the arry method filter()
	 * filter() returns an array of elements that meet that condition of the function
	 */
	const genderRadioButtonList = radioButtons.filter(function (radio) {
		return radio.checked;
	});
	const genderRadioButton = genderRadioButtonList[0];
	const gender = genderRadioButton.value;

	console.log(gender)

	// Get the day
	// Use the trunc() method to remove the decimal part
	// const d = Math.trunc((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);
	const d = Math.trunc(((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;

	// console.log(d);
	// Get the akan name from the akanNames object
	// Get the right gender by using square brackets notation to access object properties
	const akanNameList = akanNames[gender];
	console.log(akanNameList)
	// Filter through the list of Akan Names match the index with the day of the week calculated above.
	const akanNameFiltered = akanNameList.filter(function (name, index) {
		return index === d;
	});
	const akanName = akanNameFiltered[0];

	console.log(akanName)

	/** Display the Akan Name on the page */
	return document.getElementById("displayAkan").innerHTML = akanName;
}