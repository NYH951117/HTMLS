// alert("试试,外部文件");
// window.alert("试试,运行成功");

window.onload = function() {
    var box1 = document.getElementById("box1");
    document.onmousemove = function(event) {
        event = event || window.event;
        // var left = event.clientX;
        // var top = event.clientY;
        var left = event.pageX;
        var top = event.pageY;

        box1.style.left = left + "px";
        box1.style.top = top + "px";

    }
}