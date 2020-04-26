
// var cPushArray = new Array();
// var cStep = -1;



// function drawImage() {
//     var img = new Image();
//     img.addEventListener('load', function() {
//         contextReal.drawImage(img, 0, 0,1280, 720);
//     }, false);

//     img.src = 'images/blankWhite.jpg';
//     }
    
// function cPush() {
//     cStep++;
//     if (cStep < cPushArray.length) { cPushArray.length = cStep; }
//     cPushArray.push(document.getElementById('canvas-real').toDataURL());
//     document.title = cStep + ":" + cPushArray.length;
// }
// function cUndo() {
//     if (cStep > 0) {
//         cStep--;
//         var canvasPic = new Image();
//         canvasPic.src = cPushArray[cStep];
//         canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0, 1280, 720); }
//         document.title = cStep + ":" + cPushArray.length;
//     }
// }
// function cRedo() {
//     if (cStep < cPushArray.length - 1) {
//         cStep++;
//         var canvasPic = new Image();
//         canvasPic.src = cPushArray[cStep];
//         canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0, 1280, 720); }
//         document.title = cStep + ":" + cPushArray.length;
//     }
// }