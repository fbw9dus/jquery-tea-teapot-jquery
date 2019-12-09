// Work on your tasks here

$('#submit').on('click',event=>{
    $('#container').css('display','flex')
    

})
var containerDOM = document.querySelector('#container')
var containerJQuery = $(containerDOM )
$('#container').on('click',event=> {
    
 console.log(event)
 if(event.traget === $('#container')[0])$('#container').hide()
})

$('#closeBtn').on('click',event=>{
    $('#container').hide()
})
$('.main p').hover(function(){
    $(this).text("Rich in flavours");
},function(){
    $(this).text("Great tea for a cold night");
});