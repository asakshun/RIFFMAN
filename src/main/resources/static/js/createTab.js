let chord = [,,,,,];

document.addEventListener("DOMContentLoaded", function(){
    let JsonTab = "{tab:}";
})

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