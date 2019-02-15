$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
$(function() {
$(".resp-wysp").click(function() {
    $(".wysp").animate(500).show();
});
$(".close").click(function() {
    $(".wysp").animate(500).hide();
});
});
