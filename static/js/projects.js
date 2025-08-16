// projects-data.js

const projects = [
    {

        id: "qt-tool", // 新增一个唯一的ID
        title: "QT标注工具 (下水道检测)",
        shortDesc: "一款为提升数据处理效率而自主开发的跨平台图像标注工具。",
        thumbnail: "/images/qt-tool-thumb.png",
        technologies: ["C++", "Qt框架", "MSVC", "CMake", "开发环境：Qt Creator"],
        fullDesc: `
            <h4>项目背景</h4>
            <p>在进行下水道缺陷检测研究时，市面上的标注工具无法满足特定需求，且存在跨平台兼容性问题。为了加速研究进程，我独立设计并开发了这款标注工具。</p>
            
            <h4>核心功能与创新</h4>
            <ul>
                <li><strong>跨平台运行:</strong> 使用PyInstaller打包，完美支持Windows和MacOS，解决了团队成员使用不同操作系统的协作难题。</li>
                <li><strong>高效标注流程:</strong> 集成图像浏览、缺陷框选、类别指定和一键导出功能，将数据处理效率提升了约300%。</li>
                <li><strong>直观界面:</strong> 基于Qt和PySide构建了简洁易用的图形用户界面，无需学习成本即可上手。</li>
            </ul>

            <h4>技术栈</h4>
            <p><strong>前端/GUI:</strong> Qt, PySide<br><strong>图像处理:</strong> OpenCV<br><strong>核心逻辑:</strong> Python<br><strong>打包:</strong> PyInstaller</p>

            <div class="project-links">
                <a href="#" class="download-link">Windows版下载 (示例)</a>
                <a href="#" class="download-link">Mac版下载 (示例)</a>
            </div>
        `
    },
    {
        id: "watermark-removal",
        title: "自动化去水印系统 (下水道检测)",
        shortDesc: "基于LaMa图像修复模型的自动化流程，显著提升了可用训练数据量。",
        thumbnail: "/images/watermark-thumb.png",
        technologies: ["Python", "LaMa", "OpenCV", "图像修复"],
        fullDesc: `
            <h4>项目背景</h4>
            <p>大量原始视频数据包含时间戳等水印，这些水印会干扰模型训练，降低检测精度。手动去除工作量巨大，因此需要一个自动化的解决方案。</p>

            <h4>项目成果</h4>
            <ul>
                <li><strong>数据量提升:</strong> 成功处理了海量视频帧，使可用的有效训练数据量提升了40%。</li>
                <li><strong>自动化流程:</strong> 建立了从视频抽帧、水印区域检测到批量修复的完整自动化处理管线。</li>
                <li><strong>高质量修复:</strong> 利用先进的LaMa（Large Mask Inpainting）模型，实现了自然、无痕的图像修复效果，保留了背景的完整性。</li>
            </ul>
            
            <h4>技术栈</h4>
            <p><strong>核心模型:</strong> LaMa (Large Mask Inpainting)<br><strong>图像处理:</strong> OpenCV<br><strong>脚本与流程控制:</strong> Python</p>
        `
    },
    {
        id: "model-optimization",
        title: "缺陷检测模型优化",
        shortDesc: "通过多尺度学习与语义增强，在少量数据下实现模型性能的显著提升。",
        thumbnail: "/images/after.png",
        technologies: ["PyTorch", "CNN", "CLIP", "多尺度学习"],
        fullDesc: `
            <h4>优化目标</h4>
            <p>在有限的标注数据下，提升现有缺陷检测模型（如YOLO系列）的准确率（特别是召回率），并尽可能保持较高的推理速度。</p>

            <h4>核心优化策略</h4>
            <ul>
                <li><strong>多尺度特征融合:</strong> 将传统的单尺度卷积替换为多尺度感受野模块，增强模型对不同大小缺陷的识别能力。</li>
                <li><strong>视觉-语言语义增强:</strong> 引入CLIP模型的先验知识，通过文本提示（如“裂缝”、“破损”）增强模型对特定缺陷类别的语义理解，有效降低误报。</li>
                <li><strong>轻量级记忆模块:</strong> 增加一个小型记忆网络，帮助模型关联视频序列中的上下文信息，提升检测的稳定性。</li>
            </ul>

            <h4>性能提升</h4>
            <ul>
                <li><strong>F1分数:</strong> 提升2.7% (从88.3%到91.0%)</li>
                <li><strong>F2分数 (更关注召回率):</strong> 提升3.9% (从71.1%到75.0%)</li>
                <li><strong>推理速度:</strong> 提升15%</li>
                <li><strong>数据效率:</strong> 仅使用原有1/16的数据量便达到相似性能。</li>
            </ul>

            <h4>技术栈</h4>
            <p><strong>深度学习框架:</strong> PyTorch<br><strong>核心技术:</strong> 卷积神经网络(CNN), CLIP, 多尺度学习, 注意力机制</p>
        `
    }
];