$(".m-2").on('click', event=> {
      $("[Equal='senden']").css("display", "block");
})// Work on your tasks here

$(".modal-close").on('click', event =>{
      $("[Equal='senden']").css("display", "none");
})
$(".teapot").on('click',event =>{
      $(".teapot").toggleClass("teapot-rotate");
})
var containerDOM = document.querySelector(".modal")
var containerJQuery = $(containerDOM)
$("[Equal='senden']").on("click",event=>{
      console.log(event)
      if(event.target === $("[Equal='senden']")[0]) $("[Equal='senden']").hide()
})
$("#c1-1").on("mouseover",event=>{
      $("#c1").html("Good Morning Tea contains no caffeine");
})
$("#c1-1").on("mouseout",event=>{
      $("#c1").html("TWININGS");
})

$("#c2-1").on("mouseover",event=>{
      $("#c2").html("TAOUS Tea contains caffeine");
})
$("#c2-1").on("mouseout",event=>{
      $("#c2").html("TAOUS");
})

$("#c3-1").on("mouseover",event=>{
      $("#c3").html("Great tea for a cold night");
})
$("#c3-1").on("mouseout",event=>{
      $("#c3").html("LIPTON");
})
