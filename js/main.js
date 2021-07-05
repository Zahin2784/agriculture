
AOS.init();

 AOS.init();




$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 600){
            $('.scroll_icon').css({
                "opacity":"1", "pointer-events":"auto"
            });
        }else{
            $('.scroll_icon').css({
                "opacity":"0", "pointer-events":"none"
            });
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 600){
            $('.smooth_scroll').css({
                "opacity":"1", "pointer-events":"auto"
            });
        }else{
            $('.smooth_scroll').css({
                "opacity":"0", "pointer-events":"none"
            });
        }
    });
});

/*console.log('hello');
alert('This page is not fully responsive yet, it would be better if you are on pc or mobile')

var b = 'smoothie';
console.log(b);


var someNumber = 45;

console.log(someNumber);


document.getElementById('java').innerHTML = 'This is email is invalid for now';


var name = prompt('What is your name?')

document.getElementById('java').innerHTML = name;


var welcome = prompt('What is your name?');

document.getElementById('java2').innerHTML = welcome;
*/

// Numbers

var num = 10;

console.log(num);

// Increment method 1
num= num + 1;

console.log(num);

// Increment method 2
num++;
console.log(num);

// Decrement method 1
num--;
console.log(num);

// Decrement method 2
num= num - 1;
console.log(num);
// Increment/Decrement by any number
num += 20;
console.log(num);

num -= 20;
console.log(num);