//create an array
var colorList = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];

//variables IN functions (function scope), can see global varibles)

var imageListA = new Array();
imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";
imageListA[16] = "images/drawing/thumbs/artwork_17.jpg";

//Oil color art
var imageListB = new Array();
imageListB[0] = "images/oil/thumbs/artwork_1.jpg";
imageListB[1] = "images/oil/thumbs/artwork_2.jpg";
imageListB[2] = "images/oil/thumbs/artwork_3.jpg";
imageListB[3] = "images/oil/thumbs/artwork_4.jpg";
imageListB[4] = "images/oil/thumbs/artwork_5.jpg";
imageListB[5] = "images/oil/thumbs/artwork_6.jpg";
imageListB[6] = "images/oil/thumbs/artwork_7.jpg";
imageListB[7] = "images/oil/thumbs/artwork_8.jpg";


//Water color art
var imageListC = new Array();
imageListC[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageListC[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageListC[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageListC[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageListC[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageListC[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageListC[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageListC[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageListC[8] = "images/watercolor/thumbs/artwork_9.jpg";
imageListC[9] = "images/watercolor/thumbs/artwork_10.jpg";



//}
console.log("imageListA: " + imageListA.length);
console.log("imageListB: " + imageListB.length);
console.log("imageListC: " + imageListC.length);

var imageList = [];

imageList = imageList.concat(imageListA, imageListB, imageListC);
console.log("imageList: " + imageList.length);

//create the build thumbnails function

function buildThumbnails() {
  //hook into the thumbs div
  var thumbsDiv = document.getElementById("thumbs");

  //create and output variable
  var output = "";

  for (var i = 0; i < imageList.length; i++) {

    output += '<img src="' + imageList[i] + '" />';
    thumbsDiv.innerHTML = output;

    //thumbsDiv.innerHTML += '<img src="' + imageList[i] + '" />'
  }
  // add an event listener
  thumbsDiv.addEventListener("click", addToCart, false);
}



window.onload = function()
{
	buildThumbnails();//use or "fire off" this function
	//or invoke the function
};

var purchasedImages = [];

function addToCart(evt) {

  var onlyPath = evt.target.getAttribute("src");

  if (onlyPath !=null) {
      console.log("onlyPath: " + onlyPath)

      var imageIndex = imageList.indexOf(onlyPath);
      //console.log("imageIndex: " + imageIndex)

      imageList.splice(imageIndex, 1);
      purchasedImages.push(onlyPath);
      console.log("purchasedImages Length: " + purchasedImages.length)
      buildThumbnails();
      buildCart();
  }

}

function buildCart() {
  //hook into the thumbs div
  var cartThumbsDiv = document.getElementById("shopping_cart_div");

  //create and output variable
  var output = "";

  for (var i = 0; i < purchasedImages.length; i++) {

    output += '<img src="' + purchasedImages[i] + '" />';
    cartThumbsDiv.innerHTML = output;

    //thumbsDiv.innerHTML += '<img src="' + imageList[i] + '" />'
  }
  // add an event listener
  //cartThumbsDiv.addEventListener("click", removeFromCart, false);

  
}