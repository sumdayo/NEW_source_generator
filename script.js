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

function submitClick(){
    let UrlText = document.getElementById('UrlText');
    let Title = document.getElementById('Title');
    let result = document.getElementById('result');

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
    let date = year + '年' + month + '月' + day + '日';
    result.innerText = ans +'「'+ Title.value +'」'+'、'+ UrlText.value+'('+ date +')';
}


let btn = document.getElementById('btn');
btn.addEventListener('click',submitClick);

// 備考欄
let li_dom = document.getElementById('li_domein');
let dom = sample_arr.join('');
li_dom.innerHTML = dom + 'に対応しています。';