let nextID = 0;

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

$("#items").sortable({
    handle: ".handle"
});

$("#deleteComplete").on("click",function(){
    $(".complete label.checkbox").each(function(){
        if ($(this).is(':checked')) {
            $(this).remove();
        }
    });
});

function addItem(groupid){
    let cntl = document.getElementById('add1');
    let list = cntl.getAttribute('data-list');
    groupid = 'group' + list.substring(4,5);

    let myname = $(".myinput").val();
    $("#"+ groupid).append("<div class='row'><span contenteditable='true'>"+ myname +"</span><span><label class=\"checkbox\"><input class=\"complete\" type='checkbox'><i class=\"trashcan fas fa-trash icons\"></i><i class=\"handle fas fa-arrows-alt\"></i></span></div>");
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

$("#lists").sortable({
    handle: ".handle"
});

function createNewList(){
    nextID++;
    let num = nextID;
    let mylist = $("#new-list-input").val();
    $("#lists").append("<div class='List' id='list" + num + "' onclick='setActive(this.id)'><span>"+ mylist +"</span><span><i class=\"far fa-times-circle list-delete\"></i><i " +
        "class=\"handle fas fa-arrows-alt\"></i></span></div>");
    $("#new-list-input").val("");
    $(".list-delete").click(function(){
        $(this).parent().animate({
            opacity: 0,
        }, 1000, function(){
            $(this).parent().remove();
        });
    });
    $("#items").append("<div class='group' id='group" + num + "'></div>");

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
