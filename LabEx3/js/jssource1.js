// Begin loading information of cars on page load
$(document).ready(function(){

  $.ajax({
      post: "GET",
      url: "php/createXML.php"
    }).done(function() {
      // alert("Page loaded successfully");
    }).fail(function() {
      // alert("Error occurred: " + this.responseText);
    });


	loadDoc();
	
});



//AJAX part; Initiate XMLHTTPRequest and grabs information from XML
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "php/CosmeticProducts.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Cosmetics Catalogue </th></tr>";

  $(table).appendTo("#mainContainer").attr({id:"title"});
  var x = xmlDoc.getElementsByTagName("PRODUCT");

var $main = $('#mainContainer');
containerRow = $('<div>').appendTo($main).attr("class", "containerRow");
// blankCover = $('<div>').appendTo(containerRow).attr("class", "rowCover");
// blankCover = $('<div>').appendTo(containerRow).attr("class", "rowCover2");
// $('</div>').appendTo(blankCover);
// $('</div>').appendTo(blankCover);
  // Loops through XML based on number of elements
  for (i = 0; i <x.length; i++) { 

    //Add item to HTML page by finding them based on <tag name> 
    AddItem(x[i].getElementsByTagName("PICTURE")[0].childNodes[0].nodeValue,
      x[i].getElementsByTagName("CATEGORY")[0].childNodes[0].nodeValue,
      x[i].getElementsByTagName("SELLER")[0].childNodes[0].nodeValue,
      x[i].getElementsByTagName("PRODUCTNAME")[0].childNodes[0].nodeValue,
      i);
  }
  
  $('</div>').appendTo(containerRow);
  // $('</div>').appendTo($main);
}



// JQUERY part; inserts information retireved from XML and insert into HTML page
function AddItem(picture, category, seller, productname){
  //Refer to main id 
  var $main = $('#mainContainer');
  

//Start of main item(car)
//Images column
  
    elementContainer = $('<div>').appendTo(containerRow).attr("class", "mainElement"); 

    column1 = $('<div>').appendTo(elementContainer).attr("class", "columnImage");



      imagePart = $('<div>').appendTo(column1).attr({id:"imagePart"});


      //Add overlay
      overlay = $('<div>').appendTo(imagePart).attr("class","overlay")
      //Open new page for product
      .click(function(){
        var form = '';
        form += '<input type="hidden" name="'+"picture"+'" value="'+picture+'">';
        form += '<input type="hidden" name="'+"productname"+'" value="'+productname+'">';
        form += '<input type="hidden" name="'+"category"+'" value="'+category+'">';
        form += '<input type="hidden" name="'+"seller"+'" value="'+seller+'">';
        $('<form action="' + "ProductDetailsPage.html" + '" method="GET">' + form + '</form>').appendTo($(document.body)).submit();
    });
      $('</div>').appendTo(overlay);

      overlayButton = $('<div>').appendTo(imagePart).attr("class","overlayButton");
      buttonWord = $('<a>').appendTo(overlayButton);
      buttonWord.append("CLICK ME");
      buttonWord.append('</a>');
      $('</div>').appendTo(overlayButton);
      //End of overlay

      //Add large image
      $('<img>').appendTo(imagePart).attr({src: picture, height:50, width:100, id:"imageLarge"})


    $('</div>').appendTo(elementContainer)
//End of image column


//Description column
    column2 = $('<div>').appendTo(elementContainer).attr("class", "columnDescription");

    //Name
      row1 = $('<div>').appendTo(column2).attr("class","row");
        namePart = $('<div>').appendTo(row1).attr({id:"namePart"});
        namePart.append(productname);
      $('</div>').appendTo(row1);


    //Minor attributes
      row2 = $('<div>').appendTo(column2).attr("class","row");
        descriptionPart = $('<div>').appendTo(row2).attr({id:"descriptionPart"});
        descriptionPart.append(category);
      $('</div>').appendTo(row2);

    //Seller's name
      row2 = $('<div>').appendTo(column2).attr("class","row");
        descriptionPart = $('<div>').appendTo(row2).attr({id:"sellerNamePart"});
        descriptionPart.append(seller);
      $('</div>').appendTo(row2);

    

    $('<div>').appendTo(elementContainer);
//End of description column
    
//End of main item(car)
}

