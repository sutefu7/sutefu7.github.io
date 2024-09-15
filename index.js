function getLocation() {
	navigator.geolocation.getCurrentPosition(position => {
		const latitude = document.getElementById("latitude");
		const longitude = document.getElementById("longitude");
		const locations = document.getElementById("locations");
		
		latitude.value = position.coords.latitude;
		longitude.value = position.coords.longitude;
		locations.value = latitude.value + ", " + longitude.value;
		
		// 周辺地図を更新
		const checkMap = document.getElementById("checkMap");
		//checkMap.src="https://www.google.com/maps?output=embed&z=15&ll=" + locations.value; // 左上に住所が表示されないみたい
		checkMap.src="https://www.google.com/maps?output=embed&z=15&q=" + locations.value;
	});
}

function splitAddress() {
	const full_address = document.getElementById("full_address").value;
	
	const zip_code = document.getElementById("zip_code");
	const prefecture = document.getElementById("prefecture");
	const city = document.getElementById("city");
	const address = document.getElementById("address");
	
	if (full_address.match(/〒\d{3}-\d{4}/) != null) {
		zip_code.value = full_address.substr(0, 9);
		address.value = full_address.substr(9 + 1); // 郵便コードと分割用半角スペースを飛ばす
	}
	else {
		address.value = full_address;
	}
	
	if (address.value.match(/[都道府県]/) != null) {
		const index = address.value.match(/[都道府県]/).index + 1;  // 都道府県も含めたいため１文字後ろに調整
		prefecture.value = address.value.substr(0, index);          // substr, インデックス位置、何文字文か
	}
	
	if (address.value.match(/[市区町村]/) != null) {
		const startIndex = address.value.match(/[都道府県]/).index + 1;  // 都道府県以降にしたいため１文字後ろに調整
		const endIndex = address.value.match(/[市区町村]/).index + 1;    // 市区町村も含めたいため１文字後ろに調整
		city.value = address.value.substring(startIndex, endIndex);      // substring, 開始インデックス位置、終了インデックス位置
	}
}

function createLinks() {
	
	// 各リンクにある全リンク集を全削除
	const linkNames = ["links1", "links2", "links3"];
	for (let i = 0; i < linkNames.length; i++) {
		const linkName = linkNames[i];
		const link = document.getElementById(linkName);
		while (link.firstChild) {
			link.removeChild(link.lastChild);
		}
	}
	
	// ---------------------------------------------------------------------------
	// link1
	const links1 = document.getElementById("links1");
	const full_address = document.getElementById("full_address").value;
	
	// 住所＋キーワードで検索
	let categories = [ "天気予報", "警報・注意報", "花粉情報", "黄砂情報", "災害情報", "防災情報", "犯罪情報", "ゴミ　曜日", "ゴミ　分別" ];
	categories.map(category => {
		const anchor1 = document.createElement("a");
		anchor1.href = "https://www.google.com/search?q=" + full_address + "　" + category;
		anchor1.innerText = category;
		anchor1.target = "_blank";
		
		const li1 = document.createElement("li");
		li1.appendChild(anchor1);
		
		links1.appendChild(li1);
	});
	
	// ---------------------------------------------------------------------------
	// link2
	const links2 = document.getElementById("links2");
	// const address = document.getElementById("address").value;
	const prefecture = document.getElementById("prefecture").value;
	const city = document.getElementById("city").value;
	
	// 都道府県と市区町村で、分けて検索
	categories = [
		`${prefecture}　ニュース`, `${prefecture}${city}　ニュース`,
		`${prefecture}　イベント情報`, `${prefecture}${city}　イベント情報`,
	];
	
	categories.map(category => {
		const anchor1 = document.createElement("a");
		anchor1.href = "https://www.google.com/search?q=" + category;
		anchor1.innerText = category;
		anchor1.target = "_blank";
		
		const li1 = document.createElement("li");
		li1.appendChild(anchor1);
		
		links2.appendChild(li1);
	});
	
	
	// ---------------------------------------------------------------------------
	// link3
	const links3 = document.getElementById("links3");
	
	// グーグルマップを開いて、その中で検索
	categories = [ "周辺地図" ];
	categories.map(category => {
		const anchor1 = document.createElement("a");
		anchor1.href = "https://www.google.com/maps/search/" + full_address;
		anchor1.innerText = category;
		anchor1.target = "_blank";
		
		const li1 = document.createElement("li");
		li1.appendChild(anchor1);
		
		links3.appendChild(li1);
	});
	
	categories = [ "空港", "電車", "バス", "ホテル・旅館", "ガソリンスタンド", "病院", "警察", "飲食店", "ゆうちょ銀行", "市役所", "運転免許センター" ];
	categories.map(category => {
		const anchor1 = document.createElement("a");
		anchor1.href = "https://www.google.com/maps/search/" + `${prefecture}${city}　${category}`;
		anchor1.innerText = category;
		anchor1.target = "_blank";
		
		const li1 = document.createElement("li");
		li1.appendChild(anchor1);
		
		links3.appendChild(li1);
	});
}
