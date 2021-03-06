const wZodiac = [{
        name: "Sagittarius",
        orgDates: "11/23 - 12/21",
        startDate: "January 1, 2020",
        endDate: "January 19, 2020"
    },
    {
        name: "Capricorn",
        orgDates: "12/22 - 01/19",
        startDate: "January 20, 2020",
        endDate: "February 15, 2020"
    },
    {
        name: "Aquarius",
        orgDates: "1/20 - 2/18",
        startDate: "February 16, 2020",
        endDate: "March, 10 2020"
    },
    {
        name: "Pisces",
        orgDates: "2/19 - 3/20",
        startDate: "March 11, 2020",
        endDate: "April 4, 2020"
    },
    {
        name: "Aries",
        orgDates: "03/21 - 04/19",
        startDate: "April 18, 2020",
        endDate: "May 12, 2020"
    },
    {
        name: "Taurus",
        orgDates: "04/20 - 05/20",
        startDate: "May 13, 2020",
        endDate: "June 20, 2020"
    },
    {
        name: "Gemini",
        orgDates: "05/21 - 06/21",
        startDate: "June 21, 2020",
        endDate: "July 19, 2020"
    },
    {
        name: "Cancer",
        orgDates: "06/22 - 07/22",
        startDate: "July 20, 2020",
        endDate: "August 9, 2020"
    },
    {
        name: "Leo",
        orgDates: "07/23 - 08/22",
        startDate: "August 10, 2020",
        endDate: "September 15, 2020"
    },
    {
        name: "Virgo",
        orgDates: "08/23 - 09/22",
        startDate: "September 16, 2020",
        endDate: "October 29, 2020"
    },
    {
        name: "Libra",
        orgDates: "09/23 - 10/23",
        startDate: "October 30, 2020",
        endDate: "November 22, 2020"
    },
    {
        name: "Scorpio",
        orgDates: "10/24 - 11/22",
        startDate: "November 23, 2020",
        endDate: "November 28, 2020"
    },
    {
        name: "Ophiuchus",
        orgDates: 'x',
        startDate: "November 29, 2020",
        endDate: "December 16, 2020"
    },
    {
        name: "Sagittarius",
        orgDates: "11/23 - 12/21",
        startDate: "December 17, 2020",
        endDate: "December 31, 2020"
    }
];

const eZodiac = {
    animals: [{
            name: "Monkey",
            earthlyBranch: "sh&#xe8;n",
            yinYang: "Yang"
        },
        {
            name: "Rooster",
            earthlyBranch: "y&#466;u",
            yinYang: "Yin"
        },
        {
            name: "Dog",
            earthlyBranch: "x&#x016B;",
            yinYang: "Yang"
        },
        {
            name: "Pig",
            earthlyBranch: "h&agrave;i",
            yinYang: "Yin"
        },
        {
            name: "Rat",
            earthlyBranch: "zi",
            yinYang: "Yang"
        },
        {
            name: "Ox",
            earthlyBranch: "ch&#466;u",
            yinYang: "Yin"
        },
        {
            name: "Tiger",
            earthlyBranch: "y&#xed;n",
            yinYang: "Yang"
        },
        {
            name: " Rabbit",
            earthlyBranch: "m&#x01CE;o",
            yinYang: "Yin"
        },
        {
            name: "Dragon",
            earthlyBranch: "ch&#xe9;n",
            yinYang: "Yang"
        },
        {
            name: "Snake",
            earthlyBranch: "s&#xec;",
            yinYang: "Yin"
        },
        {
            name: "Horse",
            earthlyBranch: "w&#x01D4;",
            yinYang: "Yang"
        },
        {
            name: "Goat",
            earthlyBranch: "w&#xe8;i",
            yinYang: "Yin"
        }
    ],
    eZElements: ["Metal", "Water", "Wood", "Fire", "Earth"]
};
//takes the input from the form and turns it into a value, then to a Date 
function birthdayValue() {
    //bValue receives the element/data by form's ID and turns into a value to use
    let bValue = document.getElementById("birthday").value;
    //bValue uses date() to introduce a new date as bDate 
    let bDate = new Date(bValue);
    //bDate's Day is off because computers start counting at 0
    //correct it bDate by introducing a new date and using getDate() + 1
    let bAddDay = new Date(bDate.setDate(bDate.getDate() + 1));
    //bring each function in so thatbAddDay can be passed onto them
    wZodDate(bAddDay);
    eZodDate(bAddDay);
    eZodElement(bAddDay);
}

//inRange is not a pre-made function in JavaScript
//set 3 parameters - one that is being tested, the min, and max
function inRange(test, min, max) {
    return (test >= min && test <= max);
}

//wZodDate() checks the date from birthdayValue()'s bAddDay 
function wZodDate(bDate) {
    //orginalYear is created to save the value of bDate
    let orginalYear = bDate.getFullYear();
    //bDate's year is set to 2020 to allow date comparison
    bDate.setFullYear(2020);
    //bWrite is preset to false for future proofing purposes
    let bWrite = false;
    //a for loop is created to iterate through wZodiac start and end dates
    for (i = 0; i < wZodiac.length; i++) {
        //inRange() is used to compare the dates' range and new Date()'s create dates to compare with bDate's date type
        if (inRange(bDate, new Date(wZodiac[i].startDate).getTime(), new Date(wZodiac[i].endDate).getTime())) {
			//bWrite is set to true when this is written
            bWrite = true;
			//save value to variable
			let wName = (wZodiac[i].name);
			document.write(`Your Western Zodiac is ${wName}. `)
            //code ends
            break;
        }
    }
    //if bWrite is not true, write error message
    if (!bWrite) {
        document.write("Entry not found! Please try again.");
    }
    //set bDate's year to original year to use the proper year after this function
    bDate.setFullYear(orginalYear);
}

//eZodDate() set the eZodiac animal based on the year
function eZodDate(bDate) {
    //using the remainder from the year given and the length of the eZodiac.animals
    let i = bDate.getFullYear() % eZodiac.animals.length;
    let eName = eZodiac.animals[i].name;
	let eBranch = eZodiac.animals[i].earthlyBranch;
	let eYinYang = eZodiac.animals[i].yinYang;
	
	document.write(`Your Eastern Zodiac is the ${eName} with an  Earthly Branch of ${eBranch}, fixed sign of ${eYinYang} and `);
}

//eZodElement() is the same as eZodDate with the exception that the information needs to be repeated twice
function eZodElement(bDate) {
    let i = Math.floor(bDate.getFullYear() / 2) % eZodiac.eZElements.length;
    let eElement = eZodiac.eZElements[i];
	document.write (`earth element of ${eElement}.`);
}


