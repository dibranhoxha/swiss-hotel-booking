function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        left_div = document.createElement("DIV");
        if (!val) {
            return false;
        }
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "apartment-list");
        a.setAttribute("class", "apartment-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            location_uppercase = arr[i].toUpperCase();
            if (location_uppercase.includes(val.toUpperCase())) {
                b = document.createElement("DIV");
                b.innerHTML = arr[i];
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function (e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
        left_div.setAttribute("id", "left_div");
        this.parentNode.appendChild(left_div);

    });
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "apartment-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
        left_div = document.getElementById('left_div')
        if (typeof (left_div) != 'undefined' && left_div != null) {
            left_div.parentNode.removeChild(left_div)
        }
    });

    function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("apartment-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
        left_div = document.getElementById('left_div')
        if (typeof (left_div) != 'undefined' && left_div != null) {
            left_div.parentNode.removeChild(left_div)
        }
    });
}

var countries = ["Z??rich (Kanton)", "Bern (Kanton)", "Luzern (Kanton)", "Uri (Kanton)"];
autocomplete(document.getElementById("location_apa"), countries);
console.log("Test");

// document.addEventListener("DOMContentLoaded", function(){
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 50) {
//           document.querySelector('.container-fluid').classList.remove('mt-4');
//           document.querySelector('#header').classList.add('fixed-top');
//           document.querySelector('#header').classList.add('w-100');
//           document.querySelector('#header').classList.add('bg-white');
//         } else {
//           document.querySelector('.container-fluid').classList.remove('mt-4');
//           document.querySelector('#header').classList.remove('fixed-top');
//           document.querySelector('#header').classList.remove('w-100');
//           document.querySelector('#header').classList.remove('bg-white');
//         } 
//     });
//   }); 