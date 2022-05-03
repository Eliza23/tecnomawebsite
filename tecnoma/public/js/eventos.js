function traducir(){
    var idioma = document.getElementById("idioma").value; 
    if(idioma == 'espanol'){
        alert("Hola mundo" + idioma)
    }else{
        alert("estoy en ingles");
    }
}


// mensaje = document.getElementById("output").value;
// var url = "https://api.mymemory.translated.net/get?q=hola mundo&langpair=es|en";
// alert(url);
//     keyAPI = "API PERSONAL DE YANDEX";
// document.querySelector('#translate').addEventListener('click', function() {
//     var xhr = new XMLHttpRequest(),		
// 	 textAPI=$("#source").text();
//         data = "key="+keyAPI+"&text="+textAPI+"&lang=en";
//     xhr.open("POST",url,true);
//     xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//     xhr.send(data);
//     xhr.onreadystatechange = function() {
//         if (this.readyState==4 && this.status==200) {
//             var res = this.responseText;
//             var json = JSON.parse(res);
//             if(json.code == 200) {
//                 document.querySelector('#output').innerHTML = json.text[0];}
//             else {
//                 document.querySelector('#output').innerHTML = "Error Code: " + json.code;}
//         }}
// }, false);