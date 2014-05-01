SmartAjax_load('/wp-content/themes/gridded/javascripts/', function () {

  function infoLoad() {
    if (document.location.href.indexOf('info') > 0) {} else {
      $('.modal').load('/info #info.page .content');
      $('#btnInfo').addClass('loaded');
      infoClick();
    }
  }

  function infoClick() {
    $('#btnInfo.loaded').click(function () {
      $(function () {
        $('.gallery').transition({
          opacity: .2
        });
        $('#info.modal').addClass('open').css({
          display: 'table'
        }).transition({
          opacity: 1,
        }, 500);
      });
      $('#header nav .default').transition({
        y: -15
      });
    });
    $('#aboutNav a').click(function () {
      $('#header nav .default').transition({
        y: 0
      });
      $('.gallery').transition({
        opacity: 1
      });
      $('#info').transition({
        opacity: 0
      }).fadeOut(500);
      $('#info').removeClass('open');
    });
  }

  function infoClose() {
    $('#header nav .default').transition({
      y: 0
    });
    $('#info').transition({
      opacity: 0
    }).fadeOut(500).delay(500);
    $('#info').removeClass('open');
  }

  function aboutInit() {
    if (document.location.href.indexOf('info') > -1) {
      $('#btnInfo').addClass('loaded');
      $('#header nav .default').transition({
        y: -15
      });
      $('#aboutNav a').click(function () {
        $('#header nav .default').transition({
          y: 0
        });
        $('#info').fadeOut(500).delay(500).transition({
          opacity: 0
        }, 0);
        $('#info').removeClass('open');
      });
      $('#btnInfo.loaded').click(function () {
        $('#info.page').addClass('open').css({
          display: 'table'
        }).transition({
          opacity: 1
        }, 500);
        $('#header nav .default').transition({
          y: -15
        });
      });
      pushStates();
      $('.logo a').click(function () {
        infoClose();
      });
    }
  }

  function pushStates() {

    $("a[rel='tab']").click(function (e) {
      pageurl = $(this).attr('data-url');
      if (pageurl != window.location) {
        window.history.pushState({
          path: pageurl
        }, '', pageurl);
      }
      return false;
    });

    $("a[rel='close']").click(function (e) {
      pageurl = window.location
      if (pageurl != window.location) {
        window.history.pushState({
          path: pageurl
        }, '', pageurl);
      }
      return false;
    });

  }

  function projectImageZoom() {
    $('.pop').click(function () {

      event.preventDefault();
      var url = $(this).attr("href");

      $('body').append('<div class="gallery-modal" style="display:none"></div>');
      $('.gallery-modal').append('<img src="' + url + '" />');
      $('.gallery-modal').append('<a class="close" href="#"><i class="ss-delete"></i></>');

      $('.gallery-modal img').smoothZoom({
        width: '100%',
        height: '100%',
        initial_ZOOM: '160',
        border_SIZE: 0,
        responsive: true,
        pan_BUTTONS_SHOW: false
      });

      $('.gallery-modal').fadeIn(500);

      $(function () {

        $('.gallery-modal .close').click(function () {

          event.preventDefault();

          $('.gallery-modal').fadeOut(500);

          $('.gallery figure').transition({
            opacity: 1
          }, 500, function () {
            $(".gallery-modal").remove();
          });

        });

      })

    });
  }

  // Figure Positioning -- bear with me. 

  function figurePosition() {

    $(window).resize(function () {

      $.each($('.gallery.project .gallery-item img'), function () {

        var figureHeight = $('.gallery.project figure').height();
        var figImgHeight = $(this).height();

        $(this).css({

          marginTop: (figureHeight - figImgHeight) / 2

        });

      });

      var container = $('.gallery.list.project');
      var wh = $(window).height();
      var ch = container.height();

      container.css({
        height: wh - 180,
        marginTop: 120,
      });

    }).resize();

  }

  function pageScrolling() {

    // Scroll Sections for Project Pages

    var slider = $(".gallery.list");

    slider.onepage_scroll({
      sectionContainer: ".list section",
      pagination: true,
      loop: true,
      animationTime: 500,
    });

    // $('#content').append('<div id="header-bg"></div>');

    $('#slides-control .next').click(function () {
      slider.moveDown();
    });

    $('#slides-control .down').click(function () {
      slider.moveUp();
    });

    $(window).resize(function () {

      var pg = $('.onepage-pagination').height();

      $('.onepage-pagination').css({
        marginTop: -(pg / 2),
      });

    }).resize();

  }

  function zoomin() {

    $('.gallery.list .item img').smoothZoom({
      width: '100%',
      height: '100%',
      responsive: true,
    });

  }

  function figureClick() {

    $(".index figure .thumb").click(function (evt) {
      
      $('#wrapper').prepend('<div id="content" class="project loading"></div>');
      $(this).parent().parent().addClass('boom').find('h3').fadeOut();
      $(this).parent().parent().siblings().transition({opacity: 0}, 1200);
      $('#content.index').transition({opacity: 0}, 1200);

      $(this).zoomTo({
        targetsize: 2,
        duration: 1200,
        root: $(document.getElementById("zoom-container"))
      });

    });

  }

  function mobilesizing() {

    $('.index figure img').each(function () {

      var randomnumber = Math.floor(Math.random() * 3);

      if ($(this).width() > $(this).height()) {
        $(this).parent().parent().parent().addClass('wide');
      } else {
        $(this).parent().parent().parent().addClass('tall');
      }

    });

    function randOrd() {
      return (Math.round(Math.random()) - 0.5);
    }

    $(function () {

      var klasses = ['small', 'large'];

      klasses.sort(randOrd);

      $('.index figure img').each(function (i, val) {
        $(this).parent().parent().parent().addClass(klasses[i]);
      });

    });

  }

  function mobileThangs() {

    mobilesizing();

    var $container = $('.index.gallery');

    var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/);

    // This is where we control isotope for mobile and desktop

    if (isMobile) {

      // mobile

      var container = document.querySelector('.index.gallery');
      var pckry = new Packery(container, {
        itemSelector: 'figure',
        gutter: 0
      });

    } else {

      // desktop

      var $buttons = $('.index.gallery');
      var $container = $('.index.gallery').imagesLoaded(function () {

        $container.isotope({
          itemSelector: 'figure',
          masonry: {
            columnWidth: 'figure:first-child'
          },
        });
        var d = 0;

        $container.find('figure').each(function () {
          $(this).delay(d).transition({
            opacity: 1
          }, 300);
          d += 50;
        });

      });

    }

  }

  function init() {
    if (document.location.href.indexOf('info') > 0) {} else {
      $('#wrapper').append("<div id='info' class='modal'></div>");
    }
    $('#header nav').append("<div id='aboutNav'><a rel='tab' data-url='/'>Close</a></div>").wrapInner("<div class='default'></div>");
    infoLoad();
    pushStates();
    aboutInit();
    figureClick();
    mobileThangs();
    figurePosition();
    pageScrolling();
    projectImageZoom();
  }

  init();

  SmartAjax.bind('#aboutNav a', {
    reload: false,
    cache: true,
    containers: [{
      selector: '#info'
    }],

    before: function () {
      $('#ajax-loader').show(); // Show the div
      SmartAjax.proceed(); // Start loading...
    },

    done: function () {
      $('#ajax-loader').hide(); // Hide the div
      init();
    }

  });

  SmartAjax.bind('figure a', {
    reload: false,
    cache: true,
    containers: [{
      selector: '#content.project'
    }],

    before: function () {
      $('#ajax-loader').show();
      SmartAjax.proceed();
    },

    done: function () {
      $('#ajax-loader').hide();
      $('#content.loading').transition({opacity: 1}, 1200);
      init();
      setTimeout(function(){
        $('#content.index').remove();
        $('#content.loading').removeClass('loading');
      }, 600)
    }
  });

}, true);