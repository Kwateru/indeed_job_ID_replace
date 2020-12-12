$(function(){

    var input = $('.input');
    var button = $('.btn');
    var result = $('.seikei');

    button.on('click', function(){

        var inputVal = input.val();

        // textareaの内容を改行で分割して配列に格納
        var inputValArray = inputVal.split('\n');

        // 各行に対して処理する
        var display = "";
        for(i = 0; i < inputValArray.length; i++){
            display += '"' + inputValArray[i] + '"' + "\n";
        }

        // 改行を「 OR 」に置換する
        var str = display.replace(/\r?\n/g, ' OR ')
        result.val('refnum:(' + str + ')');

        // copyする
        result.select();
    })

});
