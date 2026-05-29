const projects = [
  {
    title: "短视频平台内容自动化生产",
    subtitle: "多媒体 AIGC 工作流",
    period: "2025.05 - 2025.09",
    theme: "aigc",
    labels: ["NotebookLM", "GPT-SoVITS", "AIGC 工作流"],
    shortDescription: "围绕长篇文本拆分、角色第一人称叙事、AI 语音合成和视频自动化制作，构建面向短视频平台的 AIGC 内容生产流程。",
    fullDescription: [
      "基于 NotebookLM 将长篇文本拆分并重写为角色第一人称叙事文案，形成适配短视频平台节奏的系列化内容脚本。",
      "使用 GPT-SoVITS v4 训练角色语音模型，将生成文案转化为特定角色音色配音，并结合自动化字幕与剪辑流程完成视频定期制作。",
      "通过 AIGC 工作流完成并发布角色说书作品数十期，半年内热门作品播放量超 25 万，抖音累计播放量超 150 万。"
    ],
    demoUrl: "https://dadongshancc.github.io/lord-of-the-mysteries-character-graph/",
    githubUrl: "https://github.com/dadongshancc/lord-of-the-mysteries-character-graph",
    douyinUrl: "https://www.douyin.com/user/self?from_tab_name=main&modal_id=7526863954049600827&showTab=post"
  },
  {
    title: "GridForge 空间推理数据集",
    subtitle: "规则智能体系统",
    period: "2023.09 - 2025.01",
    theme: "grid",
    labels: ["空间推理", "Python", "规则智能体"],
    shortDescription: "基于网格假设构建空间推理数据集，通过规则智能体生成结构化布局样本、标签数据与可视化结果。",
    fullDescription: [
      "作为项目负责人统筹项目策划、算法开发与数据管理，持续推进 13 个月，并获得 1.5 万元竞赛资金支持。",
      "基于网格假设构建面向空间推理的数据集，支持批量生成结构化布局样本、标签数据与可视化结果。",
      "基于 Python 分层设计 4 类规则智能体，在网格空间中提升数据样本复杂度与多样性。"
    ],
    demoUrl: "https://dadongshancc.github.io/GridForge/",
    githubUrl: "https://github.com/dadongshancc/GridForge"
  },
  {
    title: "MarketGraph AI 股票复盘助手",
    subtitle: "金融事件知识图谱",
    period: "2025.03 - 至今",
    theme: "market",
    labels: ["LLM", "知识图谱", "复盘助手"],
    shortDescription: "面向个人投资复盘场景，记录市场走势、主观判断与事件链接，构建个人化金融事件知识图谱。",
    fullDescription: [
      "面向个人投资复盘场景，轻量化记录市场走势、主观判断与关联逻辑，追踪个性化投资策略。",
      "设计“事件-判断-链接”时间轴交互，以正向、负向与不确定标签记录个人判断，链接事件表达市场行为的长期关联。",
      "接入 LLM 完成财经事件抽取、态度识别与关系链路整理，构建由个人判断与金融事件组成的用户知识图谱。"
    ],
    githubUrl: "https://github.com/dadongshancc"
  }
];

const researchArticles = [
  {
    title: "建筑立面语义识别与分割",
    role: "西安建筑科技大学 | 研究助理",
    period: "2023.06 - 2024.06",
    theme: "facade",
    tags: ["GroundingDINO", "SAM", "ControlNet"],
    body: [
      "这段研究主要面向建筑立面图像的语义识别、目标检测与区域分割。工作重点不是单一模型训练，而是搭建可复用的数据生成流程，将真实建筑立面图像转化为颜色-类别一致的语义掩码样本。",
      "流程中集成 GroundingDINO 与 Segment Anything Model（SAM），利用文本提示补足 SAM 缺乏语义类别识别的问题，实现文本提示驱动的目标检测与分割。",
      "后续将数据接入 ComfyUI 工作流，作为 ControlNet 条件输入 Stable Diffusion，支持结构约束下的可控生成实验。"
    ]
  },
  {
    title: "可编辑住宅平面生成",
    role: "华南理工大学 | 研究助理",
    period: "2025.12 - 2026.03",
    theme: "plan",
    tags: ["GraphMAE2", "GPT-1", "SVG"],
    body: [
      "这段研究关注住宅平面图的可编辑生成。核心思路是把房间类型、房间数量与连接关系建模为图，并用掩码图自编码器 GraphMAE2 进行图自监督学习。",
      "在生成阶段，基于 GPT-1 框架将平面布局建模为序列，在 80k+ 数据集上训练与评估自回归模型，输出可编辑的 SVG 矢量图。",
      "实验在 RPLAN 基准数据集上达到 SOTA 性能；相较 HouseGAN++，生成质量提升 42%；相较 HouseDiffusion，推理速度提升 215%。"
    ]
  }
];

const projectsGrid = document.getElementById("projects-grid");
const researchList = document.getElementById("research-list");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const stickyNav = document.querySelector(".sticky-nav");
const projectModal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalMediaWrapper = document.getElementById("modalMediaWrapper");
const modalExternal = document.getElementById("modalExternal");
const modalGithub = document.getElementById("modalGithub");
const modalDouyin = document.getElementById("modalDouyin");
const closeModalButton = document.getElementById("closeModal");
const articleModal = document.getElementById("articleModal");
const articleTitle = document.getElementById("articleTitle");
const articleMeta = document.getElementById("articleMeta");
const articleBody = document.getElementById("articleBody");
const closeArticleModalButton = document.getElementById("closeArticleModal");
const emailToggle = document.getElementById("emailToggle");
const emailReveal = document.getElementById("emailReveal");

function renderParagraphs(paragraphs) {
  return paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function buildCardLinks(project) {
  const links = [];
  if (project.githubUrl) {
    links.push(`<a href="${project.githubUrl}" target="_blank" rel="noreferrer" aria-label="GitHub" data-stop-modal="true"><i class="fab fa-github"></i></a>`);
  }
  if (project.douyinUrl) {
    links.push(`<a href="${project.douyinUrl}" target="_blank" rel="noreferrer" aria-label="抖音" data-stop-modal="true"><i class="fab fa-tiktok"></i></a>`);
  }
  return links.length ? `<div class="card-links spotlight-card-links">${links.join("")}</div>` : "";
}

function renderProjectCard(project, index) {
  const panelLabels = [
    project.labels[0] || project.subtitle,
    project.labels[1] || project.title,
    project.labels[2] || project.period
  ];

  return `
    <article class="card card-spotlight project-theme-${project.theme}" data-project-index="${index}" tabindex="0" role="button" aria-label="打开 ${project.title} 的详情">
      <div class="spotlight-cover">
        <div class="spotlight-cover-top">
          <div class="spotlight-panel panel-script"><span>${panelLabels[0]}</span></div>
          <div class="spotlight-panel panel-core"><span>${panelLabels[1]}</span></div>
          <div class="spotlight-panel panel-flow"><span>${panelLabels[2]}</span></div>
        </div>
        <div class="spotlight-cover-bottom">
          <div class="spotlight-copy">
            <p class="spotlight-meta">${project.period} · ${project.subtitle}</p>
            <h3>${project.title}</h3>
            <p class="spotlight-description">${project.shortDescription}</p>
          </div>
          <div class="spotlight-actions">
            ${buildCardLinks(project)}
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderProjects() {
  if (!projectsGrid) {
    return;
  }

  projectsGrid.innerHTML = projects.map(renderProjectCard).join("");

  projectsGrid.querySelectorAll(".card-spotlight").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("[data-stop-modal='true']")) {
        event.stopPropagation();
        return;
      }
      openProjectModal(Number(card.dataset.projectIndex));
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProjectModal(Number(card.dataset.projectIndex));
      }
    });
  });
}

function renderResearchArticles() {
  if (!researchList) {
    return;
  }

  researchList.innerHTML = researchArticles.map((article, index) => {
    const tags = article.tags.map((tag) => `<span>${tag}</span>`).join("");
    return `
      <article class="research-card research-theme-${article.theme}" data-research-index="${index}" tabindex="0" role="button" aria-label="阅读 ${article.title}">
        <div class="research-index">${String(index + 1).padStart(2, "0")}</div>
        <div class="research-visual" aria-hidden="true">
          <div class="research-visual-frame">
            <div class="research-visual-grid"></div>
            <div class="research-visual-mask mask-a"></div>
            <div class="research-visual-mask mask-b"></div>
          </div>
        </div>
        <div class="research-content">
          <p class="research-meta">${article.role} · ${article.period}</p>
          <h3>${article.title}</h3>
          <div class="research-tags">${tags}</div>
        </div>
        <span class="research-read-more">阅读全文</span>
      </article>
    `;
  }).join("");

  researchList.querySelectorAll(".research-card").forEach((card) => {
    card.addEventListener("click", () => openResearchArticle(Number(card.dataset.researchIndex)));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openResearchArticle(Number(card.dataset.researchIndex));
      }
    });
  });
}

function setProjectLink(element, url, label, iconClass) {
  if (!element) {
    return;
  }
  if (!url) {
    element.style.display = "none";
    return;
  }
  element.href = url;
  element.innerHTML = `<i class="${iconClass}"></i>${label ? ` ${label}` : ""}`;
  element.style.display = "inline-flex";
}

function resolveDemoEmbedSrc(project) {
  return project.demoUrl || "";
}

function renderProjectStage(project) {
  if (project.demoUrl) {
    return `
      <div class="modal-live-stage">
        <iframe class="modal-stage-iframe" src="${resolveDemoEmbedSrc(project)}" title="${project.title}" loading="lazy"></iframe>
      </div>
    `;
  }

  const labels = project.labels.map((label) => `<span>${label}</span>`).join("");
  return `
    <div class="modal-live-stage modal-placeholder-stage project-theme-${project.theme}">
      <div class="modal-placeholder-main">
        <div class="modal-placeholder-grid"></div>
        <div class="visual-node node-a"></div>
        <div class="visual-node node-b"></div>
        <div class="visual-node node-c"></div>
        <div class="visual-line line-a"></div>
        <div class="visual-line line-b"></div>
      </div>
      <div class="modal-placeholder-side">
        <p>${project.period}</p>
        <h3>${project.subtitle}</h3>
        <div class="visual-chip-row">${labels}</div>
      </div>
    </div>
  `;
}

function openProjectModal(projectIndex) {
  const project = projects[projectIndex];
  if (!project || !projectModal) {
    return;
  }

  modalTitle.textContent = project.title;
  modalDescription.innerHTML = renderParagraphs(project.fullDescription);
  modalMediaWrapper.innerHTML = renderProjectStage(project);
  setProjectLink(modalExternal, project.demoUrl, "", "fa-solid fa-arrow-up-right-from-square");
  setProjectLink(modalGithub, project.githubUrl, "查看 GitHub", "fab fa-github");
  setProjectLink(modalDouyin, project.douyinUrl, "查看抖音", "fab fa-tiktok");

  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  if (!projectModal) {
    return;
  }
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function openResearchArticle(articleIndex) {
  const article = researchArticles[articleIndex];
  if (!article || !articleModal) {
    return;
  }

  articleMeta.textContent = `${article.role} · ${article.period}`;
  articleTitle.textContent = article.title;
  articleBody.innerHTML = renderParagraphs(article.body);

  articleModal.classList.add("is-open");
  articleModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeResearchArticle() {
  if (!articleModal) {
    return;
  }
  articleModal.classList.remove("is-open");
  articleModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function syncNavState() {
  if (!hamburger || !navLinks) {
    return;
  }
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  if (!expanded) {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  }
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function handleAnchorClick(event) {
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);
    if (!target || !stickyNav) {
      return;
    }

    event.preventDefault();
    const navHeight = stickyNav.offsetHeight;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
    window.scrollTo({
      top: targetTop,
      behavior: "smooth"
    });

    if (hamburger && navLinks) {
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("active");
    }
  });
});

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", String(!expanded));
  });
}

window.addEventListener("click", (event) => {
  if (hamburger && navLinks && !hamburger.contains(event.target) && !navLinks.contains(event.target)) {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }

  if (event.target === projectModal) {
    closeProjectModal();
  }

  if (event.target === articleModal) {
    closeResearchArticle();
  }
});

if (closeModalButton) {
  closeModalButton.addEventListener("click", closeProjectModal);
}

if (closeArticleModalButton) {
  closeArticleModalButton.addEventListener("click", closeResearchArticle);
}

if (emailToggle && emailReveal) {
  emailToggle.addEventListener("click", () => {
    const expanded = emailToggle.getAttribute("aria-expanded") === "true";
    emailToggle.setAttribute("aria-expanded", String(!expanded));
    emailReveal.classList.toggle("is-open", !expanded);
    emailReveal.setAttribute("aria-hidden", String(expanded));
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProjectModal();
    closeResearchArticle();
  }
});

window.addEventListener("scroll", syncNavState);

renderProjects();
renderResearchArticles();
syncNavState();
