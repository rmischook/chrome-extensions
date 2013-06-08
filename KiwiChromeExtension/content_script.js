var loc;

var xhr = new XMLHttpRequest();
xhr.open("POST", "https://www.googleapis.com/urlshortener/v1/url", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    // JSON.parse does not evaluate the attacker's scripts.
    loc = JSON.parse(xhr.responseText).id;
  	var d=document;
    d.location.href="kiwi://post?text=" + encodeURIComponent(d.title + "\n"  + loc);
  } 
}

xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.send(JSON.stringify({"longUrl":document.location.href}));


