
$(document).ready(function(){
  //selecting using js
  //   var element=document.getElementById("mango")
  //   console.log(element)

  //   //selecting using Jquery
  //   var element=$("#mango");
  //   console.log(element);

  //   var dom=document.querySelectorAll(".red");//js
  //   console.log(dom);

  //   var Jquery=$(".red");
  //   console.log(Jquery);

  //   var Jquery=$(".red");
  //   console.log(Jquery[1]);

  //   //==============filtering
  //   let first=$("li:first");
  //   console.log(first)

  //   let last=$("li:last");
  //   console.log(last);

  //   let button=$("button");
  //   console.log(button.length);

  //   let Jquery4=$("li:nth-child(3)");
  //   console.log(Jquery4)

  //   //================first() & last()========================================
  //   var element=$("h1").first().css("background-color","green");
  //   var element1 = $("li").first().css("background-color", "#FF00FF");
  //   var element2=$("h1").last().css("background-color","black");
  //   var e = $("#listOfFruits").html("<h2>Come</h2>");
  //   console.log(e);

  //   //==============EVEN() & ODD()==============================================
  //    var element1 = $("li").even().css("background-color", "red");
  //    var element2 = $("li").odd().css("background-color", "green");

  //   //=============nth-child()================================================
  //   var clild3 = $("li:nth-child(3)").css("background-color", "#C0C0C0");
  //   $("li:nth-child(3)").css("background-color", "blue");
  //   $("li:nth-child(4)").css("color", "#FF00FF");
  //   var form = $("#myForm").css("background-color", "green");
  //   $("li:contains(Apple)").css("background-color", "purple");
  // //=============visibility================================================
  //   var hide=$("li[id=mango]").hide();
  //   var oksi= $("#mango").hide();
  //   let ilaali = $("li[id=mango]").show();

  //   //===========Altering values or updating the element=====================
  //   let child = $("#apple");
  //   console.log(child.text()); //displaying the o/p content only
  //   var changed = child.text("Orange");
  //   console.log(changed);

  //   //==================remove() & empty()=====================================
  //   var remove = $("div.button").remove();
  //    $("div").empty();
  //   var emptify=$("div.button").empty();
  //   console.log(emptify);
  //   //======append() & pepend()========before()====&===after()=================
  //    var addElement = $("div");
  //    addElement.append("<button>Four</button>");
  //    addElement.prepend("<button>Five</button>");

  //     var dabali = $("#listOfFruits");
  //     dabali.append("<li>Water melon</li>");
  //     dabali.prepend("<li>Melon</li>");

  //   var before = $("#mango").before("<li id='pine'>Pine Apple</li>");
  //   var after = $("#mango").after("<li class='cabbage'>Cabbage</li>");

  //   //===============Adding Attributes==========================================
  //   // attr()
  //   var att=$(".yellow");
  //   att.addClass("purple");//class is changed from yellow to purple
  //   att.removeClass("purple");
  //   $("div").attr("name", "oro-tech");

  //   // css()
  //   att.css("background-color","blue");//for single property
  //   att.css({
  //     "background-color":"blue",//for multiple properties
  //     color:"red",
  //     width:"380px",
  //     "border":"2px solid green"
  //   });

  //   $(".form").css({
  //     "background-color": "green",
  //     color: "red",
  //   });

  //   //  form value
  //     //  var()
  //     console.log($("input [name='first Name']").val());

  //     // -$.isNumeric() //returns true/false
  //     console.log($.isNumeric("Hello"));//false
  //     console.log($.isNumeric("20"));//true

  //     //jQuery Traversing Method
  //       parent()
  //       $("input").parent().css({
  //         border:"5px solid red",
  //         backgroundColor:"blue"
  //       });

  //      parents()
  //       $("input").parents().css({
  //         border: "5px solid green",
  //         backgroundColor: "black"
  //       });
  //       children()
  //       $("form").children().css({border:"5px solid green"});

  //       //find()
  //       $("ul")
  //         .find("#Kiwi")
  //         .css({ border: "5px solid #FF00FF", color: "#00FFFF" });

  //============jQuery Event Methods=======================================================
  //----------------Click()--------------------------------------------------------------
  // $("#Darex").on("click",changebgColor);
  // function Daro(){
  // $("#myForm").css("changebgColor", "blue");
  // };

  //hide();
  // $("#clickme").click(function () {
  //   $(this).hide();
  // });
  
  //show()
  // $("#dbclickme").mouseover(function () {
  //   $(this).prev().show();
  // });
  // // //----------------The on() Method------------------------------------------------------------
  // $("#clickme").on("click",function () {
  //   $(this).hide();
  // });
  // // show()
  // $("#dbclickme").on("dblclick",function () {
  //   $(this).prev().show();
  // });

  // ---------Form------form------------form-------------------------------------
// $("#myForm").on("submit", function (e) {
//   e.preventDefault();
//   let firstInput = $("input[name='first Name']").val();
//   let secondInput = $("input[name='last Name']").val();
//   console.log(firstInput);
//   console.log(secondInput);

//   if ($.isNumeric(firstInput) && $.isNumeric(secondInput)) {
//     let sum = parseInt(firstInput) + parseInt(secondInput);
//     $(this).append("<h4>" + sum + "</h4>");
//   } else {
//     $(this).append("<h4>please enter number only</h4>");
//   }
// });

  //   //looping through elements using vanilla JavaScrip
    // var parent = document.getElementsByTagName("li");
    // for (let i = 0; i < parent.length; i++) {
    //   var allChildren = parent[i];
    //   allChildren.style.backgroundColor = "pink";
    // }

  //---------- we can simply write in jQuery------------------------------
    // var daro=$("li").css("background-color", "green");

//   $("li").on({
//   click: function () {
//     // console.log("clicking div");
//   },
//   mouseenter: function () {
//     $("#myForm").css("background-color", "green");
//   },
//   mouseleave: function () {
//     $("#myForm").css("background-color","");
//   }
// });


  //Effects & Animation In Jquery
  //------toggle()=>hide &show---------------------------------------------------------------------
  // $("#darex").click(function(){
  //   $("#listOfFruits").toggle();
  // });
 //---------slidetoggle()----------------------------------------------------------------------
  // $("#darex").click(function () {
  //   $("#listOfFruits,#myForm").slideToggle();
  // });

  //--------fadeToggle()-------------------------------------------------------------------------
  // $("#darex").click(function () {
  //   $("#listOfFruits,#myForm").fadeToggle(2000);
  // });

  //----------------Animate()--------------------------------------------------------------------

// $("#darex").click(function () {
//   $("#listOfFruits")
//     .animate({ width: "90%" }, 1000)
//     .animate({ fontSize: "25px" }, 1000);
// });

//To restore original size

// $("#manipulate").click(function () {
//   $("#listOfFruits")
//     .animate({ width: "100%" }, 1000)
//     .animate({ fontSize: "16px" }, 1000);
// });

});