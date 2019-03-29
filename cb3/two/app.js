// rotate menu button when clicked
    $(".sidebar").click(()=> {
      $(this).toggleClass("rotate");
    })
  
  
  // open menu when menu is clicked
  $(".sidebar").click( ()=> {
    $("#sidemenu").toggle("easeOut")
  })

  //clear email input once submit is clicked
  $('.submit').click(() => {
    $(':text').val('')
  })

  // $('#coolfacts').on('hover', ()=>{
  //   return Attr.replace(".png")
  // }

  // $('#coolfacts').on('click', ()=>{
  //   $('#fact1').toggle('easeOut')
  // })