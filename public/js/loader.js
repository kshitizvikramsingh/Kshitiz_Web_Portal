document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};

// document.onreadystatechange = function () {
//     var state = document.readyState
//     if (state == 'complete') {
//         setTimeout(function(){
//             document.getElementById('interactive');
//            document.getElementById('loader').style.visibility="hidden";
//         },1000);
//     }
//   }