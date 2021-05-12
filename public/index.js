document.onclick = function (e) {
    if (window.event) {
        e = event.srcElement;
    }
    else {
        e = e.target;
    }

    if (e.className && e.parentNode.className == "delete") {
        e.parentNode.parentNode.parentNode.remove();
    }
    if (e.className && e.parentNode.className == "edit") {
        if (e.innerHTML == '') {
            e.innerHTML = '';
            makeEdit(e);
        }


        else {
            console.log(e.innerHTML);
            e.innerHTML = '';
            saveEdits(e);
        }
    }

}

function makeEdit(targ) {
    var editElem = targ.parentElement.parentElement.parentElement.getElementsByClassName("status")[0];
    console.log(editElem);
    editElem.setAttribute("contenteditable", "true");
    editElem.style.backgroundColor = "lightblue";
    editElem.focus();
}
function saveEdits(targ) {
    console.log(targ);
    var editElem = targ.parentElement.parentElement.parentElement.getElementsByClassName("status")[0];
    console.log(editElem);
    var userVersion = editElem.innerHTML;
    localStorage.setItem(editElem.id, userVersion);
    editElem.toggleAttribute("contenteditable");
    editElem.style.backgroundColor = "white";
}
function loadEdits() {

    var statuses = document.getElementsByClassName("status");
    for (item of statuses) {
        if (localStorage.getItem(item.id))
            item.innerHTML = localStorage.getItem(item.id);
    }
    if (localStorage.userEdits != null)
        document.getElementById("edit").innerHTML = localStorage.userEdits;
}
