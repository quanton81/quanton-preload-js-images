var preLoadImages = function (imageSrcs) {
    this.images = [];
    this.preload = function (srcs, imgs) {
        var img;
        for (var i = 0; i < srcs.length; i++) {
            img = new Image();
            img.src = srcs[i];
            imgs.push(img);
        }
    };
    this.preload(imageSrcs, images);
};
(function() {
    var imageSrcs = [
        "http://placehold.it/350x150", 
        "http://placehold.it/350x150", 
        "http://placehold.it/350x150", 
        "http://placehold.it/350x150"];
    preLoadImages(imageSrcs);
})();
