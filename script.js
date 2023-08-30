// サイトの<title>取得
// 権限の関係で断念。自分でタイトルも入力する必要あり。
// fetch('')
// .then(Response => {
//     return Response.json()
// })
// .then(data => {
//     const p = document.createElement('p')
//     p.textContent = data.name
//     document.getElementById("title").appendChild(p)
// })
// .catch(e => {
//     console.log(e)
// })
    let sample_arr = ['.com','.jp','.net','.org','.co.jp','.inc','.tokyo','.info','.ai','.biz','.gov','.edu'];
    let result = document.getElementById('result');
    let sankoubunken = ["【出典】"];



function submitClick(){
    let UrlText = document.getElementById('UrlText');
    let Title = document.getElementById('Title');
    let Author = document.getElementById('Author');

    let str = UrlText.value;
    let arr = str.split("");



    loop:
    for(let i=0;i<sample_arr.length;i++){
        if(str.indexOf(sample_arr[i])!=-1){
            let tmp = str.indexOf(sample_arr[i]);
            arr.splice(tmp+sample_arr[i].length);
            break loop;
        }
    }

    let ans = arr.join("");
    // 参照日
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let date = year + '-' + month + '-' + day;
    sankoubunken.push(`${Author.value}"${ Title.value}"${UrlText.value},（参照${date}）`);
    console.log(sankoubunken);

    result.innerText = sankoubunken.join('\n');
}

let btn = document.getElementById('btn');
btn.addEventListener('click',submitClick);


let template_btn = document.getElementById('template_btn');
template_btn.addEventListener('click',template1Click);

let template2_btn = document.getElementById('template2_btn');
template2_btn.addEventListener('click',template2Click);

function template1Click(){
    let UrlText = document.getElementById('UrlText');
    let Title = document.getElementById('Title');
    let Author = document.getElementById('Author');

    UrlText.value = "tanakatarou.com";
    Title.value = "プロフィールサイト"
    Author.value = "田中太郎";
}
function template2Click(){
    let UrlText = document.getElementById('UrlText');
    let Title = document.getElementById('Title');
    let Author = document.getElementById('Author');

    UrlText.value = "satouhihumi.jp";
    Title.value = "ブログサイト"
    Author.value = "佐藤一二三";
}

// コピーボタン
function copy() {
    let text = document.getElementById('container_result').innerText;

    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('テキストがクリップボードにコピーされました');
        })
        .catch((error) => {
            console.error('テキストのコピー中にエラーが発生しました', error);
        });
}
