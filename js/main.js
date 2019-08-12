
var toEnglish = function() {
    Cookies.set('isEnglish', true, {expires: 30});
    location.reload();
};

var toJapanese = function() {
    Cookies.set('isEnglish', false, {expires: 30});
    location.reload();
};

$(function() {
    
    var isEnglish = Cookies.get('isEnglish');
    if (isEnglish == undefined || isEnglish == 'false') {
        isEnglish = false;
    } else {
        isEnglish = true;
    }

    if (isEnglish) {
        document.title = "Closed door confirmation";
        document.getElementById('title').textContent = "Closed door confirmation";
        document.getElementById('description').textContent = "On / Off data is stored and displayed as browser cookies (30 days). Please switch it manually.";
        document.getElementById('normal').textContent = "Normal:";
        document.getElementById('vacation').textContent = "Long vacation:";
    }

    var zeroFormat = function(x) {
        return x.toString().padStart(2, '0');
    };

    var weeks = ['(日)', '(月)', '(火)', '(水)', '(木)', '(金)', '(土)'];
    if (isEnglish) {
        weeks = ['(Sun)', '(Mon)', '(Tue)', '(Wed)', '(Thu)', '(Fri)', '(Sut)'];
    }

    var dayOfWeek = function(x) {
        return weeks[x];
    };

    var items = ['エアコンの停止', '部屋の電気', '窓の鍵閉め', '玄関の鍵閉め', '電気のブレーカー', 'ガスの元栓', '水道の元栓'];
    if (isEnglish) {
        items = ['Air conditioner stop', 'Room electricity', 'Window lock', 'Lock the entrance', 'Electric breaker', 'Gas tap', 'Water tap'];
    }

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