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
