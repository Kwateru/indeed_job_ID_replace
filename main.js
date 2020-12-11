$(function(){

    var input = $('.input');
    var button = $('.btn');
    var result = $('.seikei');

    button.on('click', function(){

        var inputVal = input.val();

        var str = inputVal.replace(/\r?\n/g, ' OR ');
        result.val('refnum:(' + str + ')');

        // copyする
        result.select();
    })




});
