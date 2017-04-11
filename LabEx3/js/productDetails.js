function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

$(document).ready(function(){
  document.getElementById('imageLarge').src = decodeURIComponent(GetURLParameter('picture')).split('+').join(' ');
  document.getElementById('descriptionPart').append(decodeURIComponent(GetURLParameter('category')).split('+').join(' | '));
  document.getElementById('namePart').append(decodeURIComponent(GetURLParameter('productname')).split('+').join(' '));
  document.getElementById('sellerNamePart').append(decodeURIComponent(GetURLParameter('seller')).split('+').join(' '));
});