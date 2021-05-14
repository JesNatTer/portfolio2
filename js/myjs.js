(function () {
  var scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    scrollFromAnywhere: true,
    smartphone:{
      smooth:true,
      scrollFromAnywhere:true,
    },
    tablet:{
      smooth:true,
      scrollFromAnywhere:true,
    },
  });
})();
