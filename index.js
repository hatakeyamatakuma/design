const test = $(".slider__text__left__link__arrow")
      hoge = $(".slider__text__right__link")
      mainVisual = $(".main-visual__img__text__bottom__inner")
      interview = $(".interview__text__bottom__inner")
      contentView = $(".content__container__text__view__flex")
      contentlist = $(".content__container__contents__list__item__box__inner")
      subVisual = $(".sub-visual__img__content__middle__right__inner")
      lineUp = $(".line-up__text__view__arrow")
      lineUpitem = $(".line-up__content__list__item__inner")
      comments = $(".comments__view__inner")
      mainVisualImg = $(".main-visual__img__content__link")
      interviewImg = $(".interview__img__link")
      contentImg = $(".content__container__contents__list__item__link")
      lineUpImg = $(".line-up__content__list__link")
      commentsImg = $(".comments__content__list__item__link")
      contentTitle = $(".content__container__contents__more__link")
      navTitle = $(".nav__left__title__link")
      interviewLink = $(".interview__text__hashtag__link")
      mainVisualHashtag = $(".main-visual__img__text__hashtag__text")
      contentHashtag = $(".content__container__contents__list__item__box__hashtag__link")
      bottomView = $(".bottom-view__link")

$(function(){
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

  hoverAnimation(test)
  hoverAnimation(hoge)
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

  hoverAnimationMainvisual(mainVisualImg)
  hoverAnimationMainvisual(mainVisualHashtag)

  $("#js-slide img:nth-child(n+2)").hide();
  setInterval(function() {
    $("#js-slide img:first-child").fadeOut(2000);
    $("#js-slide img:nth-child(2)").fadeIn(2000);
    $("#js-slide img:first-child").appendTo("#js-slide");
  }, 6000);

  $("#line-up-slide img:nth-child(n+2)").hide();
  setInterval(function() {
    $("#line-up-slide img:first-child").fadeOut(1000);
    $("#line-up-slide img:nth-child(2)").fadeIn(1000);
    $("#line-up-slide img:first-child").appendTo("#line-up-slide");
    $(".line-up__content__list__link__dot__list:first-child").toggleClass("is-current")
    $(".line-up__content__list__link__dot__list:last-child").toggleClass("is-current");
  }, 5000);

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