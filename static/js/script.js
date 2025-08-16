// script.js

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. 渲染项目卡片 ---
    const projectsContainer = document.getElementById('projects-container');
    
    if (typeof projects !== 'undefined' && projects.length > 0) {
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            
            const techList = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
            
            // 关键改动：使用 detailPage 字段作为链接地址
            const detailUrl = project.detailPage;

            card.innerHTML = `
                <img src="${project.thumbnail}" alt="${project.title}" class="project-thumbnail">
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.shortDesc}</p>
                    <div class="tech-stack">${techList}</div>
                    <a href="${detailUrl}" class="project-link">查看详情</a>
                </div>
            `;
            
            projectsContainer.appendChild(card);
        });
    }

    // --- 2. 简历模态框逻辑 ---
    const resumeThumbnail = document.getElementById('resume-thumbnail');
    const resumeModal = document.getElementById('resume-modal');
    const closeResumeBtn = document.getElementById('close-resume-btn');

    if (resumeThumbnail && resumeModal && closeResumeBtn) {
        resumeThumbnail.addEventListener('click', () => {
            resumeModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

        closeResumeBtn.addEventListener('click', () => {
            resumeModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        resumeModal.addEventListener('click', (event) => {
            if (event.target === resumeModal) {
                resumeModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // --- 3. 实习经历卡片点击展开/收起 ---
    const internshipCards = document.querySelectorAll('.internship-card');
    internshipCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });

});