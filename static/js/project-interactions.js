document.addEventListener('DOMContentLoaded', function() {
    
    // 找到所有标记为可以缩放的图片容器
    const zoomableImages = document.querySelectorAll('.image-zoomable');

    // 如果页面上没有可缩放的图片，就提前结束，避免错误
    if (zoomableImages.length === 0) {
        return;
    }

    // 为每个可缩放的图片容器添加事件监听器
    zoomableImages.forEach(imageContainer => {

        // --- 核心逻辑1: 点击事件 ---
        // 点击时切换 'zoomed' 类，实现放大和缩小
        imageContainer.addEventListener('click', function(event) {
            // 阻止事件冒泡，这样点击图片本身不会触发下面“点击页面其他地方”的逻辑
            event.stopPropagation(); 
            this.classList.toggle('zoomed');
        });

        // --- 核心逻辑2: 鼠标移出事件 (新功能) ---
        // 当鼠标移出图片容器时，如果图片是放大的，就将其缩小
        imageContainer.addEventListener('mouseleave', function() {
            // 检查当前是否处于放大状态
            if (this.classList.contains('zoomed')) {
                this.classList.remove('zoomed');
            }
        });
    });

    // --- 优化体验: 点击页面其他任何地方，也会关闭放大的图片 ---
    // 这是一个很好的用户体验增强
    document.addEventListener('click', function() {
        zoomableImages.forEach(imageContainer => {
            imageContainer.classList.remove('zoomed');
        });
    });

});