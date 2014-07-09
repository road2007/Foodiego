// JavaScript Document
// Stores all the functions allowing dragging and dumping action

<script>

function appStatus(msg){
    document.getElementById('app_status').innerHTML = msg;
}

function drag_start(e) {
    e.dataTransfer.dropEffect='move';
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

    if (target_id == "dish_img")
        document.getElementById("dish_list").appendChild(data);
    else if (target_id == "trash_img")
        document.getElementById("trash_list").appendChild(data);
    else if (ev.dataTransfer.getData("category") == ev.target.id) 
        ev.target.appendChild(data);

</script>