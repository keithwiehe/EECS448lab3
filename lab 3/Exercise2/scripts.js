let n=1;

function previous()
{
  n--;
  if(n<1)
  {
    n=5;
  }
  if(n===1)
  {
    document.getElementById("ImgId").src= "1912hawk.jpg";
    document.getElementById("ImgId").width=1000;
    document.getElementById("ImgId").height=1000;
  }
  else if(n===2)
  {
    document.getElementById("ImgId").src= "1923hawk.jpg";
    document.getElementById("ImgId").width=1000;
    document.getElementById("ImgId").height=1000;
  }
  else if(n===3)
  {
    document.getElementById("ImgId").src= "1929hawk.jpg";
    document.getElementById("ImgId").width=1000;
    document.getElementById("ImgId").height=1000;
  }
  else if(n===4)
  {
    document.getElementById("ImgId").src= "footballhawk.jpeg";
    document.getElementById("ImgId").width=1000;
    document.getElementById("ImgId").height=1000;
  }
  else if(n===5)
  {
    document.getElementById("ImgId").src= "statuehawk.jpeg";
    document.getElementById("ImgId").width=1000;
    document.getElementById("ImgId").height=1000;
  }
  else {
    alert("error something wrong happened to the slideshow.");
  }
}
function next()
{
  n++;
  if(n>5)
  {
    n=1;
  }
  if(n===1)
  {
    document.getElementById("ImgId").src= "1912hawk.jpg";
    document.getElementById("ImgId").width=1000;
    document.getElementById("ImgId").height=1000;
  }
  else if(n===2)
  {
    document.getElementById("ImgId").src= "1923hawk.jpg";
    document.getElementById("ImgId").width=1000;
    document.getElementById("ImgId").height=1000;
  }
  else if(n===3)
  {
    document.getElementById("ImgId").src= "1929hawk.jpg";
    document.getElementById("ImgId").width=1000;
    document.getElementById("ImgId").height=1000;
  }
  else if(n===4)
  {
    document.getElementById("ImgId").src= "footballhawk.jpeg";
    document.getElementById("ImgId").width=1000;
    document.getElementById("ImgId").height=1000;
  }
  else if(n===5)
  {
    document.getElementById("ImgId").src= "statuehawk.jpeg";
    document.getElementById("ImgId").width=1000;
    document.getElementById("ImgId").height=1000;
  }
  else {
    alert("error something wrong happened to the slideshow.");
  }
}
