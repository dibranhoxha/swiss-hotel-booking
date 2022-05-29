let dates1 = [
    '2022-04-01',
    '2022-04-02',
    '2022-04-03',
    '2022-04-04',
    '2022-04-05',
    '2022-04-06',
    '2022-04-07',
    '2022-04-08',
    '2022-04-09',
    '2022-04-10',
    '2022-04-11',
    '2022-04-12',
    '2022-04-13',
    '2022-04-14',
    '2022-04-15'
];

let dates2 = [
    '2022-04-16',
    '2022-04-17',
    '2022-04-18',
    '2022-04-19',
    '2022-04-20',
    '2022-04-21',
    '2022-04-22',
    '2022-04-23',
    '2022-04-24',
    '2022-04-25',
    '2022-04-26',
    '2022-04-27',
];

$('#check_inn').datepicker({
    dateFormat: 'dd/mm/yy',
    minDate: 0,
    firstDay: 1,
    showOtherMonths: true,
    changeMonth: true,
    changeYear: true,
    yearRange: '+0:+10',
    dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    buttonImage: "{{ asset('img/prew.png') }}",
    minDate: 0,
    onSelect: function (date) {
        $("#check_outt").datepicker('option', 'minDate', date);
    },

    beforeShow: function (input, inst) {
        var $this = $(this);
        var cal = inst.dpDiv;
        var top = $this.offset().top + $this.outerHeight();
        var left = $this.offset().left;

        setTimeout(function () {
            cal.css({
                'top': top,
                'left': left
            });
        }, 1);
    },
    beforeShowDay: function (date) {
        let y = date.getFullYear().toString();
        let m = (date.getMonth() + 1).toString();
        let d = date.getDate().toString();
        if (m.length == 1) {
            m = '0' + m;
        }
        if (d.length == 1) {
            d = '0' + d;
        }
        let currDate = y + '-' + m + '-' + d;
        if (dates1.indexOf(currDate) >= 0) {
            return [true, "ui-highlight"];
        } else {
            return [true, "ui-highlight2"];
        }
    }
});

$('#check_outt').datepicker({
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    showOtherMonths: true,
    changeMonth: true,
    changeYear: true,
    yearRange: '+0:+10',
    dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    buttonImage: "{{ asset('img/prew.png') }}",

    beforeShow: function (input, inst) {
        var $this = $(this);
        var cal = inst.dpDiv;
        var top = $this.offset().top + $this.outerHeight();
        var left = $this.offset().left;

        setTimeout(function () {
            cal.css({
                'top': top,
                'left': left
            });
        }, 1);
    },
    beforeShowDay: function (date) {
        let y = date.getFullYear().toString();
        let m = (date.getMonth() + 1).toString();
        let d = date.getDate().toString();
        if (m.length == 1) {
            m = '0' + m;
        }
        if (d.length == 1) {
            d = '0' + d;
        }
        let currDate = y + '-' + m + '-' + d;
        if (dates1.indexOf(currDate) >= 0) {
            return [true, "ui-highlight"];
        } else if (dates2.indexOf(currDate) >= 0) {
            return [true, "ui-highlight3"];
        } else {
            return [true, "ui-highlight2"];
        }
    }
});

$('#check_inn').datepicker().bind('click keyup', function () {
    if ($('#ui-datepicker-div .ui-datepicker-title').is('div')) {

        $('#ui-datepicker-div .ui-datepicker-title').prepend('<span class="position-absolute start-0 ms-2">Datum</span>');
    }
});

$('#check_outt').datepicker().bind('click keyup', function () {
    if ($('#ui-datepicker-div .ui-datepicker-title').is('div')) {

        $('#ui-datepicker-div .ui-datepicker-title').prepend('<span class="position-absolute start-0 ms-2">Datum</span>');
    }
});

$(function () {
    $(document).click(function (event) {
        let id_ = event.target.id;
        if (id_ != 'stepUp-1' && id_ != 'stepDown-1' && id_ != 'stepUp-2' && id_ != 'stepDown-2' && id_ != 'card_test') {
            let spinner1 = $('#spinner-1').val()
            let spinner2 = $('#spinner-2').val()

            if ((parseInt(spinner1) + parseInt(spinner2)) != 0) {
                $('#txt_anzahl_personen').val(parseInt(spinner1) + parseInt(spinner2))
            } else {
                $('#txt_anzahl_personen').val(null)
            }
            $('#anzahl_personen').collapse('hide');
        }
    });
});

$(function () {
    $("#spinner-1").spinner();
    $('button').button();

    $('#stepUp-1').click(function () {
        $("#spinner-1").spinner("stepUp");
    });
    $('#spinner-1').spinner('option', 'min', 0);

    $('#stepDown-1').click(function () {
        $("#spinner-1").spinner("stepDown");
    });
});

$(function () {
    $("#spinner-2").spinner();
    $('button').button();

    $('#stepUp-2').click(function () {
        $("#spinner-2").spinner("stepUp");
    });

    $('#spinner-2').spinner('option', 'min', 0);

    $('#stepDown-2').click(function () {
        $("#spinner-2").spinner("stepDown");
    });
});

$(function () {
    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
});

$(function () {
    $('.index_slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 1000,
    });
});

function selectLocation(location_id) {
    selectLocation_ = document.getElementById(location_id).innerText;
    document.getElementById('location').value = selectLocation_;
}

$(function () {
    $("#login-register").tabs();
});

$(document).ready(function () {
    $('#login-register').tabs();
    $("#login-register>div a[href^='#']").click(function () {
        var index = $($(this).attr("href")).index() - 1
        $("#login-register").tabs("option", "active", index);
        return false
    })
})

function ndryshoImazhin1() {
    var imazhi = document.getElementById('imazhi');
    if (imazhi.src.match("Pfad123.png")) {
        imazhi.src = "img/Pfad 12.png";
    }
    else {
        imazhi.src = "img/Pfad123.png";
    }
}

$(function () {
    $('input[name="datefilterr"]').datepicker({
        autoUpdateInput: false,
        autoApply: true,
        // opens: 'left',
        locale: {
            cancelLabel: 'Clear'
        },
        minDate: new Date(),
        // minDate: moment().startOf('month'),
        changeMonth: true,
        changeYear: true,
        stepMonths: 0,
    });

});

$(function () {
    $('.single_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '150px',
                    infinite: true,
                }
            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '150px',
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '50px',
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '10px',
                    slidesToScroll: 1
                }
            },
        ]
    });
});

$(document).ready(function () {
    $('select').niceSelect();
});

function ndryshoImazhin(imazhi_id) {
    var imazhi = document.getElementById(imazhi_id);
    if (imazhi.src.match("Pfad1")) {
        imazhi.src = "img/pfad.png";
    }
    else {
        imazhi.src = "img/Pfad1.png";
    }
}

$(function () {
    $('input[name="datefilter"]').daterangepicker({
        autoUpdateInput: false,
        autoApply: true,
        opens: 'right',
        locale: {
            cancelLabel: 'Clear'
        },
        minDate: new Date(),
        // minDate: moment().startOf('month'),
        changeMonth: false,
        changeYear: false,
        stepMonths: 0,

    });

    $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
    });

});

$(function () {
    $('.responsive1').not('.slick-initialized').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});

const header = document.querySelector('#section_first > .content > .container #header');
const togglerButton = document.querySelector('#section_first > .content > .container #header .navbar-toggler');

if(togglerButton) {
    togglerButton.addEventListener("click", () => {
        if(!document.querySelector('.toggler-icon').classList.contains('icon-on-scroll')) {
            header.classList.toggle('blue-back')
        } else {
            if(togglerButton.classList.contains('collapsed') === false && !document.querySelector('.toggler-icon').classList.contains('icon-on-scroll')) {
                header.classList.toggle('white-back')
            } else {
                header.classList.toggle('blue-back')
            }
        }
    })
}

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.querySelector('.container-fluid').classList.remove('mt-4');
            const header = document.querySelector('#header');
            if (header.classList.contains('home-header')) {
                header.classList.remove('no-shadow');
                header.classList.add('white-back');
                document.querySelector('#section_first > .content > .container #header a h3').style.color = '#023E8A';
                document.querySelector('#section_first > .content > .container #header a p').style.color = '#023E8A';
                const btnLogin = document.querySelector('#section_first > .content > .container #header #navbarNav ul .nav-item #btn-login');
                const btnRegister = document.querySelector('#section_first > .content > .container #header #navbarNav ul .nav-item.register-button');
                const btnRegisterText = document.querySelector('#section_first > .content > .container #header #navbarNav ul .nav-item #btn-register');
                const userName = document.querySelector('#section_first > .content > .container #header #navbarNav ul .nav-item p.user-name');
                const togglerIcons = document.querySelectorAll('#section_first > .content > .container #header .toggler-icon')
                if (btnLogin) { btnLogin.style.color = '#023E8A'; }
                if (btnRegister) { 
                    btnRegister.classList.add('scroll-theme')
                 }
                if (userName) { userName.style.color = '#023E8A'; }
                if(togglerIcons.length) {
                    togglerIcons.forEach(icon => {
                        icon.classList.add('icon-on-scroll')
                    });
                }
                document.querySelectorAll('#section_first > .content > .container #header #navbarNav ul .nav-item .nav-link').forEach(element => {
                    if (element.id !== 'btn-register')
                        element.style.color = '#023E8A'
                });
                // add padding top to show content behind navbar
                navbar_height = document.querySelector('.navbar').offsetHeight;
                //   document.querySelector('.navbar').style.margin = '0 0 -5px';
                //   document.body.style.paddingTop = navbar_height + 'px';
            }
            document.querySelector('#header').classList.add('w-100');
            document.querySelector('#header').classList.add('bg-white');

        } else {
            document.querySelector('.container-fluid').classList.remove('mt-4');
            const header = document.querySelector('#header');
            if (header.classList.contains('home-header')) {
                header.classList.add('no-shadow');
                header.classList.remove('white-back');
                // header.classList.add('blue-back');
                document.querySelector('#section_first > .content > .container #header a h3').style.color = '#fff';
                document.querySelector('#section_first > .content > .container #header a p').style.color = '#fff';
                const btnLogin = document.querySelector('#section_first > .content > .container #header #navbarNav ul .nav-item #btn-login');
                const btnRegister = document.querySelector('#section_first > .content > .container #header #navbarNav ul .nav-item.register-button');
                const btnRegisterText = document.querySelector('#section_first > .content > .container #header #navbarNav ul .nav-item #btn-register');
                const userName = document.querySelector('#section_first > .content > .container #header #navbarNav ul .nav-item p.user-name');
                const togglerIcons = document.querySelectorAll('#section_first > .content > .container #header .toggler-icon')
                if (btnLogin) { btnLogin.style.color = '#fff'; }
                if (userName) { userName.style.color = '#fff'; }
                if (btnRegister) { 
                   btnRegister.classList.remove('scroll-theme')
                }
                if(togglerIcons.length) {
                    togglerIcons.forEach(icon => {
                        icon.classList.remove('icon-on-scroll')
                    });
                }
                document.querySelectorAll('#section_first > .content > .container #header #navbarNav ul .nav-item .nav-link').forEach(element => {
                    element.style.color = '#fff'
                });


                // remove padding top from body
                document.body.style.paddingTop = '0';
            }
            document.querySelector('#header').classList.remove('w-100');
            document.querySelector('#header').classList.remove('bg-white');

        }
    });
});

const apartments_section = document.querySelector('#apartments');
const apartments_toggle_button = document.querySelector('#apartments .container-fluid>.navbar-toggler.btn')
if(apartments_toggle_button) {
    apartments_toggle_button.addEventListener('click', () => {
        if(!apartments_toggle_button.classList.contains('collapsed')) {
            apartments_section.classList.add('small-margin-top');
        } else {
            apartments_section.classList.remove('small-margin-top');
        }
    })
}