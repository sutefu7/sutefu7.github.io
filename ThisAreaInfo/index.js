
/* 「今いる場所周辺」選択欄の文言クリア */
function clearlblAutoPlace() {
    document.getElementById("txtThisPlaceStr").value = "";
}

/* 「今いる場所周辺」選択欄の文言更新 */
function updatelblAutoPlace() {
    const lblAutoPlace = document.getElementById("lblAutoPlace");
    const txtThisPlaceStr = document.getElementById("txtThisPlaceStr");
    
    if (txtThisPlaceStr.value === "") {
        alert("文言を入力してください。");
        return;
    }
    
    lblAutoPlace.textContent = txtThisPlaceStr.value;
}



/* 「都道府県」、「市区町村」入力欄をクリア */
function clearSampleData() {
    document.getElementById("txtPrefecture").value = "";
    document.getElementById("txtCity").value = "";
}

/* 「都道府県」、「市区町村」入力欄にサンプルデータをセット */
function setSampleData() {
    document.getElementById("txtPrefecture").value = "石川県";
    document.getElementById("txtCity").value = "野々市市";
}



/* 設定情報をもとに、リンク生成 */
function generateLinks() {
    
    const isAutoPlace = document.getElementById("rdoAutoPlace").checked;
    let targetPlace = document.getElementById("lblAutoPlace").textContent;
    
    if (!isAutoPlace) {
        const prefecture = document.getElementById("txtPrefecture").value;
        const city = document.getElementById("txtCity").value;
        
        if (prefecture === "") {
            alert("都道府県を入力してください。");
            return;
        }
        
        if (city === "") {
            alert("市区町村を入力してください。");
            return;
        }
        
        targetPlace = prefecture + city;
    }
    
    generateMapLinks(targetPlace);
    generateDisasterLinks(targetPlace);
    generateTransportationLinks(targetPlace);
    generateThisAreaLinks(targetPlace);
}

/* 建物カテゴリーのリンク生成 */
function generateMapLinks(targetPlace) {
    
    const ulRoot = document.getElementById("ulMap");
    ulRoot.replaceChildren(); // 子要素クリア
    
	let categories = [
	    "地図",
	    "天気予報",
	    "飲食店",
	    "宿泊施設",
	    "病院",
	    "警察",
	    "ゆうちょ銀行",
	    "市役所",
	    "運転免許センター",
	    "空港",
	    "ガソリンスタンド"
	];
	
	categories.map(category => {
		const anchor1 = document.createElement("a");
		anchor1.href = "https://www.google.com/search?q=" + targetPlace + "　" + category;
		anchor1.innerText = category;
		anchor1.target = "_blank";
		
		const li1 = document.createElement("li");
		li1.appendChild(anchor1);
		
		ulRoot.appendChild(li1);
	});
}

/* 災害カテゴリーのリンク生成 */
function generateDisasterLinks(targetPlace) {
    
    const ulRoot = document.getElementById("ulDisaster");
    ulRoot.replaceChildren(); // 子要素クリア
    
	let categories = [
	    "天気予報",
	    "地震",
	    "台風",
	    "花粉",
	    "黄砂",
	    "避難場所",
	    "災害情報",
	    "防災情報",
	    "犯罪情報",
	    "ハザードマップ"
	];
	
	categories.map(category => {
		const anchor1 = document.createElement("a");
		anchor1.href = "https://www.google.com/search?q=" + targetPlace + "　" + category;
		anchor1.innerText = category;
		anchor1.target = "_blank";
		
		const li1 = document.createElement("li");
		li1.appendChild(anchor1);
		
		ulRoot.appendChild(li1);
	});
}

/* 交通機関カテゴリーのリンク生成 */
function generateTransportationLinks(targetPlace) {
    
    const ulRoot = document.getElementById("ulTransportation");
    ulRoot.replaceChildren(); // 子要素クリア
    
	let categories = [
	    "飛行機",
	    "新幹線",
	    "電車",
	    "周辺バス",
	    "高速バス",
	    "夜行バス",
	    "高速道路情報"
	];
	
	categories.map(category => {
		const anchor1 = document.createElement("a");
		anchor1.href = "https://www.google.com/search?q=" + targetPlace + "　" + category;
		anchor1.innerText = category;
		anchor1.target = "_blank";
		
		const li1 = document.createElement("li");
		li1.appendChild(anchor1);
		
		ulRoot.appendChild(li1);
	});
}

/* 地域カテゴリーのリンク生成 */
function generateThisAreaLinks(targetPlace) {
    
    const ulRoot = document.getElementById("ulThisArea");
    ulRoot.replaceChildren(); // 子要素クリア
    
	let categories = [
	    "ニュース",
	    "イベント情報",
	    "地域情報",
	    "ゴミ　曜日",
	    "ゴミ　分別",
	    "観光地",
	    "名物料理",
	    "名産品",
	    "有名なもの"
	];
	
	categories.map(category => {
		const anchor1 = document.createElement("a");
		anchor1.href = "https://www.google.com/search?q=" + targetPlace + "　" + category;
		anchor1.innerText = category;
		anchor1.target = "_blank";
		
		const li1 = document.createElement("li");
		li1.appendChild(anchor1);
		
		ulRoot.appendChild(li1);
	});
}
