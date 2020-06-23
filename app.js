//========================================= C H A P T E R # 21 - 25
function atask1() {
    var firstName = prompt('type your first name');
    var lastName = prompt('tpye your last name');
    var fullName = "My name is " + firstName + " " + lastName;
    document.write(fullName);
}
function atask2() {
    var frtmodel = prompt('type your favorite mobile model name');
    document.write("My favorite mobile is " + frtmodel + "<br>Length of String is : " + frtmodel.length);
}
function atask3() {
    var str = "pakistani";
    for (var i = 0; i <= str.length; i++) {
        if (str[i] === "n") {
            document.write("n is placed on " + [i] + " index");
        }
    }
}
function atask4() {
    var str = "hello world";
    for (var i = 0; i <= str.length; i++) {
        if (str[i] === "l") {
        }
    }
    document.write("l is placed on " + str.lastIndexOf("l") + " index<br>");
}
function atask5() {
    var str = "pakistani";
    document.write("Character at index 3 is: " + str[3] + " index");
}
function atask6() {
    var firstName = prompt('type your first name');
    var lastName = prompt('tpye your last name');
    var fullName = "My name is " + firstName + " " + lastName;
    document.write(fullName);
}
function atask7() {
    var city1 = "hyder";
    var city2 = "Islam";
    var city = "abad";
    document.write("City: " + city1 + city + "<br>After replacement: " + city1.replace(city1, city2) + city);
}
function atask8() {
    var message = "Ali and Sami are best friends. They play cricket and football together.";
    var message = message.replace("and", "&");
    document.write(message);
}
function atask9() {
    var str = "254";
    var num = 254;
    document.write("value: " + str + "<br>Type: " + typeof (str) + "<br>value: " + num + "<br>Type: " + typeof (num));
}
function atask10() {
    var a = prompt('convert into upper case');
    var b = a.toUpperCase();
    document.write(b);
}
function atask11() {
//Write a program that takes user input. Convert and
// show the input in title case
    var a = prompt('convert into upper case');
    var b = a.slice(0,1)
    var c = b.toUpperCase();
    document.write(c + a);
}
function atask12() {
    var num = 25.55;
    document.write(num + " After round off is: " + Math.floor(num));
}
function atask13() {
// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


    // var userName = prompt('your name with @,.!');
    // for(var i = 0; i < userName.length; i++) {
    //     if (userName[i] === "@" || userName[i] === "." || userName[i] === "," || userName[i] === "!" ||) {
    //         }
    // }
    // document.write("user name");
}
function atask14() {
    var item = prompt('search any item', '["cake","apple pie","cookie","chips","patties"]');
    item = item.toLowerCase();
    var fruit = ["cake", "apple pie", "cookie", "chips", "patties"];
    for (var i = 0; i < fruit.length; i++) {
        if (fruit[i] == item) {
            document.write("item found from the list");
        }
        else ("not found!");
    }
}
function atask15() {
    var userPass = prompt('type password');
    if (userPass.length === 6) {
        document.write("valid password");
    }
}
function atask16() {
    var str = "University of Karachi";
    var arr = str;
    for (var i = 0; i < arr.length; i++) {
        document.write(arr[i] + "<br>");
    }
}
function atask17() {
    var str = "pakistan";
    var check = "";
    for (var i = str.length - 1; i >= 0; i--) {
        check += str[i];
    }
    document.write("Last Character of this index " + str + " is: " + check[0]);
}
function atask18() {
    // You have a string “The quick brown fox jumps over the
    // lazy dog”. Write a program to count number of
    // occurrences of word “the” in given string.
}

//========================================= C H A P T E R # 26 - 30
function btask1() {
    var num = 15.454;
    document.write("Number: " + num + "<br>Round of Value: " + Math.round(num) + "<br>Floor Value: " + 
    Math.floor(num) + "<br>Ceil Value: " + Math.ceil(num));
}
function btask2() {
    var num = Number(prompt('Type a negative number'));
    document.write("Number: " + num + "<br>Round of Value: " + Math.round(num) + "<br>Floor Value: " + 
    Math.floor(num) + "<br>Ceil Value: " + Math.ceil(num));   
}
function btask3() {
//Write a program that displays the absolute value of a number.
//E.g. absolute value of -4 is 4 & absolute value of 5 is 5
    var num1 = Number(prompt('Type a negative number'));
    var num = 1*(-num1);
    document.write("Absolute Value of " + num1 + " is: " + num);
}
function btask4() {
    var a = Math.random();
    var improvedNum = (a * 6) + 1;
    var numberOfStars = Math.floor(improvedNum);
    document.write(numberOfStars);
}
function btask5() {

}
function btask6() {

}
function btask7() {

}
function btask8() {

}




//========================================= C H A P T E R # 31 - 34
function ctask1() {
    var cdate = new Date();
    document.write(cdate);
}
function ctask2() {
    var monthname = ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];
    var cdate = new Date();
    var cmonth = cdate.getMonth();
    var month = monthname[cmonth];
    alert("Current Month : " + month);
}
function ctask3() {
    var dayname = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    var cdate = new Date();
    var cday = cdate.getDay();
    var day = dayname[cday];
    alert("Today is : " + day);
}
function ctask4() {
    var dayname = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    var cdate = new Date();
    var cday = cdate.getDay();
    var day = dayname[cday];
    if (day == 'sun' || day == 'sat') {
        alert("It's Fun day ");
    }
}
function ctask5() {
    var a = new Date();
    var day = a.getDate();
    if (day <= 15) {
        document.write("First Fifteenth days");
    }
    else {
        document.write("Last day of month");
    }
}
function ctask6() {
    var a = new Date();
    var d = new Date("jan 01,1970");
    var b = d.getTime();
    var mint = b / (1000 * 60);
    document.write("Current Date: " + a + "<br>Elapsed millisecond since january 1, 1970: " + b + "<br>Elapsed minutes since january 1, 1970: " + mint)
}
function ctask7() {
    var a = new Date();
    var hr = a.getHours();
    if (hr <= 12) {
        document.write(hr + " AM");
    }
    else {
        document.write(hr + " PM");
    }
}
function ctask8() {
    var laterDate = new Date("dec 31,2020");
    document.write(laterDate);
}
function ctask9() {
    var a = new Date();
    var atime = a.getTime();
    var b = new Date("june 18, 2015");
    var btime = b.getTime();
    var d = atime - btime;
    var day = Math.round(d / (1000 * 60 * 60 * 24 * 12));
    document.write(day + " days have passed since ramdan 1st, 2015");
}
function ctask10() {
    var a = new Date();
    var atime = a.getTime();
    var b = new Date("january 1, 2015");
    var btime = b.getTime();
    var d = atime - btime;
    var sec = Math.round(d / (1000));
    document.write("on reference date " + a + "<br>" + sec + " seconds has passed since beginning of 2015")
}
function ctask11() {
    //smjh nh aya proper result jesa chah rhi nh mila :(
    var a = new Date();
    var b = a.getHours();
    var d = b - 1;
    document.write("current date " + a + "<br>1 an hour ago " + d)
}
function ctask12() {
    var a = new Date();
    var ayr = a.getFullYear();
    var byr = ayr - 100;
    document.write("current date: " + a + "<br>100 year back: " + byr);
}
function ctask13() {
    var age = prompt('type your age');
    var a = new Date();
    var yr = a.getFullYear();
    var sun = yr - age;
    document.write(sun);
}
function ctask14() {
    var a = prompt('customer name');
    var b = prompt('current month');
    var c = prompt('no. of unit');
    var d = prompt('charges per unit');
    var e = c * d;
    var f = prompt('late payment charges');
    var g = e * f;
    document.write("<h1>K-Electric Bill</h1><br>Customer Name: " + a + "<br>Current Month: " + b + "<br>No. of unnit: " + c +
        "<br>Chrges per unit: " + d + "<br><br>Net Amount payable(Within Due Date: )" + e + "<br>Late payment Charges: " + f +
        "<br>Gross Amount Payable (After Due Date): " + g);
}
//========================================= C H A P T E R # 35 - 38
function dtask1() {
    var cdate = new Date();
    document.write(cdate);
}
function dtask2() {
    var firstName = "Ali";
    var lastName = "Ahmed";
    var fullName = "My name is " + firstName + " " + lastName;
    document.write(fullName);
}
function dtask3() {
    var first = Number(prompt('type first no'));
    var last = Number(prompt('tpye second no'));
    var sum = eval(first + last);
    document.write("The sum of  " + first + " and " + last + " is " + sum);
}
function dtask4(num1, num2) {
    var num1 = 15;
    var num2 = 10;
    document.write(num1 * num2);
}
function dtask5() {
    var a = Number(prompt('type  num for square'));
    var sq = a * a;
    document.write(sq);
}
function dtask6() {
    var n = Number(prompt('type number for factorial'));
    var c, r = 1;
    for (c = 1; c <= n; c++)
        r = r * c;
    document.write(r);
}
function dtask7() {
    var first = Number(prompt('type first no'));
    var last = Number(prompt('tpye last no'));
    for (i = first; i <= last; i++) {
        document.write(i + "<br>");
    }
}
function dtask8() {
    var b = Number(prompt('type value of base'));
    var p = Number(prompt('type value of perpendicular'));
    function hyp(){
        var base = b*b;
        var per = p*p;
        var h =(eval(base+per));
        document.write("Hypotenuse<sup>2</sup> = Base<sup>2</sup> + Perpendicular<sup>2</sup><br>" + h + " = " + base + " + " + per);
    }
    document.write(hyp() + " = " + base + " + " + per)
}
function dtask9(width,height) {
    var area= width*height;
    document.write(area);
}
function dtask10() {
    var myNAme = prompt('Palindrome', 'madam, maham, afifa, ana');
    var check = "";
    for (var i = myNAme.length - 1; i >= 0; i--) {
        check += myNAme[i];
    }
    if (myNAme === check) {
        document.write("The word " + myNAme + " is a palindrome");
    }
    else {
        document.write("The word " + myNAme + " is not a palindrome");
    }
}
function dtask11() {
// Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

    // var a = prompt('convert into upper case');
    // var b = a.toTitleCase();
    // document.write(b);
}
function dtask12() {
// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
    
    //     var str = "hello world";
    //     for (var i = 0; i <= str.length; i++) {
    //         if (str[i] === "l") {
    //         }
    //     }
    //     document.write("l is placed on " + str.lastIndexOf("l") + " index<br>");
    // }
    // function atask() {
    //     var str = "pakistani";
    //     document.write("Character at index 3 is: " + str[3] + " index");   
}
function dtask13() {
// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
}
function dtask14() {
    var r = prompt('radius');
    function calcCircumference(){
        var ans1 = eval("2*3.14*r");
        document.write(ans1);
    }
    function calcArea(){
        var ans2 = eval(3.14(r*r));
        document.write(ans2);
    }
    document.write(calcCircumference());
    document.write(calcArea());
}