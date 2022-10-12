function mydates(){
    var dates;
    let CurrentDate = document.getElementById("dates")
    var oldDate = new Date(CurrentDate.value)
    var newDate = new Date()
if(oldDate < newDate){
result = ('Past Event')

}else if(oldDate == newDate){
result = ('Todays Event')

}else{
result = ('Upcoming Event')
}
document.getElementById('result').innerHTML=result;

// dates
var months = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12];
console.log(months[oldDate.getMonth()]);



// times
var oldDate = new Date(2022, 10, 12)
var newDate = new Date()
console.log(newDate.toLocaleTimeString());

}