$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
$(function() {
$(".resp-wysp").click(function() {
    $(".wysp").show();
});
$(".close").click(function() {
    $(".wysp").hide();
});
});
