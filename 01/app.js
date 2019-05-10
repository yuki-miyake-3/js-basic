//コメントアウト
console.log('--------------------console------------------------');
console.log('hoge');

console.log('---------四則演算----------------');
console.log(1 + 1);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
//余り
//変数、数字は””いらない
console.log('5 % 2')//シングルクォーテーション　or ダブルクォーテーションで囲むと文字列になる
console.log('------------文字列連結------------------')
console.log('ふじなみ' + 'たいじゅ')

console.log('----------------変数----------------------')
//変数とはデータを入れるための箱
//箱の名前→変数名
//変数を使用する理由
//1.変更に対応しやすい
//2.同じ値を繰り返し使える
//3.値の意味が分かりやすい

let name = 'まつしま';
console.log(name);
console.log(name);
console.log(name);
console.log(name);
//変更に対応しやすい
console.log("はしもと");

let num = 2;
//let=変数
console.log(num);
num = num+2;
console.log(num);
num+=2;
//変数を使った計算と省略形。
console.log(num);

//定数　=const
const age = 20;
console.log(age);
//age= 30; とすると、定数に値入れられないのでエラー出る

console.log(`私の年齢は、${age}です。`);

console.log('--------------条件分岐------------------');
console.log('if文');
//if(条件式){
//  処理;
//      }

let int = 5;
if(int > 3){
  console.log(`${int}は3より大きです`);
}

//trueもしくはfalseで返す ことを
//真偽値　と言う

//比較演算子
//<,<=,>,>=,===(一緒だったら),!==(ではなかったら)
//論理演算子
//&&(〇〇かつ〇〇) , //(〇〇もしくは〇〇)

console.log('else if ---------------------');
//最初のif じゃなかったら（当てはまらない場合）
if(int >=10){
  console.log(int + 'は10以上です。');
}else if (int > 3){ 
  console.log(int + 'は3より大きいです。');
}else {console.log (int + 'は3以下です。'); 

}

console.log('switch文----------------------');
let signal = 'green';
switch(signal){
  case 'red':
      console.log('止まれ');
      break;
  case 'green':
      console.log('すすめ');
      break;
  default:
    console.log('その他');
    break;
    
}

console.log('-------------繰り返し-----------------');
console.log('for------------------');
//for(変数の定義、条件式、変数の更新){処理}

for(let i = 1; i <= 10; i++){
  console.log(i);
}
  //＋＋は１ずつ足していく

//while(ループから抜ける条件　ex変数が〜〜に達したら){
//  consolelogで何かを表示 console.log(変数);
//  増やすor減らす　ex i++; or i--;}

console.log('while------------------');
let j = 11;

while(j <= 20){
  console.log(j);
  j++;
}
//ブログなどで使う　５件ずつ表示とか

console.log('fizzbuzz問題-----------------');
//3の倍数はfizz
//5の倍数はbuzz
//3と5の倍数はfizz buzz
//1~num2の値になるまで、続ける。

let num2 = 30;
for(i = 1; i <= num2; i++){
  
  if(i % 3 == 0 && i % 5 ==0){
  console.log('fizzbuzz');
}else if (i % 3 == 0 ){ 
  console.log('fizz');
}else if (i % 5 == 0){
  console.log ('buzz'); 
}else{
  console.log(i);
}
  
}

//num=ナンバー　任意
//int=整数のみ　intenger(整数)の場合が多い？

console.log('------------関数---------------');

//関数とは
//→複数の処理をまとめたもの。
//function 関数名 (){処理}

function greeting(){
  console.log('おはよう');
}

greeting();

//変数名も、関数も、キャメルケースにするー単語のつながりを大文字にする
//ラクダのこぶ　〇〇N〇〇

console.log('引数-------------------------------');
//ひきすう

function greeting(say){
  console.log('佐藤さんが'+ say +'と言っています');
}

greeting('こんにちは');

console.log('ローカル変数---------------------------');
function local(name){
  let hoge = '私の名前は' + name + 'です';
  return hoge;
  //結果を返す
  //{}の中ースコープ　そこだけの変数＝ローカルでしか使えない
}

console.log(local('くによし'));
//console.log(hoge);
//関数を変数に入れることもできる
//引数とは
//関数に何か処理を依頼する際、「このデータを使って処理をしてほしい」ということがあります。
//この時関数へ受け渡す値を「引数」といいます。
//例えば「料理」という関数に「材料」という引数を渡して料理をしてもらうイメージです。

console.log('-------------------配列------------------------------')
//グループ化されたデータ
//[値1 , 値2]


let studentlist = ['橋本さん','三宅さん','佐藤さん'];
console.log(studentlist);
console.log(studentlist[1]);//2番目の値が出ます
console.log(studentlist[1] = '藤並さん');
console.log(studentlist);
studentlist.push('松島さん');
console.log(studentlist);
studentlist.pop();//末尾の値を削除
studentlist.pop();//先頭の値を削除
console.log(studentlist);

console.log('-------------------連想配列-------------------------');
//{キー1:値1, キー2:値2}

let user = {
  food:'ラーメン',
  age:50,
  from:'沖縄'
  
};

let user2 = {
  food:'焼きそば',
  age:40,
  from:'大阪'
  
};

console.log(user);
console.log(user['food']);

console.log('----------------------二次元配列----------------------');
let users = {user , user2};
console.log(users);

//console.log(users[0]['from']);


//console.log(users[0].food);//連想配列（オブジェクト）は,
// .でつなぐことができる ''は文字で表示しますということ

//エラー

console.log('---------------メソッド-------------------');
let user3 = {
  food:'寿司',
  age:20,
  from:'千葉',
  greet: function(name){
    console.log('私の名前は'+ name + 'です。'+ this.from + 'から来ました。'); 
  }
}

user3.greet('斎藤');

console.log('日付-----------------------------');
let date = new Date();
console.log(date);

console.log('DOM------------------------------');
//javascriptからhtmlにアクセスするための様々な命令をDOM(Docment Object Model)という。

let test = document.getElementById('test');
//documentはhtmlのこと
test.style.color = 'blue';
console.log(test);
test.className = 'addclass';
test.textContent = '変更します';

console.log('イベント---------------------------------');

document.getElementById('btn').addEventListener('click',function(){
  let tag = document.createElement('p');
  //Pタグを生成する
  let text = document.createTextNode('Hello js');
  //テキストの内容を生成
  document.body.appendChild(tag).appendChild(text);
})
//何が起きた時に何をさせるかーaddecentListener
//appendChild-子要素としてtagとtext増やす
//textはp-tagの子要素

//基礎の基礎完了



  





