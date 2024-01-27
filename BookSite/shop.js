if (document.readyState == 'loading')
{
  document.addEventListener("DOMContentLoaded", ready)
} else
{
  ready();
}

function ready()
{
  var proContainer = document.getElementsByClassName("pro-container");


  for (var i = 0; i < proContainer.length; i++)
  {
    var allImages = proContainer[i].getElementsByTagName("img");
    for (var i = 0; i < allImages.length; i++)
    {
      var curImage = allImages[i];
      curImage.addEventListener('click', openSingleProductPage);
    }

  }


  for (var i = 0; i < proContainer.length; i++)
  {
    var allCartButtons = proContainer[i].getElementsByClassName("fa-shopping-cart");
    for (var i = 0; i < allCartButtons.length; i++)
    {
      var cartButton = allCartButtons[i];
      cartButton.addEventListener('click', openSingleProductPage);
      
    }

  }




}

function openSingleProductPage(event)
{
  var cartButton = event.target;

  var productItem = cartButton.parentElement;

  var image = productItem.getElementsByTagName('img')[0].src;
  var brand = productItem.getElementsByTagName('span')[0].innerText;
  var title = productItem.getElementsByTagName('h5')[0].innerText;
  var price = productItem.getElementsByTagName('h4')[0].innerText;

  localStorage.setItem("p_image", image);
  localStorage.setItem("p_brand", brand);
  localStorage.setItem("p_title", title);
  localStorage.setItem("p_price", price);

  var path, description;
  var srcSmallImg0, srcSmallTitle0, srcSmallPrice0;
  var srcSmallImg1, srcSmallTitle1, srcSmallPrice1;
  var srcSmallImg2, srcSmallTitle2, srcSmallPrice2;
  var srcSmallImg3, srcSmallTitle3, srcSmallPrice3;

  if (title.match("Romance") == "Romance")
  {
    path = "Home / Romance";
    description = "A romance novel or romantic novel is a genre fiction novel that primary focuses on the relationship and romantic love between two people, typically with an emotionally satisfying and optimistic ending."

    srcSmallImg0 = "img/books/Romance/frenchkissinginnewyork.jpg";
    srcSmallTitle0 = "French Kissing in New York";
    srcSmallPrice0 = "₹ 229";

    srcSmallImg1 = "img/books/Romance/LoveUnscripted.jpg";
    srcSmallTitle1 = "Love Unscripted";
    srcSmallPrice1 = "₹ 259";

    srcSmallImg2 = "img/books/Romance/NeverEverGettingBackTogether.jpg";
    srcSmallTitle2 = "Never Getting Back Together";
    srcSmallPrice2 = "₹ 379";

    srcSmallImg3 = "img/books/Romance/TheDeadRomantics.jpg";
    srcSmallTitle3 = "The Dead Romantics";
    srcSmallPrice3 = "₹ 329";

  }
  else if (title.match("Thriller") == "Thriller")
  {
    path = "Home / Thriller";
    description = "Thriller is a genre of fiction with numerous, often overlapping, subgenres, including crime, horror, and detective fiction. Thrillers are characterized and defined by the moods they elicit, giving their audiences heightened feelings of suspense, excitement, surprise, anticipation and anxiety."

    srcSmallImg0 = "img/books/Thriller/TheShining.jpg";
    srcSmallTitle0 = "The Shining";
    srcSmallPrice0 = "₹ 399";

    srcSmallImg1 = "img/books/Thriller/TheUpstairsHouse.jpg";
    srcSmallTitle1 = "The Upstairs House";
    srcSmallPrice1 = "₹ 299";

    srcSmallImg2 = "img/books/Thriller/TheWomanintheWindowbyA.J.Finn.webp";
    srcSmallTitle2 = "The Woman in the Window";
    srcSmallPrice2 = "₹ 389";

    srcSmallImg3 = "img/books/Thriller/TheSilentPatient.jpg";
    srcSmallTitle3 = "The Silent Patient";
    srcSmallPrice3 = "₹ 429";

  }
  else if (title.match("scifi") == "scifi")
  {
    path = "Home / Sci-Fi";
    description = "Science fiction is a time-sensitive subject in literature. Usually futuristic, science fiction speculates about alternative ways of life made possible by technological change, and hence has sometimes been called \"speculative fiction.\" Like fantasy, and often associated with it, science fiction envisions alternative worlds with believably consistent rules and structures, set apart somehow from the ordinary or familiar world of our time and place."

    srcSmallImg0 = "img/books/SciFi/TheMartian.webp";
    srcSmallTitle0 = "The Martian";
    srcSmallPrice0 = "₹ 489";

    srcSmallImg1 = "img/books/SciFi/TheConsumingFire.jpg";
    srcSmallTitle1 = "The Consuming Fire";
    srcSmallPrice1 = "₹ 399";

    srcSmallImg2 = "img/books/SciFi/TheCollapsingEmpire.jpeg";
    srcSmallTitle2 = "The Collapse Empire";
    srcSmallPrice2 = "₹ 439";

    srcSmallImg3 = "img/books/SciFi/TheBloodGift.webp";
    srcSmallTitle3 = "The Blood Gift";
    srcSmallPrice3 = "₹ 419";

  }
  else if (title.match("nonfiction") == "nonfiction")
  {
    path = "Home / Non-Fiction";
    description = "Non-fiction (or nonfiction) is any document or media content that attempts, in good faith, to convey information only about the real world, rather than being grounded in imagination. Non-fiction typically aims to present topics objectively based on historical, scientific, and empirical information."

    srcSmallImg0 = "img/books/Non-Fiction/Yes-Please.jpeg";
    srcSmallTitle0 = "Yes Please";
    srcSmallPrice0 = "₹ 499";

    srcSmallImg1 = "img/books/Non-Fiction/ToNameTheBiggerLie.png";
    srcSmallTitle1 = "To Name The Bigger Lie";
    srcSmallPrice1 = "₹ 399";

    srcSmallImg2 = "img/books/Non-Fiction/TheArtofLibromancy.png";
    srcSmallTitle2 = "The Art of Libromancy";
    srcSmallPrice2 = "₹ 459";

    srcSmallImg3 = "img/books/Non-Fiction/Pegasus.webp";
    srcSmallTitle3 = "Pagasus";
    srcSmallPrice3 = "₹ 419";

  }
  else if (title.match("actionadventure") == "actionadventure")
  {
    path = "Home / Action/Adventure";
    description = "The action film is a film genre which predominantly feature chase sequences, fights, shootouts, explosions, and stunt work."

    srcSmallImg0 = "img/books/Action & Adventure/TwoStormWood.jpg";
    srcSmallTitle0 = "Two Storm Wood";
    srcSmallPrice0 = "₹ 599";

    srcSmallImg1 = "img/books/Action & Adventure/TheLastOdyssey.webp";
    srcSmallTitle1 = "The Last Odyssey";
    srcSmallPrice1 = "₹ 439";

    srcSmallImg2 = "img/books/Action & Adventure/TheKiteRunnerbyKhaledHosseini.webp";
    srcSmallTitle2 = "The Kite Runner";
    srcSmallPrice2 = "₹ 479";

    srcSmallImg3 = "img/books/Action & Adventure/LifeofPi.jpg";
    srcSmallTitle3 = "Life Of Pie";
    srcSmallPrice3 = "₹ 399";

  }
  else if (title.match("crimemystery") == "crimemystery")
  {
    path = "Home / Crime/Mystery";
    description = "The mystery fiction genre is literature that focuses on solving a crime or crime-related puzzle. The story usually follows a protagonist, or detective, who tries to solve the crime and reveal the culprit or villain."

    srcSmallImg0 = "img/books/Crime & Mystery/ThePush.jpg";
    srcSmallTitle0 = "The Push";
    srcSmallPrice0 = "₹ 299";

    srcSmallImg1 = "img/books/Crime & Mystery/TheLasttoVanish.jpg";
    srcSmallTitle1 = "The Last to Vanish";
    srcSmallPrice1 = "₹ 389";

    srcSmallImg2 = "img/books/Crime & Mystery/TheGirlinthePinkShoesbyStacyGreen.webp";
    srcSmallTitle2 = "The Girl in the Pink Shoes";
    srcSmallPrice2 = "₹ 599";

    srcSmallImg3 = "img/books/Crime & Mystery/Ruby Roy and the Murder in the Falls.jpeg";
    srcSmallTitle3 = "Ruby Roy and the Murder in the Falls";
    srcSmallPrice3 = "₹ 469";

  }
  else
  {
    path = "Home / Product";
    description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora dolore animi! Cumque, reprehenderit nisi facilis inventore qui deleniti, ad est ipsum mollitia quos esse quam voluptates ratione, sapiente quaerat veritatis necessitatibus voluptatem quasi amet magnam. Velit vero nam id accusantium deserunt quibusdam impedit suscipit!"



  }
  localStorage.setItem("p_path", path);
  localStorage.setItem("p_description", description);

  localStorage.setItem("p_srcSmallImg0", srcSmallImg0);
  localStorage.setItem("p_srcSmallTitle0", srcSmallTitle0);
  localStorage.setItem("p_srcSmallPrice0", srcSmallPrice0);

  localStorage.setItem("p_srcSmallImg1", srcSmallImg1);
  localStorage.setItem("p_srcSmallTitle1", srcSmallTitle1);
  localStorage.setItem("p_srcSmallPrice1", srcSmallPrice1);

  localStorage.setItem("p_srcSmallImg2", srcSmallImg2);
  localStorage.setItem("p_srcSmallTitle2", srcSmallTitle2);
  localStorage.setItem("p_srcSmallPrice2", srcSmallPrice2);

  localStorage.setItem("p_srcSmallImg3", srcSmallImg3);
  localStorage.setItem("p_srcSmallTitle3", srcSmallTitle3);
  localStorage.setItem("p_srcSmallPrice3", srcSmallPrice3);


  window.location.href = 'sproduct-2.html';
}

function allBtnClickOnload()
{

  document.getElementById("allItemsBtn").click();
}