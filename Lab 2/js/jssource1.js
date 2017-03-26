// Begin loading information of cars on page load
$(document).ready(function(){
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
  xhttp.open("GET", "car_catalogue.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Car Catalogue </th></tr>";

  $(table).appendTo("#testInsert").attr({id:"title"});
  var x = xmlDoc.getElementsByTagName("ITEM");

  // Loops through XML based on number of elements
  for (i = 0; i <x.length; i++) { 

    //Add item to HTML page by finding them based on <tag name> 
    AddItem(x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue,
    	x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue,
    	x[i].getElementsByTagName("DESCRIPTION")[0].childNodes[0].nodeValue,
    	x[i].getElementsByTagName("SELLER")[0].childNodes[0].nodeValue,
      $(x).find("DETAILS"),
    	$(x).find("IMAGES"),
      i);
  }
}



// JQUERY part; inserts information retireved from XML and insert into HTML page
function AddItem(name, price, description, seller, details, imageSource, i){
  //Refer to list id 
	var $list = $('#testInsert');
  //declare temporary variables
  var litre;
  var gear;
  var type;
  var location;
  var count = 0;

  var setImg1 ;
  var setImg2 ;
  var setImg3 ;
  var setImg4 ;
  
  // Loops through nested DETAILS node
  $(details).each(function(){ 
        litre = $(this).find('Litre').text();
        gear = $(this).find('Gear').text();
        type = $(this).find('Type').text();
        location = $(this).find('Location').text();

        count++;
        //Breaks if at certain count; e.g. count = 0 = Car No.1, count = 3 = Car No.4,etc.
        if(count==i)
        {
          return false;
        }
        //Debug codes;
        // console.log(++count);
        // console.log(litre);
        // console.log(gear);
        // console.log(type);
        // console.log(location);
      });


  count = 0;

  //Loops through nested IMAGES node
  $(imageSource).each(function(){ 
        setImg1 = $(this).find('img1').text();
        setImg2 = $(this).find('img2').text();
        setImg3 = $(this).find('img3').text();
        setImg4 = $(this).find('img4').text();

        count++;
        //Breaks if at certain count; e.g. count = 0 = Car No.1, count = 3 = Car No.4,etc.
        if(count==i)
        {
          return false;
        }
        //Debug codes;
        // console.log(++count);
        // console.log(setImg1);
        // console.log(setImg2);
        // console.log(setImg3);
        // console.log(setImg4);
      });

//Start of list item(car)
//Images column
  listElement = $('<li>').appendTo($list);
    elementContainer = $('<div>').appendTo(listElement).attr("class", "listElement"); 

    column1 = $('<div>').appendTo(elementContainer).attr("class", "columnImage");

      imagePart = $('<div>').appendTo(column1).attr({id:"imagePart"});

    //Add large image
        $('<img>').appendTo(imagePart).attr({src: setImg1, height:50, width:100, id:"imageLarge"});

    //Add small images with starting dimensions
      rowImages = $('<div>').appendTo(column1).attr("class","row");
        $('<img>').appendTo(rowImages).attr({src: setImg2, height:50, width:100, id:"imageSmall"});
        $('</img>').appendTo(rowImages);
        $('<img>').appendTo(rowImages).attr({src: setImg3, height:50, width:100, id:"imageSmall"});
        $('</img>').appendTo(rowImages);
        $('<img>').appendTo(rowImages).attr({src: setImg4, height:50, width:100, id:"imageSmall"});
        $('</img>').appendTo(rowImages);
      $('</div>').appendTo(rowImages);


    $('</div>').appendTo(elementContainer)
//End of image column


//Description column
    column2 = $('<div>').appendTo(elementContainer).attr("class", "columnDescription");

    //Name
      row1 = $('<div>').appendTo(column2).attr("class","row");
        namePart = $('<div>').appendTo(row1).attr({id:"namePart"});
        namePart.append(name);
      $('</div>').appendTo(row1);

    //Price
      row2 = $('<div>').appendTo(column2).attr("class","row");
        descriptionPart = $('<div>').appendTo(row2).attr({id:"pricePart"});
        descriptionPart.append(price);
      $('</div>').appendTo(row2);

    //Minor attributes
      row2 = $('<div>').appendTo(column2).attr("class","row");
        descriptionPart = $('<div>').appendTo(row2).attr({id:"descriptionPart"});
        descriptionPart.append(litre + " | " + gear + " | " + type + " | " + location);
      $('</div>').appendTo(row2);

    //Comment
      row2 = $('<div>').appendTo(column2).attr("class","row");
        descriptionPart = $('<div>').appendTo(row2).attr({id:"commentPart"});
        descriptionPart.append(description);
      $('</div>').appendTo(row2);

    //Seller's name
      row2 = $('<div>').appendTo(column2).attr("class","row");
        descriptionPart = $('<div>').appendTo(row2).attr({id:"sellerNamePart"});
        descriptionPart.append(seller);
      $('</div>').appendTo(row2);

    

    $('<div>').appendTo(elementContainer);
//End of description column
    


    $('</div>').appendTo(listElement);
  $('</li>').appendTo($list);

//End of list item(car)
}