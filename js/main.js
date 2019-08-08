$(function() {

    var items = ['エアコンの停止', '部屋の電気', '窓の鍵閉め', '玄関の鍵閉め'];
    for (var i = 0; i < items.length; i++) {

        // 項目名
        var index = (i + 1).toString();
        $('#lbl' + index + 'a').text(items[i]);
        
        // イベントの購読。On の場合、更新日時を表示する
        $('#chk' + index).change(function() {
            var isChecked = $(this).prop('checked');
            if (isChecked) {
                
                var now = new Date();
                var d = '' + now.getFullYear() + '/' +
                    (now.getMonth() + 1) + '/' +
                    now.getDate() + ' ' +
                    now.getHours() + ':' +
                    now.getMinutes() + ':' +
                    now.getSeconds();

                // chk1 から 1 のようなナンバーのみ抽出して、対応するラベルにセット
                var index = $(this).prop("id").substr(-1, 1);
                $('#lbl' + index + 'b').text(d);
            }
        });

    }
});