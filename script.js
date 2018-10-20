$(".myinput").on("keydown", function(event){
    if(event.which === 13){
        addItem();
    }
});

$("#new-list-input").on("keydown", function(event){
    if(event.which === 13){
        createNewList();
    }
});

$(".container").sortable({
    handle: ".handle"
});

function addItem(){
    let cntl = document.getElementById('add1');
    let list = cntl.getAttribute('data-list');
    let groupid = 'group' + list.substring(4,5);

    let myname = $(".myinput").val();
    $("#"+ groupid).append("<div class='row'><span contenteditable='true'>"+ myname +"</span><span><input type='checkbox'><i " +
        "class=\"trashcan fas fa-trash icons\"></i><i class=\"handle fas fa-arrows-alt\"></i></span></div>");
    $(".myinput").val("");
    $(".icons").click(function(){
        $(this).parent().parent().animate({
            opacity: 0,
            left: "+=50"
        }, 1000, function(){
            $(this).remove();
        });
    });
}

function clearList() {
    $(".row").animate({
        opacity: 0,
        left: "+=50"
        }, 1000, function(){
        $(this).remove();
    });
}

$(".listNames").sortable({
    handle: ".handle"
});

function createNewList(){
    let num = $("#lists").children().length;
    let mylist = $("#new-list-input").val();
    $("#lists").append("<div class='List' id='list" + num + "' onclick='setActive(this.id)'><span>"+ mylist +"</span><span class='icons'><i class=\"far fa-times-circle\"></i><i " +
        "class=\"handle fas fa-arrows-alt\"></i></span></div>");
    $("#new-list-input").val("");
    $(".icons").click(function(){
        $(this).parent().animate({
            opacity: 0,
        }, 1000, function(){
            $(this).remove();
        });
    });
    $("#items").append("<div class='group' id='group" + num + "'></div>");

}
class Data {
    static saveList(listID, list){
        let listString = JSON.stringify(list);
        localStorage.setItem(listID, listString);
    };
    static getList(listID){
        let list = localStorage.getItem(listID);
        return JSON.parse(list);
    };
    static removeList(listID){
        localStorage.removeItem(listID);
    };
}

function setActive(list){
    let cntl = document.getElementById('add1');
    let groupid = 'group' + list.substring(4,5);
    cntl.setAttribute('data-list', list);
    $('.group').css('display', 'none');
    $('#'+ groupid).css('display', 'inline');
    $('.List').css('background-color', '#0015FF');
    $('#'+ list).css('background-color', '#0CA0FF');
}

/*function displayCurrentList() {
    document.getElementById('current-list-name').innerHTML = lists.currentList.name;
}
    Data.saveList(newList.id, newList);

    function changeList(){
        lists.currentList = Data.getList(newList.id);
        console.log(lists.currentList.id)
    }

    displayCurrentList();
    console.log(newList.id);*/
