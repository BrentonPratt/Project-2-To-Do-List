$(".myinput").on("keydown", function(event){
    if(event.which === 13){
        addItem();
    }
});

$(".container").sortable({
    handle: ".handle"
});

$('.row').addClass("graytext");

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
    $(".row").remove();
}

let nextID = 0;
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

function createNewList() {
    let newList = {
        id: nextID++,
        name: document.getElementById('new-list-input').value,
        tasks: []
    };
    lists [newList.id] = newList;
    lists.currentList = newList;

    Data.saveList(newList.id, newList.name);

    displayCurrentList();
}