$(document).ready(function(){
   $(".boxes").slideUp(1000).slideDown(1000).fadeToggle(1000);
    $("#add").click(function() {
      var a=parseInt($("#num1").val());
      var b=parseInt($("#num2").val());
        c=a+b;
        $("#result").val(c); 
      
    });
    $("#subtract").click(function() {
        var a=parseInt($("#num1").val());
        var b=parseInt($("#num2").val());
        c=a-b;
        $("#result").val(c);
    });
    $("#multiply").click(function() {
        var a=parseInt($("#num1").val());
        var b=parseInt($("#num2").val());
        c=a*b;
        $("#result").val(c);
    });
    $("#divison").click(function() {
        var a=parseInt($("#num1").val());
        var b=parseInt($("#num2").val());
        c=a/b;
        $("#result").val(c);
    });
    $("#modulus").click(function() {
        var a=parseInt($("#num1").val());
        var b=parseInt($("#num2").val());
        c=a/b;
        $("#result").val(c);
    });
    $("#exponential").click(function() {
        var a=parseInt($("#num1").val());
        var b=parseInt($("#num2").val());
        c=a**b;
        $("#result").val(c);
    });
    
});