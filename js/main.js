$(function() {

    var items = ['エアコンの停止', '部屋の電気', '窓の鍵閉め', '玄関の鍵閉め'];
    for (var i = 0; i < items.length; i++) {

        // 項目名
        var index = (i + 1).toString();
        $('#lbl' + index + 'a').text(items[i]);

        // チェック状態
        var checked = Cookies.get('chk' + index);
        if (checked == undefined) {
            checked = false;
        }

        $('#chk' + index).prop('checked', checked).change();

        // 更新日
        var updatedAt = Cookies.get('lbl' + index + 'b');
        if (updatedAt == undefined) {
            updatedAt = '　　　　　　　　';
        }

        $('#lbl' + index + 'b').text(updatedAt);
        $('#lbl' + index + 'b').css('color', 'gray');

        // イベントの購読。On の場合、更新日時を表示する
        $('#chk' + index).change(function() {
            var now = new Date();
            var d = '' + now.getFullYear() + '/' +
                (now.getMonth() + 1).toString().padStart(2, '0') + '/' +
                now.getDate().toString().padStart(2, '0') + ' ' +
                now.getHours().toString().padStart(2, '0') + ':' +
                now.getMinutes().toString().padStart(2, '0') + ':' +
                now.getSeconds().toString().padStart(2, '0');

            // コントロール名からナンバーのみ抽出して、対応するラベルにセット
            // （chk1 から 1 のような）
            var index = $(this).prop('id').substr(-1, 1);
            $('#lbl' + index + 'b').text(d);

            // 切り替えるたびに、クッキーに保存
            Cookies.set('chk' + index, $(this).prop('checked'));
            Cookies.set('lbl' + index + 'b', $(this).prop('text'));
        });
        
    }
});