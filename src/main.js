let writing = document.querySelector('#writing')
let main = document.querySelector('#main');
let style = document.querySelector('#style')
let str = `/* 
 * 你好，我叫vinkin
 * 接下来我演示一下我制作的太极图
 * 首先我要准备一个div
 * div的id为main
 * 设置div的尺寸并且在页面显示
 **/
 #main{
    border: 1px solid red;
    width: 200px;
    height: 200px;
 }
/* 
 * 接下来我把 div 变成一个八卦图
 * 首先，把 div 变成一个圆
 */
 #main{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
 }
 /* 然后制作八卦是阴阳形成的一黑一白*/
 #main{
    background: linear-gradient(90deg, white 0%, white 50%, black 50%, black 100%);
 }
/* 加两个空心圆 */
 #main::before{
    content: "";
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    border-radius: 50%;
    background: radial-gradient(circle, white 0%, white 25%, black 25%, black 100%);
 }
 #main::after{
    content: "";
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 50%;
    background: radial-gradient(circle, black 0%, black 28%, white 28%, white 100%, black 100%);
 }
 /* 最后，动起来吧，太极！！！ */
 #main {
    animation: 5s run linear infinite;
 }`;
let str2 = '';
let n = 0;

let step = () => {
    setTimeout(() => {
        if (str[n] === "\n") {
            str2 += '<br>'
        } else if (str[n] === " ") {
            str2 += '&nbsp;'
        } else {
            str2 += str[n]
        }
        writing.innerHTML = str2;
        style.innerHTML = str.substring(0, n);
        window.scrollTo(0, 99999)
        writing.scrollTo(0, 99999)
        if (n < str.length - 1) {
            n += 1;
            step()
        }
    }, 50);
}
step();