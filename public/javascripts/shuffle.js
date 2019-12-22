var Shuffle = window.Shuffle;
    var element = document.querySelector('.my-shuffle-container');
    var sizer = element.querySelector('.my-sizer-element');

    var shuffleInstance = new Shuffle(element, {
      itemSelector: '.picture-item',
      sizer: sizer // could also be a selector: '.my-sizer-element'
    });
    // shuffleInstance.filter('animal');
    $("#all").on("click", function () {
      shuffleInstance.filter();
    });
    $("#btn-main1").on("click", function () {
      shuffleInstance.filter('main1');
    });
    $("#btn-main2").on("click", function () {
      shuffleInstance.filter('main2');
    });
    $("#btn-lift").on("click", function () {
      shuffleInstance.filter('lift');
    });
    $("#btn-mail").on("click", function () {
      shuffleInstance.filter('mail');
    });
    $("#btn-toilet").on("click", function () {
      shuffleInstance.filter('toilet');
    });
    $("#btn-after-sale").on("click", function () {
      shuffleInstance.filter('after-sale');
    });
    $("#btn-re-sale").on("click", function () {
      shuffleInstance.filter('re-sale');
    });
    $("#btn-fitness").on("click", function () {
      shuffleInstance.filter('fitness');
    });
    $("#btn-sky").on("click", function () {
      shuffleInstance.filter('sky');
    });
    $("#btn-library").on("click", function () {
        shuffleInstance.filter('library');
    });
    $("#btn-wait").on("click", function () {
        shuffleInstance.filter('wait');
    });
    $("#btn-stair").on("click", function () {
        shuffleInstance.filter('stair');
    });
    $("#btn-game").on("click", function () {
        shuffleInstance.filter('game');
    });
    $("#btn-kid").on("click", function () {
        shuffleInstance.filter('kid');
    });
    $("#btn-meeting").on("click", function () {
        shuffleInstance.filter('meeting');
    });
    $("#btn-bar").on("click", function () {
        shuffleInstance.filter('bar');
    });

    $("#myBtnContainer .btn").click(function () {
      $("#myBtnContainer .btn").removeClass('active');
      $(this).toggleClass('active');
    });