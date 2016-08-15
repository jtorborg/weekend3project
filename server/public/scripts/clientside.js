$(document).ready(function() {



  //event listeners
//   $('#calculatorform').on(submit, function(event) {
//     ('#calculatorform').empty()
//   })
//
//   $('#calculatorform').on(submit, function(event){
//
//     console.log("I've been clicked");
//   })
//
//
console.log(addition.value);



$("#calculatorform").on("submit", function(event) {
event.preventDefault();
var calculation = {};
console.log($(this)[0][0]);

 $.each($('#calculatorform').serializeArray(), function(i, field) {
     calculation[field.name] = field.value; //getting name and making it a property of input (should happen twice, once for title, once for artist)
 });

 $("#calculatorform").find('input[type=number]').val('');
add(calculation);
 console.log(calculation);
 console.log(calculation.number1);
 console.log(calculation.number2);
} );

});








  // $('#container').append('<div>' + input.number1 + input.number2  +  "</div>"); //input objects
  // console.log('The answer is', );

function add(calculation) {
    $.ajax({
        type: 'POST',
        url: '/calcadd',
        data: calculation,
        success: function(totalnumber) {
            console.log('post request successful!');

        }
    })
}

// });
//
//
// $.ajax({
// type: 'POST',
// url: '/calcsubstract'
// data: calculation,
// success: function () {
// console.log('post request successful!');
//
// },
//
//
// }
//
// $.ajax({
// type: 'POST',
// url: '/calcmultiply'
// data: calculation,
// success: function () {
// console.log('post request successful!');
//
// },
//
//
// }
//
// $.ajax({
// type: 'POST',
// url: '/calcdivide'
// data: calculation,
// success: function () {
// console.log('post request successful!');
//
// },
//
//
// }
//
//
//
// $.ajax{
// type: 'GET',
// url: '/calcadd'
// success: function(response) {
//   $('#calculatorform').empty();
//    calculation.forEach(function(input) {
//        $("#container").append('<div>' + input.number1 + input.number2 +   "</div>");
//        console.log(input);
//      });
//  },
//
//  $.ajax{
//  type: 'GET',
//  url: '/calcsubtract'
//  success: function(response) {
//    $('#calculatorform').empty();
//     calculation.forEach(function(input) {
//         $("#container").append('<div>' + input.number1 + input.number2 +   "</div>");
//         console.log(input);
//       });
//   },
//
//   $.ajax{
//   type: 'GET',
//   url: '/calcmultiply'
//   success: function(response) {
//     $('#calculatorform').empty();
//      calculation.forEach(function(input) {
//          $("#container").append('<div>' + input.number1 + input.number2 +   "</div>");
//          console.log(input);
//        });
//    },
//
//    $.ajax{
//    type: 'GET',
//    url: '/calcdivide'
//    success: function(response) {
//      $('#calculatorform').empty();
//       calculation.forEach(function(input) {
//           $("#container").append('<div>' + input.number1 + input.number2 +   "</div>");
//           console.log(input);
//         });
//     },
