// projects-data.js

const projects = [
    {
        id: "qt-tool",
        // ***** 核心修改 *****
        title: "图像分类标注工具 (下水道缺陷)",
        shortDesc: "一款为提升图像分类标注效率而自主开发的跨平台桌面应用。",
        thumbnail: "static/images/qt-tool-thumb.png",
        technologies: ["C++", "Qt框架", "MSVC", "CMake", "开发环境：Qt Creator"],
        detailPage: "qt-tool.html" 
    },
    {
        id: "watermark-removal",
        title: "自动化去水印",
        shortDesc: "基于LaMa图像修复模型的自动化流程，显著提升了可用训练数据量。",
        thumbnail: "static/images/watermark-thumb.png",
        technologies: ["Python", "LaMa", "OpenCV", "图像修复"],
        detailPage: "watermark-removal.html"
    },
    {
        id: "model-optimization",
        title: "缺陷检测模型优化",
        shortDesc: "通过多尺度学习与语义增强，实现模型性能的显著提升。",
        thumbnail: "static/images/after.png",
        technologies: ["PyTorch", "CNN", "CLIP", "多尺度学习"],
        detailPage: "model-optimization.html"
    }
];