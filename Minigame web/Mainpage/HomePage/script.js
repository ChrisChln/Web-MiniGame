document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('nav a.active').classList.remove('active');
        this.classList.add('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // 获取弹窗和按钮元素
    var modal = document.getElementById('settings-modal');
    var btn = document.querySelector('.header-right button:nth-of-type(2)'); // 假设第二个按钮是“Setting”
    var span = document.querySelector('.modal .close');
    
    // 当用户点击“Setting”按钮时，显示弹窗
    btn.onclick = function() {
        modal.style.display = 'block';
    }

    // 当用户点击关闭按钮时，隐藏弹窗
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // 当用户点击弹窗以外的区域时，隐藏弹窗
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

var gameBtn = document.querySelector('nav ul li a[href="#game"]'); // 确保选择器匹配你的“Game”按钮
var gameContent = document.getElementById('game-content');

gameBtn.onclick = function() {
    console.log('Game button clicked'); // 确保点击事件被触发
    fetch('/Mainpage/Game/game.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            gameContent.innerHTML = data;
            gameContent.style.display = 'block'; // 显示游戏内容
        })
        .catch(error => console.error('Error loading game page:', error));
}
