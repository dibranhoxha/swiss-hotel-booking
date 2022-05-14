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
    $('input[name="datefilterr"]').daterangepicker({
        autoUpdateInput: false,
        autoApply: true,
        opens: 'left',
        locale: {
            cancelLabel: 'Clear'
        },
        minDate: new Date(),
        // minDate: moment().startOf('month'),
        changeMonth: false,
        changeYear: false,
        stepMonths: 0,
    });
    $('input[name="datefilterr"]').on('apply.daterangepicker', function (ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
    });

    $('input[name="datefilterr"]').on('cancel.daterangepicker', function (ev, picker) {
        $(this).val('');
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