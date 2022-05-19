
    function autocomplete(inp, arr) {
        var currentFocus;
        inp.addEventListener("input", function (e) {
            var a, b, i, val = this.value;
            closeAllLists();
            right_div = document.createElement("DIV");
            if (!val) {
                return false;
            }
            currentFocus = -1;
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
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
            right_div.setAttribute("id", "right_div");
            this.parentNode.appendChild(right_div);
    
        });
        inp.addEventListener("keydown", function (e) {
            var x = document.getElementById(this.id + "autocomplete-list");
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
            right_div = document.getElementById('right_div')
            if (typeof (right_div) != 'undefined' && right_div != null) {
                right_div.parentNode.removeChild(right_div)
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
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
    
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
            right_div = document.getElementById('right_div')
            if (typeof (right_div) != 'undefined' && right_div != null) {
                right_div.parentNode.removeChild(right_div)
            }
        });
    }
    
    var countries = ["Zürich (Kanton)", "Bern (Kanton)", "Luzern (Kanton)", "Uri (Kanton)"];
    autocomplete(document.getElementById("location"), countries);

    document.addEventListener("DOMContentLoaded", function(){
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                // console.log("Scroll")
              document.querySelector('.container-fluid').classList.remove('mt-4');
              document.querySelector('#section_first > .content > .container #header').classList.add('fixed-top');
              document.querySelector('#section_first > .content > .container #header').classList.add('w-100');
              document.querySelector('#section_first > .content > .container #header').classList.add('bg-white');
              document.querySelector('#section_first > .content > .container #header a h3').style.color = '#023E8A'
              document.querySelector('#section_first > .content > .container #header a p').style.color = '#023E8A'
              const btnLogin = document.querySelector('#section_first > .content > .container #header #navbarNav ul .nav-item #btn-login');
              const userName = document.querySelector('#section_first > .content > .container #header #navbarNav ul .nav-item p.user-name');
              if(btnLogin) {btnLogin.style.color = '#023E8A';}
              if(userName) {userName.style.color = '#023E8A';}
              document.querySelectorAll('#section_first > .content > .container #header #navbarNav ul .nav-item .nav-link').forEach(element => {
                  if(element.id !== 'btn-register') 
                    element.style.color = '#023E8A'
               });
              // add padding top to show content behind navbar
              navbar_height = document.querySelector('.navbar').offsetHeight;
            //   document.querySelector('.navbar').style.margin = '0 0 -5px';
            //   document.body.style.paddingTop = navbar_height + 'px';
            } else {
              document.querySelector('.container-fluid').classList.remove('mt-4');
              document.querySelector('#section_first > .content > .container #header').classList.remove('fixed-top');
              document.querySelector('#section_first > .content > .container #header').classList.remove('w-100');
              document.querySelector('#section_first > .content > .container #header').classList.remove('bg-white');
              document.querySelector('#section_first > .content > .container #header *').classList.remove('bg-white');
              document.querySelector('#section_first > .content > .container #header a h3').style.color = '#fff'
              document.querySelector('#section_first > .content > .container #header a p').style.color = '#fff'
              const btnLogin = document.querySelector('#section_first > .content > .container #header #navbarNav ul .nav-item #btn-login');
              const userName = document.querySelector('#section_first > .content > .container #header #navbarNav ul .nav-item p.user-name');
              if(btnLogin) {btnLogin.style.color = '#fff';}
              if(userName) {userName.style.color = '#fff';}
              document.querySelectorAll('#section_first > .content > .container #header #navbarNav ul .nav-item .nav-link').forEach(element => {
                element.style.color = '#fff'
               });


               // remove padding top from body
              document.body.style.paddingTop = '0';
            } 
        });
      }); 
    
