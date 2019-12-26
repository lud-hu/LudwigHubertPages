//------------------------------------------------------------------
//------------- Open Mailto Link with text in new tab --------------
//------------------------------------------------------------------

function sendMail(){

    //set content of link
    var subject = 'Message via ux.ludwig-hubert.de';
    var body = '';
    body = document.getElementById('mail_body').value;
    var to = 'ux@ludwig-hubert.de';

    //generate Mailto link
    var args = [];

    args.push('subject=' + encodeURIComponent(subject));
    args.push('body=' + encodeURIComponent(body))

    var url = 'mailto:' + encodeURIComponent(to);
    if (args.length > 0) {
        url += '?' + args.join('&');
    }

    //open link in new tab
    var win = window.open(url, '_blank');
    win.focus();
}

//------------------------------------------
//------------- Fade In & Out --------------
//------------------------------------------

$(document).ready(function () {

    //work around browsers without JS and add invisible making classes after JS loading
    $('.fading-enabled-left').each(function () {
        $(this).addClass('is-fading-left');
    });

    $('.fading-enabled-right').each(function () {
        $(this).addClass('is-fading-right');
    });

    $('.fading-enabled-bottom').each(function () {
        $(this).addClass('is-fading-bottom');
    });

    animation('is-fading-left');
    animation('is-fading-right');
});


function animation(name) {
    //initial time until bubbles fly in
    var time = 50;

    $('[class*="is-fading-"]').each(function(){

        var myObject = this;
        setTimeout(function(){addClass(myObject, 'flew-in')}, time);

        //time difference between each speech bubble
        time += 150;
    });
};

function addClass(object, name) {
    $(object).addClass(name);
}

function isVisible(object) {
    var viewport = $(window).scrollTop() + $(window).height();
    var rand = $(object).offset();
    rand.bottom = rand.top + $(object).outerHeight();

    return (!(viewport < (rand.top + 200) || $(window).scrollTop() > (rand.bottom - 200)));
}