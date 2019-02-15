$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
$(function() {
$(".resp-wysp").click(function() {
    $(".wysp").show(500);
});
$(".close").click(function() {
    $(".wysp").hide(500);
});
});
