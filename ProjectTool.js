
$("#inputform").on("click",".enter",function(){
	var text= $("#projectname").val();
	$("#projectnam").text(text);
	$("#projectname").val("");
	var text= $("#projectdesc").val();
	$("#projectdes").text(text);
	$("#projectdesc").val("");
	var text= $("#deliverables").val();
	$("#deliverable").attr("href","https://"+ text);
	$("#deliverables").val("");
	closeForm();
})
$("#one").keypress(function(event){
if(event.which === 13){
var text= $(this).val();
$(this).val("");
$("#onelist").append("<li><i class='fa fa-times-circle'></i> " + text + "</li>")
}

});

$("#two").keypress(function(event){
if(event.which === 13){
var text= $(this).val();
$(this).val("");
$("#twolist").append("<li><i class='fa fa-times-circle'></i> " + text + "</li>")
}

});

$("#three").keypress(function(event){
if(event.which === 13){
var text= $(this).val();
$(this).val("");
$("#threelist").append("<li><i class='fa fa-times-circle'></i> " + text + "</li>")
}

});

$("#four").keypress(function(event){
if(event.which === 13){
var text= $(this).val();
$(this).val("");
$("#fourlist").append("<li><i class='fa fa-times-circle'></i> " + text + "</li>")
}

});
$("ul").on("click",".fa-plus",function(){
	$("#one").fadeToggle(500);
	$("#two").fadeToggle(500);
	$("#three").fadeToggle(500);
	$("#four").fadeToggle(500);

})
$("ul").on("click",".fa-times-circle",function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
})
function openForm() {
  document.getElementById("inputform").style.display = "block";
  $("#bodywithoutinput").addClass("isblurred");

}

function closeForm() {
  document.getElementById("inputform").style.display = "none";
  $("#bodywithoutinput").removeClass("isblurred");
}
