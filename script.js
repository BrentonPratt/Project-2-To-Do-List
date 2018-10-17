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
    let myname = $(".myinput").val();
    $(".container").append("<div class='row'><span contenteditable='true'>"+ myname +"</span><span class='icons'><i class=\"trashcan fas fa-trash\"></i><i class=\"handle fas fa-arrows-alt\"></i></span></div>");
    $(".myinput").val("");
    $(".icons").click(function(){
        $(this).parent().animate({
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

function createNewList(){
    let mylist = $("#new-list-input").val();
    $(".listNames").append("<div class='List'><span contenteditable='true'>"+ mylist +"</span><span class='icons'><i class=\"far fa-times-circle\"></i><i class=\"handle fas fa-arrows-alt\"></i></span></div>");
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

let lists = {
    currentList: {
        name: 'Honey Do',
        tasks: [
            {
                text: 'clean bathroom',
                complete: false,
            }
        ]
    }
};

function displayCurrentList() {
    document.getElementById('current-list-name').innerHTML = lists.currentList.name;
}
    lists [newList.id] = newList;
    lists.currentList = newList;

    Data.saveList(newList.id, newList);
    lists.currentList = Data.getList(newList.id);

    displayCurrentList();
    console.log(newList.id);
