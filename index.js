var today = new Date();
var y = today.getFullYear();
var m = today.getMonth() + 1;
var d = today.getDate();
var day = today.getDay();
var d1 = "일요일";
var d2 = "월요일";
var d3 = "화요일";
var d4 = "수요일";
var d5 = "목요일";
var d6 = "금요일";
var d7 = "토요일";

switch (day) {
    case 0:
        c = d1; break;
    case 1:
        c = d2; break;
    case 2:
        c = d3 ; break;
    case 3:
        c = d4; break;
    case 4:
        c = d5; break;
    case 5:
        c = d6 ; break;
    case 6:
        c = d7 ; break;
    default:
        c = " ";
}
document.write("Today: ");
document.write( y + "년 " + m + "월 " + d + "일 "+ c);