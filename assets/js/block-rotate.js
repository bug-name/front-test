let block = $('.block-rotate__container');
let birds1 = block.children('.birds1');
let birds2 = block.children('.birds2');
let blockWidth = block.parent().width();
let blockCoords;
let xCoord;
let blockRotateVal;

$("body").mousemove(function(e) {
    blockCoords = block.get(0).getBoundingClientRect();
    xCoord = e.clientX - blockCoords.left - blockWidth / 2;
    blockRotateVal = xCoord * 0.05;
    block.css('transform', 'rotateY('+blockRotateVal+'deg)');
    birds1.css('transform', 'translateX('+ blockRotateVal / 2 +'px)');
    birds2.css('transform', 'translateX('+ blockRotateVal / -2 +'px)');
})
