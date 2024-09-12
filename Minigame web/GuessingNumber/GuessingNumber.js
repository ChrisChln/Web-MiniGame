// script.js

// 生成一个 1 到 100 之间的随机整数
let randomNumber = Math.floor(Math.random() * 100) + 1;
// 初始化尝试次数
let attempts = 0;
// 初始化存储猜测的数组
let guesses = [];

/**
 * 检查用户的猜测
 */
function checkGuess() {
    // 获取用户输入的猜测值
    const guessInput = document.getElementById('guessInput');
    const messageContainer = document.getElementById('message');
    const guessList = document.getElementById('guessList');
    const guess = Number(guessInput.value); // 将输入的值转换为数字

    // 打印调试信息
    console.log(`用户猜测: ${guess}`);
    
    // 增加尝试次数
    attempts++;

    // 清空之前的消息
    messageContainer.innerHTML = '';

    // 检查用户的猜测
    if (isNaN(guess)) {
        // 如果输入的不是一个有效的数字
        messageContainer.innerHTML = '<p>请输入一个有效的数字。</p>';
        messageContainer.style.color = 'red'; // 设置消息颜色为红色
    } else if (guess === randomNumber) {
        // 用户猜对了
        messageContainer.innerHTML = `<p>恭喜你猜对了！你总共猜了 ${attempts} 次。</p>`;
        messageContainer.style.color = 'green'; // 设置消息颜色为绿色
    } else if (guess < randomNumber) {
        // 用户猜的数字太低
        messageContainer.innerHTML = '<p>太低了！再试试吧。</p>';
        messageContainer.style.color = 'red'; // 设置消息颜色为红色
    } else if (guess > randomNumber) {
        // 用户猜的数字太高
        messageContainer.innerHTML = '<p>太高了！再试试吧。</p>';
        messageContainer.style.color = 'red'; // 设置消息颜色为红色
    }

    // 将当前猜测添加到猜测列表
    guesses.push(guess);
    guessList.innerHTML = `<p>${guesses.join(', ')}</p>`; // 显示所有猜测

    // 清空输入框
    guessInput.value = '';
}
