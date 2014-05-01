SmartAjax_load('/wp-content/themes/gridded/javascripts/', function () {

  function infoLoad() {
    if (document.location.href.indexOf('info') > 0) {} else {
      $('.modal').load('/info #info.page .content');
      $('#btnInfo').addClass('loaded');
      infoClick();
    }
  }

  function infoClick() {
    $('#info.modal').transition({
      scale: [1.1]
    });
    $('#btnInfo.loaded').click(function () {
      $(function () {
        $('.gallery').transition({
          scale: [.90],
          opacity: .2
        });
        $('#info.modal').addClass('open').css({
          display: 'table'
        }).transition({
          opacity: 1,
          scale: [1, 1]
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
        scale: [1],
        opacity: 1
      });
      $('#info').transition({
        scale: [1.1],
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
      scale: [1.1],
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

  // Figure Positioning -- bear with me. 

  function figurePosition() {

    //var figureHeight = $('.gallery.project figure').height();
    //var figImgHeight = $('.gallery.project figure').each(function (){$('img', this).height();}); console.log(figImgHeight);

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
        marginTop: (wh - ch) / 2,
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
      responsive: true
    });

    //$("#image #tiles").smoothZoom({
    //  width: "100%",
    //  height: "100%",
    //  use_3D_Transform: true,
    //  zoom_BUTTONS_SHOW: "NO",
    //  pan_BUTTONS_SHOW: "NO",
    //  pan_LIMIT_BOUNDARY: "YES",
    //  zoom_MAX: 80,
    //  responsive: true,
    //  container: "image",
    //  border_SIZE: 0,
    //  animation_SPEED_PAN: 10,
    //  animation_SMOOTHNESS: 1,
    //  background_COLOR: "transparent",
    //  on_IMAGE_LOAD: function () {
    //    C()
    //  }
    //});

  }

  function init() {
    if (document.location.href.indexOf('info') > 0) {} else {
      $('#wrapper').append("<div id='info' class='modal'></div>");
    }
    $('#header nav').append("<div id='aboutNav'><a rel='tab' data-url='/'>Close</a></div>").wrapInner("<div class='default'></div>");
    infoLoad();
    pushStates();
    aboutInit();
    figurePosition();
    pageScrolling();
    //zoomin();
  }

  init();

}); // closing dude

$(".index figure .thumb").click(function (evt) {

  event.preventDefault();
  var url = $(this).parent().attr("href");

  $(this).parent().parent().addClass('boom').find('h3').fadeOut();
  //$(this).parent().parent().transition({padding:0});
  $(this).parent().parent().siblings().transition({
    opacity: 0
  });

  $(this).zoomTo({
    targetsize: 1,
    duration: 600,
    root: $(document.getElementById("content"))
  });

  setTimeout(function () {
    window.location = url;
  }, 600);

  //evt.stopPropagation();
});

//$(".index figure .thumb").click(function(evt) {
//
//  event.preventDefault();
//  var url = $(this).parent().parent().attr("href");
//  
//  $(this).parent().parent().addClass('boom').find('h3').fadeOut();
//  $(this).transition({});
//  $(this).parent().siblings().transition({opacity:0});
//  
//  $(this).zoomTo({
//    targetsize:1, 
//    duration:600,
//    root: $(document.getElementById("content"))
//  });
//  
//  setTimeout(function() {
//      window.location = url;
//  }, 600);
//    
//    //evt.stopPropagation();
//  });
//  
//});

//$(".index figure img").click(function(evt) {
//
//  event.preventDefault();
//  var url = $(this).parent().parent().attr("href");
//  
//  $(this).parent().parent().find('h3').fadeOut();
//  $(this).parent().parent().parent().transition({paddingTop:10});
//  $(this).parent().parent().parent().siblings().transition({opacity:0});
//  
//  $(this).zoomTo({
//    targetsize:.78, 
//    duration:600,
//    root: $(document.getElementById("content"))
//  });
//  
//  setTimeout(function() {
//      window.location = url;
//  }, 600);
//    
//    //evt.stopPropagation();
//  });
//  
//  
//});

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

$(function () {

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

  //  // This is where we control the project click. 
  //  var position = $(window).width() - ($('.gallery.index figure:nth-child(4)').offset().left + $('.gallery.index figure:nth-child(4)').outerWidth());
  //    
  //  console.log(position);
  //  $container.delegate( 'figure', 'click', function( event ){
  //  
  //    event.preventDefault();
  //    
  //    var url = $(this).find('a').attr("href");
  //    var filterValue  = $(this);
  //    var transitions  = 600;
  //    var easing       = 'cubic-bezier(0,0.9,0.3,1)';
  //    var windowHeight = $(window).height();
  //    
  //    $(this).siblings().each(function() {
  //        $(this).transition({opacity:0}, transitions, easing);
  //    });
  //    
  //    if (position == 40) {
  //      $(this).css('right', 0);
  //    }
  //    else {
  //      $(this).css('left', 0);
  //    }
  //    
  //    if (position == 40) {
  //    
  //      // if item is on the right side
  //       
  //       $(this).addClass('boom').css({ width: '100%', left:0, paddingBottom: 50});
  //       $(this).parent().css({ height: '100%'});
  //       
  //    }
  //    else {
  //    
  //    // if item is on the left side
  //    
  //     $(this).addClass('boom').css({ width: '100%', left:0, paddingBottom: 50});
  //    $(this).parent().css({ height: '100%'});
  //       
  //       $(this).addClass('boom').transition({ top: 0, height: '100%', width: '100%'})
  //         .siblings().each(function() {
  //           $(this).hide();
  //       });
  //       
  //    }
  //    
  //    
  //    pckry.destroy();
  //    
  //    $(this).find('h3').fadeOut(transitions);
  //    
  //    setTimeout(function() {
  //      window.location = url;
  //    }, 300);
  //    
  //  });

  //  $container.delegate( 'figure', 'click', function( event ){
  //    event.preventDefault();
  //    $(this).transition({ width : '100%'}, 300);
  //    $(this).siblings().each(function() {
  //      $container.isotope( 'remove', $(this) );
  //    });
  //    $container.isotope('reLayout');
  //  });

  //  $( ".index figure a" ).click(function( event ) {
  //    event.preventDefault();
  //    $(this).parent().siblings().each(function() { 
  //      $(this).transition({
  //        opacity: .15,
  //      }, 300)
  //    })
  //    $(this).parent().parent().addClass('bigtime');
  //    $(this).parent().addClass('expanded');
  //    $(this).parent().transition({
  //      width : '100%',
  //      left  : 0,
  //    }, 300);
  //    $container.isotope('reLayout');
  //  });
  //
  //});

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

}, true);