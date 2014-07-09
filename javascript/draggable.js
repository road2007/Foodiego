// JavaScript Document
// Stores all the functions allowing dragging and dumping action
/*var isRecycled = false;
function appStatus(msg){
    document.getElementById('app_status').innerHTML = msg;
}
// "e" represents the drag event in question for each drag function
function drag_start(e) {
    appStatus("Dragging the "+e.target.getAttribute('id'));
    e.dataTransfer.dropEffect='move';
    e.dataTransfer.setData("text/plain", e.target.getAttribute('id'));
}
function drag_enter(e) {
    appStatus("You are dragging over the "+e.target.getAttribute('title'));
}
function drag_leave(e) {
    appStatus("You left the "+e.target.getAttribute('title'));
}
function drag_drop(e) {
    var element = e.dataTransfer.getData("Text");
    appStatus("Dropped "+element+" into the "+e.target.getAttribute('title'));
    e.target.appendChild(document.getElementById(element));
    isRecycled = true;
    //document.getElementById(element).removeAttribute("draggable");
}
function drag_end(e) {
    var status = document.getElementById('app_status');
    if(isRecycled == false){
        appStatus("You let the "+e.target.getAttribute('id')+" go.");
    }
}*/

function appStatus(msg){
    document.getElementById('app_status').innerHTML = msg;
}

function drag_start(e) {
    e.dataTransfer.dropEffect='copy';
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.setData("category", ev.target.getAttribute("category"));
}

function drop(ev) {
    ev.preventDefault();
    var id_name = ev.dataTransfer.getData("id");
    var data = document.getElementById(id_name);
    var target_id = ev.target.id;
    document.getElementById('app_status').innerHTML = target_id;

    if (target_id == "dish_img" || target_id == "dish_list")
        document.getElementById("dish_list").appendChild(data);
    else if (target_id == "trash_img" || target_id == "trash_list")
        document.getElementById("trash_list").appendChild(data);
    //else put_back(ev);
}

function put_back(ev){
    var cat_list = document.getElementById(ev.target.getAttribute("category"));
    var data = document.getElementById(ev.target.id);
    //appStatus(ev.target.getAttribute("category"));
    cat_list.appendChild(data);
}