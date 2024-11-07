let chord = [,,,,,];
let chordCnt = 1;
let jsonTab = [];

//document.addEventListener("DOMContentLoaded", function(){
//    let JsonTab = "{tab:}";
//})

//コードの配列を作成する
document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('blur', function() {
        let character;
        //HTMLのdata-id(セカンドID）を使用してインデックスを設定。1弦は"1"のためインデックス用に-1
        const index = input.getAttribute("data-id") -1;
        if (input.value >= 0 && input.value <= 25) {
            character = input.value;
        //input.valueと文字を入力するだけでNullか空文字だと=falseと判定してくれる。※スペースはtrueになる
        } else if (!input.value) {
            character = null
        } else {
            character = "×";
        }
        chord[index] = character;
        input.value = character;
    })
})

//次へボタン押下時に”コード”の配列をタブに追加し”コード”を初期化
async function nextFunction() {
    await chordCreateFunction(); //下記処理より先にこの関数を先に実行する必要ありのためasync-await
    let addChordData = {}; //空のオブジェクトを作成
    let chordName = "chord" + chordCnt;
    addChordData[chordName] = chord; //chordName(変数)がキーでchord(配列)が値
    jsonTab.push(addChordData);
    chord = [,,,,,];
    clearText(); //いつのタイミングでclearされても問題ないため非同期処理については考慮しない
    chordCnt++;

}

//「次へ」（修正のために）「前へ」をしたとき入力されているテキストボックスの値をもとに配列を整形する
//blurは非同期でコードの画像を生成するために必要
function chordCreateFunction(){
    return new Promise((resolve) => {
        for (let i = 1; i <= 6; i++) {
            let id = "string" + i;
            let stringInput = document.getElementById(id);
            let character;
            if (stringInput.value >= 0 && stringInput.value <= 25) {
                character = stringInput.value;
            //input.valueと文字を入力するだけでNullか空文字だと=falseと判定してくれる。※スペースはtrueになる
            } else if (!stringInput.value) {
                character = null
            } else {
                character = "×";
            }
            chord[i-1] = character;
        }
        resolve();
    });
}

//弦のテキストボックスをクリアする
function clearText() {
    document.querySelectorAll('input[type="text"]').forEach(input => {
        input.value = null;
    })
}