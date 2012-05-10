/* kmwStringTest.js: test the surrogate pair handling string functions */

// TODO: test isolated surrogates as well as correct pairs
// TODO: test edge cases as per ECMAscript standard.
// This is currently pretty piecemeal.  But I think it gets us over the line


/*------------------------------------------------------------------------------------------*/
/* kmwCodePointToCodeUnit test                                                                     */
/*------------------------------------------------------------------------------------------*/

head('kmwCodePointToCodeUnit');
    var strBMP="Brave new world";
    var strSMP="Brave 𓀧𓅌𓂜 world";

print('strSMP', strSMP);
print('strBMP.kmwCodePointToCodeUnit(9)', '9');
print('strSMP.kmwCodePointToCodeUnit(8)', '10');
print('strSMP.kmwCodePointToCodeUnit(9)', '12');
print('strSMP.kmwCodePointToCodeUnit(10)', '13');

/*------------------------------------------------------------------------------------------*/
/* kmwCodeUnitToCodePoint test                                                                     */
/*------------------------------------------------------------------------------------------*/

head('kmwCodeUnitToCodePoint');
    var strBMP="Brave new world";
    var strSMP="Brave 𓀧𓅌𓂜 world";
print('strSMP', strSMP);
print('strBMP.kmwCodeUnitToCodePoint(9)', '9');
print('strSMP.kmwCodeUnitToCodePoint(10)', '8');
print('strSMP.kmwCodeUnitToCodePoint(11)', '9');
print('strSMP.kmwCodeUnitToCodePoint(12)', '9');
print('strSMP.kmwCodeUnitToCodePoint(13)', '10');
print('strSMP.kmwCodeUnitToCodePoint(-8)','7');
print('strSMP.kmwCodeUnitToCodePoint(-9)','8');
print('strSMP.kmwCodeUnitToCodePoint(-10)','8');
print('strSMP.kmwCodeUnitToCodePoint(-11)','9');
print('strSMP.kmwCodeUnitToCodePoint(-12)','9');


/*------------------------------------------------------------------------------------------*/
/* kmwCharAt test                                                                       */
/*------------------------------------------------------------------------------------------*/

head('kmwCharAt');

    var strBMP="Brave new world";
    var strSMP="Brave 𓀧𓅌𓂜 world";
	
	print('strSMP', strSMP);
	
	print('strBMP.charAt(6)', 'n');

	print('strBMP.charAt(-1)', '');
	print('strBMP.kmwCharAt(-1)', '');
	
	print('strSMP.kmwCharAt(4)', 'e');
	print('strSMP.kmwCharAt(6)', '𓀧');
	print('strSMP.kmwCharAt(7)', '𓅌');
	print('strSMP.kmwCharAt(8)', '𓂜');
	print('strSMP.kmwCharAt(10)', 'w');

/*------------------------------------------------------------------------------------------*/
/* kmwFromCharCode test                                                                     */
/*------------------------------------------------------------------------------------------*/

head('kmwFromCharCode');

print('String.kmwFromCharCode(65,66,67)', 'ABC');
print('String.kmwFromCharCode(65,66,67,0x13001,0x13002,0x13003)', 'ABC𓀁𓀂𓀃');
print('String.kmwFromCharCode(65,66,67,0x13001,0x13002,0x13003,97,98,99)', 'ABC𓀁𓀂𓀃abc');

/*------------------------------------------------------------------------------------------*/
/* kmwCharCodeAt test                                                                       */
/*------------------------------------------------------------------------------------------*/

head('kmwCharCodeAt');

    var strBMP="Brave new world";
    var strSMP="Brave 𓀧𓅌𓂜 world";
	//var strSMP="Brave"+String.fromCharCode(0xD801)+"𓀧𓅌𓂜 world";
	
	print('strSMP', strSMP);
	
	print('strBMP.charCodeAt(0)', 66);
	print('strBMP.kmwCharCodeAt(0)', 66);

	print('strBMP.charCodeAt(-1)', NaN);
	print('strBMP.kmwCharCodeAt(-1)', NaN);

	print('strBMP.charCodeAt(6)', 110);
	print('strBMP.kmwCharCodeAt(6)', 110);

	print('strBMP.charCodeAt(10)', 119);
	print('strBMP.kmwCharCodeAt(10)', 119);
	
	print('strSMP.kmwCharCodeAt(0)', 66);
	print('strSMP.kmwCharCodeAt(-1)', NaN);
	print('strSMP.kmwCharCodeAt(6)', 0x13027);
	print('strSMP.kmwCharCodeAt(10)', 119);
	
/*------------------------------------------------------------------------------------------*/
/* kmwIndexOf test                                                                          */
/*------------------------------------------------------------------------------------------*/

head("kmwIndexOf");

    var strBMP="Brave new world";
    var strSMP="Brave 𓀧𓅌𓂜 world";
      
    print('strBMP.indexOf("w")', 8);          // Displays 8  
    print('strBMP.kmwIndexOf("w")', 8);          // Displays 8  
      
    print('strBMP.indexOf("new")', 6);        // Displays 6  
    print('strBMP.kmwIndexOf("new")', 6);        // Displays 6  

    print('strBMP.indexOf("x")', -1);          // Displays -1
    print('strBMP.kmwIndexOf("x")', -1);          // Displays -1
      
    print('strSMP.kmwIndexOf("w")', 10);          // Displays 10
    print('strSMP.kmwIndexOf("𓅌")', 7);          // Displays 7
    print('strSMP.kmwIndexOf("𓀧𓅌𓂜")', 6);        // Displays 6  
    print('strSMP.kmwIndexOf("x")', -1);         // Displays -1
    print('strSMP.kmwIndexOf("𓊺")', -1);    // Displays -1
	
/*------------------------------------------------------------------------------------------*/
/* kmwLastIndexOf test                                                                      */
/*------------------------------------------------------------------------------------------*/

head("kmwLastIndexOf");

    print('strBMP.lastIndexOf("w")', 10);      // Displays 10  
    print('strBMP.kmwLastIndexOf("w")', 10);      // Displays 10  

    print('strBMP.lastIndexOf("new")', 6);    // Displays 6  
    print('strBMP.kmwLastIndexOf("new")', 6);    // Displays 6  

    print('strSMP.kmwLastIndexOf("w")', 10);      // Displays 10  
    print('strSMP.kmwLastIndexOf("𓀧𓅌𓂜")', 6);    // Displays 6  
    print('strSMP.kmwLastIndexOf("𓅌")', 7);    // Displays 6  

    print('strSMP.kmwLastIndexOf("x")', -1);    // Displays -1  
    print('strSMP.kmwLastIndexOf("𓊺")', -1);    // Displays -1

/*------------------------------------------------------------------------------------------*/
/* kmwLength test                                                                           */
/*------------------------------------------------------------------------------------------*/

head("kmwLength");

var strBMP = "Netscape";  
var strSMP="𓀧𓅌𓂜scape";
var empty = "";  

print('strBMP.length', 8);
print('strBMP.kmwLength()', 8);
print('strSMP.length', 11);
print('strSMP.kmwLength()', 8);
print('empty.length', 0);
print('empty.kmwLength()', 0);

/*------------------------------------------------------------------------------------------*/
/* kmwSlice test                                                                            */
/*------------------------------------------------------------------------------------------*/

head("kmwSlice");

var strBMP = "The morning is upon us.";  
var strSMP = "The 𓀧𓅌𓂜ning is upon us.";

print('strBMP.slice(4, 6)', "mo");  
print('strBMP.kmwSlice(4, 6)', "mo");

print('strBMP.slice(4, -2)', "morning is upon u");  
print('strBMP.kmwSlice(4, -2)', "morning is upon u");  

print('strSMP.kmwSlice(4, 6)', "𓀧𓅌");
print('strSMP.kmwSlice(4, -2)', "𓀧𓅌𓂜ning is upon u");  
	
/*------------------------------------------------------------------------------------------*/
/* kmwSubstr test                                                                           */
/*------------------------------------------------------------------------------------------*/

head("kmwSubstr");

var str = "abcdefghij";
var strSupp = "abc𓀧𓅌𓂜ghij";
print('str.substr(1,2)', "bc");
print('str.kmwSubstr(1,2)', "bc");
print('str.substr(-3,2)', "hi");
print('str.kmwSubstr(-3,2)', "hi");

print('str.substr(0,2)', "ab");
print('str.kmwSubstr(0,2)', "ab");
print('str.substr(-3)', "hij");
print('str.kmwSubstr(-3)', "hij");
print('str.substr(1)', "bcdefghij");
print('str.kmwSubstr(1)', "bcdefghij");
print('str.substr(9)', "j");
print('str.kmwSubstr(9)', "j");
print('str.substr(10)', "");
print('str.kmwSubstr(10)', "");
print('str.substr(-20,2)', "ab");
print('str.kmwSubstr(-20,2)', "ab");
print('str.substr(20,2)', "");
print('str.kmwSubstr(20,2)', "");

print('strSupp.kmwSubstr(0,4)', "abc𓀧");
print('strSupp.kmwSubstr(1,3)', "bc𓀧");
print('strSupp.kmwSubstr(-3,2)', "hi");
print('strSupp.kmwSubstr(-3)', "hij");
print('strSupp.kmwSubstr(1)', "bc𓀧𓅌𓂜ghij");
print('strSupp.kmwSubstr(-20,2)', "ab");
print('strSupp.kmwSubstr(20,2)', "");
print('strSupp.kmwSubstr(-6)', "𓅌𓂜ghij");
print('strSupp.kmwSubstr(-6).kmwSubstr(0,2)', "𓅌𓂜");
print('strSupp.kmwSubstr(-30)', strSupp);

/*------------------------------------------------------------------------------------------*/
/* kmwSubstring test                                                                        */
/*------------------------------------------------------------------------------------------*/

head("kmwSubstring");

var strBMP = "Mozilla";
var strSMP = "Moz𓀧𓅌𓂜𓏐𓊺Text"; 

// Displays "Moz"
print('strBMP.substring(0,3)', "Moz");
print('strBMP.substring(3,0)', "Moz");
print('strBMP.kmwSubstring(0,3)', "Moz");
print('strBMP.kmwSubstring(3,0)', "Moz");
print('strBMP.substring(4)','lla');
print('strBMP.kmwSubstring(4)','lla');
print('strBMP.substring(7)','');
print('strBMP.kmwSubstring(7)','');

// Displays "lla"
print('strBMP.substring(4,7)', "lla");
print('strBMP.substring(7,4)', "lla");
print('strBMP.kmwSubstring(4,7)', "lla");
print('strBMP.kmwSubstring(7,4)', "lla");

// Displays "Mozill"
print('strBMP.substring(0,6)', "Mozill");
print('strBMP.kmwSubstring(0,6)', "Mozill");

// Displays "Mozilla"
print('strBMP.substring(0,7)', "Mozilla");
print('strBMP.substring(0,10)', "Mozilla");
print('strBMP.kmwSubstring(0,7)', "Mozilla"); //to here
print('strBMP.kmwSubstring(0,10)', "Mozilla");

// Displays "Moz"
print('strSMP.kmwSubstring(0,3)', "Moz");
print('strSMP.kmwSubstring(3,0)', "Moz");

// Displays "lla"
print('strSMP.kmwSubstring(4,7)', "𓅌𓂜𓏐");
print('strSMP.kmwSubstring(7,4)', "𓅌𓂜𓏐");

// Displays "Mozill"
print('strSMP.kmwSubstring(0,6)', "Moz𓀧𓅌𓂜");

// Displays "Mozill"
print('strSMP.kmwSubstring(0,9)', "Moz𓀧𓅌𓂜𓏐𓊺T");

// Displays "Mozilla"
print('strSMP.kmwSubstring(0,12)', "Moz𓀧𓅌𓂜𓏐𓊺Text");
print('strSMP.kmwSubstring(0,20)', "Moz𓀧𓅌𓂜𓏐𓊺Text");

/*------------------------------------------------------------------------------------------*/
/* Helper functions                                                                         */
/*------------------------------------------------------------------------------------------*/

head('');

var inTable = false;
function head(v)
{
  if(inTable) document.writeln('</table>');
  document.writeln('<h1>'+v+'</h1>');
  document.writeln('<table>');
  inTable = true;
}

function print(v, expected)
{
  var x = eval(v);
  if(typeof x == 'number' && isNaN(x) && typeof expected == 'number' && isNaN(expected)) { x = expected = 'NaN'; } // special case for validity
  document.writeln('<tr class="'+(x == expected ? 'good' : 'bad')+'"><td class="exec">'+v+'</td><td class="value">'+x+'</td><td class="expected">'+expected+'</td></tr>');
}
