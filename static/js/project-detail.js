// project-detail.js

document.addEventListener('DOMContentLoaded', () => {
    const detailContainer = document.getElementById('project-detail-container');
    
    // 1. 从URL获取项目ID
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    // 2. 根据ID在projects数组中查找项目
    const project = projects.find(p => p.id === projectId);

    // 3. 渲染项目详情或显示错误信息
    if (project) {
        // 更新页面标题
        document.title = project.title;

        const techList = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        detailContainer.innerHTML = `
            <h2>${project.title}</h2>
            <div class="tech-stack">
                ${techList}
            </div>
            <img src="${project.thumbnail}" alt="${project.title}" style="width:100%; border-radius: 8px; margin-bottom: 2rem;">
            <div>${project.fullDesc}</div>
        `;
    } else {
        detailContainer.innerHTML = `
            <h2>项目未找到</h2>
            <p>抱歉，我们无法找到您要查看的项目。请返回项目列表重试。</p>
        `;
    }
});