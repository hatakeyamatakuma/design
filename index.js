//使用する変数を定義
const sliderArrow = $(".slider__text__left__link__arrow")
      sliderLink = $(".slider__text__right__link")
      navTitle = $(".nav__left__title__link")
      mainVisual = $(".main-visual__img__text__bottom__inner")
      mainVisualImg = $(".main-visual__img__content__link")
      mainVisualHashtag = $(".main-visual__img__text__hashtag__text")
      interview = $(".interview__text__bottom__inner")
      interviewImg = $(".interview__img__link")
      interviewLink = $(".interview__text__hashtag__link")
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
  hoverAnimation(mainVisual)
  hoverAnimation(interview)
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

})