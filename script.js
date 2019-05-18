

window.onload = function(){
  let xmlHttp=new XMLHttpRequest();
  xmlHttp.async="false";
  xmlHttp.open("GET","shows.xml",false);
  xmlHttp.setRequestHeader("Content-Type", "text/xml");
  xmlHttp.send(false);
  let xmlDoc=xmlHttp.responseXML;
  let shows = xmlDoc.children[0];
  let xdiv = document.createElement('newsSegment');
  let xp = document.createElement('p');
  for(var i = 0;i<3;i++){
    let array = [];
    let show = shows.children[i];
    let venue = show.getElementsByTagName('venue');
    let city = show.getElementsByTagName('city');
    let date = show.getElementsByTagName('date');
    let time = show.getElementsByTagName('time');
    array.push(venue[0].textContent.toString(),city[0].textContent.toString(),date[0].textContent.toString(),time[0].textContent.toString())
    document.getElementById('showsMini').appendChild(xdiv);
    xdiv.appendChild(xp);
    document.getElementById('showsMini').children[i+1].children[0].innerHTML = array;
    array = [];
  }
};
