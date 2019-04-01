
# 私のサイト（仮）

ASP.NET Core 3 preview3 / Blazor を利用したPWA アプリのサンプルです。

## 注意

多分ですが、Blazor(ASP.NET Core hosted) プロジェクトでもなく、Blazor(Server-side in ASP.NET Core) プロジェクトでもなく、Blazor プロジェクトだけが、GitHub でも動くのではと思います（ASP.NET Core サーバーが要らないため）。

## サンプルアプリ、電話音再生ツール

(https://sutefu7.github.io/)[https://sutefu7.github.io/]

上記のサイトにアクセスすると、ブラウザ上で Blazor アプリが実行されます。各 dll ファイルがロードされるのを見たい方は、デベロッパーツールのネットワークタブなどを開きつつ、サイトを開いてください。

## 参考資料

Issue with publishing Blazor app to repository's Github Pages. #942

(https://github.com/aspnet/Blazor/issues/942)[https://github.com/aspnet/Blazor/issues/942]

引用＆和訳＆補足追記

> 再現手順:
> 
> テンプレートを利用したクライアントアプリを作成します.
> "dotnet publish -c Release" して、あなたのリポジトリの docs フォルダにアップロードします.
> docs フォルダを GitHub Pages にするために設定します.
> アンダースコア記号から始まる静的リソースを取得するための.nojekyllという空ファイルを追加します（_frameworkフォルダーにあるリソースが必要です）
> 作成したリポジトリサイトに移動します。メインページが正常に読み込まれました.

上記を参考にしました。

1. 例えばここ (WebApplication1/bin/Release/netstandard2.0/publish/WebApplication1/dist)
2. 1.のディレクトリにあるフォルダやファイルを丸ごと GitHub にアップロードします。自分の場合は、すでに GitHub Pages になっているリポジトリにアップロードしました。
3. 例えば(https://github.com/sutefu7/sutefu7.github.io) だったら (https://sutefu7.github.io) になるのかな？HTML として見れるリンクを開く
4. 見れた！やった！


### 見かけたもの１（真似しても動かなかった・・・）

ソース

(https://github.com/blazor-demo/blazor-demo.github.io)[https://github.com/blazor-demo/blazor-demo.github.io]

実行サイト

(https:///blazor-demo.github.io)[https:///blazor-demo.github.io]


### 見かけたもの２（F#）（真似すらできず・・・）

- ソース
   - (https://github.com/fsbolero/TryFSharpOnWasm)[https://github.com/fsbolero/TryFSharpOnWasm]

- 実行サイト
   - (https://fsbolero.io/)[https://fsbolero.io/]
   - → Try F# in WebAssembly ボタンを押す。というか以下のリンク
   - (https://tryfsharp.fsbolero.io/)[https://tryfsharp.fsbolero.io/]

