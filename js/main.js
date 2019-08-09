$(function() {

    var zeroFormat = function(x) {
        return x.toString().padStart(2, '0');
    };

    var dayOfWeek = function(x) {
        switch (x) {
            case 0: return "(日)"; break;
            case 1: return "(月)"; break;
            case 2: return "(火)"; break;
            case 3: return "(水)"; break;
            case 4: return "(木)"; break;
            case 5: return "(金)"; break;
            case 6: return "(土)"; break;
        }
    };

    var items = ['エアコンの停止', '部屋の電気', '窓の鍵閉め', '玄関の鍵閉め', '電気のブレーカー', 'ガスの元栓', '水道の元栓'];
    for (var i = 0; i < items.length; i++) {

        // 項目名
        var index = (i + 1).toString();
        $('#lbl' + index + 'a').text(items[i]);

        // チェック状態
        var checked = Cookies.get('chk' + index);
        if (checked == undefined || checked == 'false') {
            checked = false;
        } else {
            checked = true;
        }
        
        $('#chk' + index).prop('checked', checked).change();

        // 更新日
        var updatedAt = Cookies.get('lbl' + index + 'b');
        if (updatedAt == 'undefined') {
            updatedAt = '　　　　　　　　';
        }

        $('#lbl' + index + 'b').text(updatedAt);
        $('#lbl' + index + 'b').css('color', 'gray');

        // イベントの購読。On の場合、更新日時を表示する
        $('#chk' + index).change(function() {
            var now = new Date();
            var d = '' + now.getFullYear() + '/' +
                zeroFormat((now.getMonth() + 1)) + '/' +
                zeroFormat(now.getDate()) + ' ' +
                dayOfWeek(now.getDay()) + ' ' +
                zeroFormat(now.getHours()) + ':' +
                zeroFormat(now.getMinutes()) + ':' +
                zeroFormat(now.getSeconds());

            // コントロール名からナンバーのみ抽出して、対応するラベルにセット
            // （chk1 から 1 のような）
            var index = $(this).prop('id').substr(-1, 1);
            $('#lbl' + index + 'b').text(d);

            // 切り替えるたびに、クッキーに保存
            Cookies.set('chk' + index, $(this).prop('checked'), {expires: 30});
            Cookies.set('lbl' + index + 'b', d, {expires: 30});
        });
        
    }
});