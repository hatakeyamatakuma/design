//使用する変数を定義
const sliderArrow = $(".slider__text__left__link__arrow")
      sliderLink = $(".slider__text__right__link")
      sliderHamburger = $(".slider__hamburger__open")
      navTitle = $(".nav__left__title__link")
      mainVisual = $(".main-visual__img__text__bottom__inner")
      mainVisualImg = $(".main-visual__img__content__link")
      mainVisualHashtag = $(".main-visual__img__text__hashtag__text")
      interview = $(".interview__text__bottom__inner")
      interviewImg = $(".interview__img__link")
      interviewLink = $(".interview__text__hashtag__link")
      interviewTextLink = $(".interview__text__link")
      contentView = $(".content__container__text__view__flex")
      contentlist = $(".content__container__contents__list__item__box__inner")
      contentImg = $(".content__container__contents__list__item__link")
      contentTitle = $(".content__container__contents__more__link")
      contentHashtag = $(".content__container__contents__list__item__box__hashtag__link")
      subVisual = $(".sub-visual__img__content__middle__right__inner")
      lineUp = $(".line-up__text__view__arrow")
      lineUpitem = $(".line-up__content__list__item__inner")
      lineUpImg = $(".line-up__content__list__link")
      comments = $(".comments__view__inner")
      commentsImg = $(".comments__content__list__item__link")
      bottomView = $(".bottom-view__link")

$(function(){
  //ホバー時にクラス追加する関数
  function hoverAnimation(hoverContent){
    $(hoverContent).hover(
        function() {
          $(this).addClass("hover-animation");
        },
        function() {
          $(this).removeClass("hover-animation");
        }
    )
  }
  //ホバー時にクラス追加を実行
  hoverAnimation(sliderArrow)
  hoverAnimation(sliderLink)
  hoverAnimation(sliderHamburger)
  hoverAnimation(mainVisual)
  hoverAnimation(contentView)
  hoverAnimation(contentlist)
  hoverAnimation(subVisual)
  hoverAnimation(lineUp)
  hoverAnimation(lineUpitem)
  hoverAnimation(comments)
  hoverAnimation(interviewImg)
  hoverAnimation(contentImg)
  hoverAnimation(lineUpImg)
  hoverAnimation(commentsImg)
  hoverAnimation(contentTitle)
  hoverAnimation(navTitle)
  hoverAnimation(interviewLink)
  hoverAnimation(contentHashtag)
  hoverAnimation(bottomView)

  //main-visualのみホバー時に複数箇所にイベントが起きる。その関数
  function hoverAnimationMainvisual(hoverContent){
    $(hoverContent).hover(
        function() {
          $(this).addClass("hover-animation");
          $(".main-visual__img__text__bottom__inner").addClass("hover-animation")
        },
        function() {
          $(this).removeClass("hover-animation");
          $(".main-visual__img__text__bottom__inner").removeClass("hover-animation")
        }
    )
  }

    //ホバー時にクラス追加を実行
    hoverAnimationMainvisual(mainVisualImg)
    hoverAnimationMainvisual(mainVisualHashtag)

  //interviewのホバー時の複数箇所のイベント発火
  function hoverAnimaitonInterview(hoverContent){
    $(hoverContent).hover(
      function() {
        $(interview).addClass("hover-animation");
        $(interviewImg).addClass("hover-animation");
      },
      function() {
        $(interview).removeClass("hover-animation");
        $(interviewImg).removeClass("hover-animation");
      }
    )
  }

  hoverAnimaitonInterview(interview)
  hoverAnimaitonInterview(interviewImg)
  hoverAnimaitonInterview(interviewTextLink)

  contentTitle.on("click", function(){
    $(".hide-content").addClass("fadein")
    $(".hide-content").slideDown();
    $(".hide-content").fadeIn(1000);
    $(".content__container__contents__more__link__title").hide();
  })


  const contentImg1 = $(".layout-1 .content__container__contents__list__item__link")
        contentList1 = $(".layout-1 .content__container__contents__list__item__box__inner")
        contentImg2 = $(".layout-2 .content__container__contents__list__item__link")
        contentList2 = $(".layout-2 .content__container__contents__list__item__box__inner")
        contentImg3 = $(".layout-3 .content__container__contents__list__item__link")
        contentList3 = $(".layout-3 .content__container__contents__list__item__box__inner")
        contentImg4 = $(".layout-4 .content__container__contents__list__item__link")
        contentList4 = $(".layout-4 .content__container__contents__list__item__box__inner")
        contentImg5 = $(".layout-5 .content__container__contents__list__item__link")
        contentList5 = $(".layout-5 .content__container__contents__list__item__box__inner")
        contentImg6 = $(".layout-6 .content__container__contents__list__item__link")
        contentList6 = $(".layout-6 .content__container__contents__list__item__box__inner")
        contentImg7 = $(".layout-7 .content__container__contents__list__item__link")
        contentList7 = $(".layout-7 .content__container__contents__list__item__box__inner")
        contentImg8 = $(".layout-8 .content__container__contents__list__item__link")
        contentList8 = $(".layout-8 .content__container__contents__list__item__box__inner")
        contentImg9 = $(".layout-9 .content__container__contents__list__item__link")
        contentList9 = $(".layout-9 .content__container__contents__list__item__box__inner")
        contentImg10 = $(".layout-10 .content__container__contents__list__item__link")
        contentList10 = $(".layout-10 .content__container__contents__list__item__box__inner")
        contentImg11 = $(".layout-11 .content__container__contents__list__item__link")
        contentList11 = $(".layout-11 .content__container__contents__list__item__box__inner")
        contentImg12 = $(".layout-12 .content__container__contents__list__item__link")
        contentList12 = $(".layout-12 .content__container__contents__list__item__box__inner")


  function hoverAnimationContent1(hoverContent){
    $(hoverContent).hover(
        function() {
          $(contentImg1).addClass("hover-animation")
          $(contentList1).addClass("hover-animation")
        },
        function() {
          $(contentImg1).removeClass("hover-animation")
          $(contentList1).removeClass("hover-animation")
        }
    )
  }

  hoverAnimationContent1(contentImg1)
  hoverAnimationContent1(contentList1)

  function hoverAnimationContent2(hoverContent){
    $(hoverContent).hover(
        function() {
          $(contentImg2).addClass("hover-animation")
          $(contentList2).addClass("hover-animation")
        },
        function() {
          $(contentImg2).removeClass("hover-animation")
          $(contentList2).removeClass("hover-animation")
        }
    )
  }

  hoverAnimationContent2(contentImg2)
  hoverAnimationContent2(contentList2)

  function hoverAnimationContent3(hoverContent){
    $(hoverContent).hover(
        function() {
          $(contentImg3).addClass("hover-animation")
          $(contentList3).addClass("hover-animation")
        },
        function() {
          $(contentImg3).removeClass("hover-animation")
          $(contentList3).removeClass("hover-animation")
        }
    )
  }

  hoverAnimationContent3(contentImg3)
  hoverAnimationContent3(contentList3)

  function hoverAnimationContent4(hoverContent){
    $(hoverContent).hover(
        function() {
          $(contentImg4).addClass("hover-animation")
          $(contentList4).addClass("hover-animation")
        },
        function() {
          $(contentImg4).removeClass("hover-animation")
          $(contentList4).removeClass("hover-animation")
        }
    )
  }

  hoverAnimationContent4(contentImg4)
  hoverAnimationContent4(contentList4)

  function hoverAnimationContent5(hoverContent){
    $(hoverContent).hover(
        function() {
          $(contentImg5).addClass("hover-animation")
          $(contentList5).addClass("hover-animation")
        },
        function() {
          $(contentImg5).removeClass("hover-animation")
          $(contentList5).removeClass("hover-animation")
        }
    )
  }

  hoverAnimationContent5(contentImg5)
  hoverAnimationContent5(contentList5)

  function hoverAnimationContent6(hoverContent){
    $(hoverContent).hover(
        function() {
          $(contentImg6).addClass("hover-animation")
          $(contentList6).addClass("hover-animation")
        },
        function() {
          $(contentImg6).removeClass("hover-animation")
          $(contentList6).removeClass("hover-animation")
        }
    )
  }

  hoverAnimationContent6(contentImg6)
  hoverAnimationContent6(contentList6)

  function hoverAnimationContent7(hoverContent){
    $(hoverContent).hover(
        function() {
          $(contentImg7).addClass("hover-animation")
          $(contentList7).addClass("hover-animation")
        },
        function() {
          $(contentImg7).removeClass("hover-animation")
          $(contentList7).removeClass("hover-animation")
        }
    )
  }

  hoverAnimationContent7(contentImg7)
  hoverAnimationContent7(contentList7)

  function hoverAnimationContent8(hoverContent){
    $(hoverContent).hover(
        function() {
          $(contentImg8).addClass("hover-animation")
          $(contentList8).addClass("hover-animation")
        },
        function() {
          $(contentImg8).removeClass("hover-animation")
          $(contentList8).removeClass("hover-animation")
        }
    )
  }

  hoverAnimationContent8(contentImg8)
  hoverAnimationContent8(contentList8)

  function hoverAnimationContent9(hoverContent){
    $(hoverContent).hover(
        function() {
          $(contentImg9).addClass("hover-animation")
          $(contentList9).addClass("hover-animation")
        },
        function() {
          $(contentImg9).removeClass("hover-animation")
          $(contentList9).removeClass("hover-animation")
        }
    )
  }

  hoverAnimationContent9(contentImg9)
  hoverAnimationContent9(contentList9)

  function hoverAnimationContent10(hoverContent){
    $(hoverContent).hover(
        function() {
          $(contentImg10).addClass("hover-animation")
          $(contentList10).addClass("hover-animation")
        },
        function() {
          $(contentImg10).removeClass("hover-animation")
          $(contentList10).removeClass("hover-animation")
        }
    )
  }

  hoverAnimationContent10(contentImg10)
  hoverAnimationContent10(contentList10)

  function hoverAnimationContent11(hoverContent){
    $(hoverContent).hover(
        function() {
          $(contentImg11).addClass("hover-animation")
          $(contentList11).addClass("hover-animation")
        },
        function() {
          $(contentImg11).removeClass("hover-animation")
          $(contentList11).removeClass("hover-animation")
        }
    )
  }

  hoverAnimationContent11(contentImg11)
  hoverAnimationContent11(contentList11)

  function hoverAnimationContent12(hoverContent){
    $(hoverContent).hover(
        function() {
          $(contentImg12).addClass("hover-animation")
          $(contentList12).addClass("hover-animation")
        },
        function() {
          $(contentImg12).removeClass("hover-animation")
          $(contentList12).removeClass("hover-animation")
        }
    )
  }

  hoverAnimationContent12(contentImg12)
  hoverAnimationContent12(contentList12)

  //トップ画面のスライドショーの処理
  $("#js-slide img:nth-child(n+2)").hide();
  setInterval(function() {
    $("#js-slide img:first-child").fadeOut(2000);
    $("#js-slide img:nth-child(2)").fadeIn(2000);
    $("#js-slide img:first-child").appendTo("#js-slide");
  }, 6000);

  //line-upのスライドショー処理
  $("#line-up-slide img:nth-child(n+2)").hide();
  setInterval(function() {
    $("#line-up-slide img:first-child").fadeOut(1000);
    $("#line-up-slide img:nth-child(2)").fadeIn(1000);
    $("#line-up-slide img:first-child").appendTo("#line-up-slide");
    $(".line-up__content__list__link__dot__list:first-child").toggleClass("is-current")
    $(".line-up__content__list__link__dot__list:last-child").toggleClass("is-current");
  }, 5000);

  //mainvisualまでスクロールしたらheader画面を表示する処理
  $(function() {
    const nav = $(".header");
    $(window).scroll(function () {
    const mainVisual = $("#main-visual");
    const mainVisualTop = mainVisual.offset();
    if ($(this).scrollTop() > mainVisualTop.top) {
    nav.addClass("is-visible");
    } else {
    nav.removeClass("is-visible");
    }
  });
  });

  //mainvisualまでスクロールしたら画面右下のbottom-viewを表示する処理
  $(function() {
    const nav = $('.bottom-view');
    $(window).scroll(function () {
    const windowHeight = $(window).height();
    const content = $("#content");
    const test =content.offset();
    if ($(this).scrollTop() > windowHeight) {
    nav.addClass("is-visible-top");
    if ($(this).scrollTop() > test.top - windowHeight) {
    nav.removeClass("is-visible-top")
    }
    } else {
    nav.removeClass("is-visible-top");
    }
  });
  });

  //一定の位置までスクロールしたらlogo画像を消す処理
  $(function() {
    const navTitle = $(".logo");
    $(window).scroll(function () {
    const scrollContent = $(".content__container__contents__more");
    const scrollContentTop = scrollContent.offset();
    if ($(this).scrollTop() > scrollContentTop.top) {
    navTitle.removeClass("nav__title__link__img");
    } else {
    navTitle.addClass("nav__title__link__img");
    }
  });
  });

  //一定の位置までスクロールしたら表示されていなかったlogo画像に切り替える処理
  $(function() {
    const navTitle = $(".logo-opacity");
    $(window).scroll(function () {
    const scrollContent = $(".content__container__contents__more");
    const scrollContentTop = scrollContent.offset();
    if ($(this).scrollTop() > scrollContentTop.top) {
    navTitle.removeClass(".nav__title__link__img__yado__opacity")
    navTitle.addClass("nav__title__link__img__yado");
    } else {
    navTitle.removeClass("nav__title__link__img__yado");
    navTitle.addClass("nav__title__link__img__yado__opacity")
    }
  });
  });

  //一定の位置までスクロールしたらheaderのbackground-colorを変えるクラスを追加する処理
  $(function() {
    const headerColor = $(".header");
    $(window).scroll(function () {
    const scrollContent = $(".content__container__contents__more");
    const scrollContentTop = scrollContent.offset();
    if ($(this).scrollTop() > scrollContentTop.top) {
      headerColor.addClass("header-color")
    } else {
      headerColor.removeClass("header-color")
    }
  });
  });

  $(function(){
    $(window).scroll(function(){
      $(".fadein").each(function(){
        const position = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if(scroll > position - windowHeight + 200){
          $(this).addClass("active");
        }
      })
    })
  })

})