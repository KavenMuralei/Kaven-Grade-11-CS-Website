/*
Kaven Muraleitharan
4/20/2022
Mr. Krnic
JS
This is the script page for my class website. 
*/
$(document).ready(function(){
  //This is for the side bar
  $("#whenHovered").hover(function(){  $("#whenHovered").addClass("animate__animated animate__tada animate__infinite");
  });
  $("#whenHovered").mouseleave(function(){  $("#whenHovered").removeClass("animate__animated animate__tada animate__infinite");
  });

  //This is for the About Myself bar
  $("#whenHovered2").hover(function(){  $("#whenHovered2").addClass("animate__animated animate__pulse animate__infinite");
  });

  //This is for the icon in the Side Bar
  $("#test").hover(function(){  $("#test").addClass("animate__animated animate__tada animate__infinite");
  });
  $("#test").mouseleave(function(){  $("#test").removeClass("animate__animated animate__tada animate__infinite");
  });

  //(alt remove before submitting)
  $("#test2").hover(function(){  $("#test2").addClass("animate__animated animate__tada animate__infinite");
  });
  $("#test2").mouseleave(function(){  $("#test2").removeClass("animate__animated animate__tada animate__infinite");
  });

  //This is when the side bar is clicked
  $("#test").click(function(){  $("#whenClicked").addClass("animate__animated animate__fadeInDown");
  }); 
});
