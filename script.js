const projects = [
  {
    title: "\u0041\u0049\u0047\u0043 \u5185\u5bb9\u751f\u6210\u4e0e\u5de5\u4f5c\u6d41\u5b9e\u9a8c",
    mediaSrc: "images/project-placeholder.svg",
    mediaType: "image",
    shortDescription: "\u56f4\u7ed5\u8bed\u97f3\u751f\u6210\u3001\u6587\u6848\u751f\u6210\u3001\u56fe\u50cf\u751f\u6210\u548c\u81ea\u52a8\u5316\u5185\u5bb9\u751f\u4ea7\u6d41\u7a0b\u505a\u8fc7\u82e5\u5e72\u5e94\u7528\u5b9e\u9a8c\u3002",
    fullDescription: "\u8fd9\u4e2a\u65b9\u5411\u7684\u5b9e\u8df5\u4e3b\u8981\u805a\u7126\u5728 AIGC \u7684\u5b9e\u9645\u843d\u5730\u3002\n\n\u5305\u62ec\u8bed\u97f3\u751f\u6210\u3001\u6587\u6848\u751f\u6210\u3001\u56fe\u50cf\u751f\u6210\u4ee5\u53ca\u81ea\u52a8\u5316\u5185\u5bb9\u751f\u4ea7\u6d41\u7a0b\u7684\u4e32\u8054\u548c\u8c03\u8bd5\uff0c\u4fa7\u91cd\u770b\u4e0d\u540c\u6a21\u578b\u80fd\u529b\u5728\u771f\u5b9e\u573a\u666f\u4e2d\u7684\u7ec4\u5408\u65b9\u5f0f\u3001\u53ef\u7528\u6027\u4e0e\u8f93\u51fa\u8d28\u91cf\u3002",
    githubUrl: "",
    huggingfaceUrl: "",
    websiteUrl: ""
  },
  {
    title: "\u7a7a\u95f4\u4e0e\u5e03\u5c40\u751f\u6210\u63a2\u7d22",
    mediaSrc: "images/project-placeholder-alt.svg",
    mediaType: "image",
    shortDescription: "\u4ece GAN \u5230 GNN / Transformer \u505a\u8fc7\u5e03\u5c40\u751f\u6210\u65b9\u5411\u7684\u7814\u7a76\u63a2\u7d22\uff0c\u5173\u6ce8\u56fe\u5173\u7cfb\u3001\u751f\u6210\u63a7\u5236\u548c\u7ed3\u679c\u8bc4\u4f30\u3002",
    fullDescription: "\u8fd9\u90e8\u5206\u5de5\u4f5c\u4e3b\u8981\u56f4\u7ed5\u7a7a\u95f4\u4e0e\u5e03\u5c40\u751f\u6210\u5c55\u5f00\u3002\n\n\u63a8\u8fdb\u8fc7\u4ece GAN \u5230 GNN / Transformer \u7684\u65b9\u6cd5\u5bf9\u6bd4\u4e0e\u8bbe\u60f3\uff0c\u91cd\u70b9\u662f\u5e03\u5c40\u7ed3\u6784\u5efa\u6a21\u3001\u56fe\u5173\u7cfb\u8868\u8fbe\u3001\u53ef\u63a7\u751f\u6210\u4ee5\u53ca\u751f\u6210\u7ed3\u679c\u7684\u8bc4\u4f30\u65b9\u5f0f\u3002",
    githubUrl: "",
    huggingfaceUrl: "",
    websiteUrl: ""
  },
  {
    title: "\u6570\u636e\u96c6\u6784\u5efa\u4e0e\u5b9e\u9a8c\u5de5\u5177\u5f00\u53d1",
    mediaSrc: "images/project-placeholder-grid.svg",
    mediaType: "image",
    shortDescription: "\u505a\u8fc7\u89c4\u5219\u751f\u6210\u5de5\u5177\u3001\u6807\u6ce8\u5de5\u5177\u548c\u524d\u7aef demo\uff0c\u7528\u4e8e\u8f85\u52a9\u6837\u672c\u751f\u6210\u3001\u6570\u636e\u6574\u7406\u548c\u6a21\u578b\u8bad\u7ec3\u3002",
    fullDescription: "\u8fd9\u7c7b\u9879\u76ee\u66f4\u504f\u5411\u5de5\u5177\u548c\u6d41\u7a0b\u5c42\u3002\n\n\u901a\u8fc7\u89c4\u5219\u751f\u6210\u3001\u6807\u6ce8\u8f85\u52a9\u3001\u524d\u7aef\u5c0f\u5de5\u5177\u548c demo \u7684\u65b9\u5f0f\uff0c\u63d0\u9ad8\u6570\u636e\u6784\u5efa\u548c\u5b9e\u9a8c\u7ec4\u7ec7\u7684\u6548\u7387\uff0c\u8ba9\u6a21\u578b\u8bad\u7ec3\u4e0e\u8bc4\u4f30\u6d41\u7a0b\u66f4\u53ef\u7ba1\u7406\u3002",
    githubUrl: "",
    huggingfaceUrl: "",
    websiteUrl: ""
  },
  {
    title: "GroundingDINO + SAM \u56fe\u50cf\u8bed\u4e49\u8bc6\u522b\u4e0e\u5206\u5272\u5b9e\u9a8c",
    mediaSrc: "images/project-placeholder.svg",
    mediaType: "image",
    shortDescription: "\u5728\u56fd\u5bb6\u91cd\u70b9\u7814\u53d1\u8ba1\u5212\u76f8\u5173\u8bfe\u9898\u4e2d\uff0c\u4f7f\u7528 GroundingDINO + SAM \u5b8c\u6210\u56fe\u50cf\u8bed\u4e49\u8bc6\u522b\u4e0e\u5206\u5272\u76f8\u5173\u5b9e\u9a8c\u3002",
    fullDescription: "\u8fd9\u90e8\u5206\u5de5\u4f5c\u66f4\u63a5\u8fd1\u89c6\u89c9\u6a21\u578b\u5728\u7279\u5b9a\u4efb\u52a1\u4e0b\u7684\u7ec4\u5408\u5e94\u7528\u3002\n\n\u4ee5 GroundingDINO \u4e0e SAM \u7684\u80fd\u529b\u4e32\u8054\u4e3a\u57fa\u7840\uff0c\u8fdb\u884c\u8bed\u4e49\u8bc6\u522b\u4e0e\u5206\u5272\u5b9e\u9a8c\uff0c\u79ef\u7d2f\u4e86\u4e00\u5b9a\u7684\u6a21\u578b\u7ec4\u5408\u4f7f\u7528\u4e0e\u7ed3\u679c\u89c2\u5bdf\u7ecf\u9a8c\u3002",
    githubUrl: "",
    huggingfaceUrl: "",
    websiteUrl: ""
  }
];

const publications = [
  {
    imageSrc: "images/publication-placeholder.svg",
    authors: "\u7814\u7a76\u65b9\u5411 01",
    title: "AIGC \u5185\u5bb9\u751f\u6210\u4e0e\u53ef\u63a7\u56fe\u50cf\u751f\u6210",
    venue: "\u805a\u7126\u591a\u6a21\u6001\u5185\u5bb9\u751f\u6210\u3001\u63d0\u793a\u8bbe\u8ba1\u3001\u751f\u6210\u7ed3\u679c\u63a7\u5236\u548c\u5e94\u7528\u5316\u5b9e\u9a8c\u3002",
    link: ""
  },
  {
    imageSrc: "images/publication-placeholder-alt.svg",
    authors: "\u7814\u7a76\u65b9\u5411 02",
    title: "\u7a7a\u95f4\u4e0e\u5e03\u5c40\u751f\u6210\u5efa\u6a21",
    venue: "\u805a\u7126\u5e03\u5c40\u7ed3\u6784\u3001\u56fe\u5173\u7cfb\u5efa\u6a21\u3001GAN \u5230 GNN / Transformer \u7684\u751f\u6210\u65b9\u6cd5\u63a2\u7d22\u3002",
    link: ""
  },
  {
    imageSrc: "images/publication-placeholder.svg",
    authors: "\u7814\u7a76\u65b9\u5411 03",
    title: "\u6570\u636e\u6784\u5efa\u3001\u8bc4\u4f30\u4e0e\u89c6\u89c9\u6a21\u578b\u5e94\u7528",
    venue: "\u5305\u62ec\u6570\u636e\u96c6\u6784\u5efa\u3001\u6807\u6ce8\u8f85\u52a9\u3001\u5de5\u5177\u5f00\u53d1\uff0c\u4ee5\u53ca GroundingDINO + SAM \u76f8\u5173\u89c6\u89c9\u5b9e\u9a8c\u3002",
    link: ""
  }
];

const projectsGrid = document.getElementById("projects-grid");
const publicationsList = document.getElementById("publications-list");
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const stickyNav = document.querySelector(".sticky-nav");
const projectModal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalMediaWrapper = document.getElementById("modalMediaWrapper");
const modalGithub = document.getElementById("modalGithub");
const modalHuggingface = document.getElementById("modalHuggingface");
const modalWebsite = document.getElementById("modalWebsite");
const closeModalButton = document.getElementById("closeModal");
const emailToggle = document.getElementById("emailToggle");
const emailReveal = document.getElementById("emailReveal");

function buildCardLinks(project) {
  const links = [];
  if (project.githubUrl) {
    links.push(`<a href="${project.githubUrl}" target="_blank" rel="noreferrer" aria-label="GitHub" data-stop-modal="true"><i class="fab fa-github"></i></a>`);
  }
  if (project.huggingfaceUrl) {
    links.push(`<a href="${project.huggingfaceUrl}" target="_blank" rel="noreferrer" aria-label="\u6a21\u578b\u94fe\u63a5" data-stop-modal="true"><i class="fas fa-face-smile"></i></a>`);
  }
  if (project.websiteUrl) {
    links.push(`<a href="${project.websiteUrl}" target="_blank" rel="noreferrer" aria-label="\u7f51\u7ad9\u94fe\u63a5" data-stop-modal="true"><i class="fas fa-globe"></i></a>`);
  }
  return links.length ? `<div class="card-links">${links.join("")}</div>` : "";
}

function renderMedia(mediaType, mediaSrc, title) {
  if (mediaType === "video") {
    return `
      <video class="card-media" autoplay loop muted playsinline>
        <source src="${mediaSrc}" type="video/mp4">
        \u4f60\u7684\u6d4f\u89c8\u5668\u6682\u4e0d\u652f\u6301\u89c6\u9891\u64ad\u653e\u3002
      </video>
    `;
  }
  return `<img class="card-image" src="${mediaSrc}" alt="${title}">`;
}

function renderProjects() {
  if (!projectsGrid) {
    return;
  }

  projectsGrid.innerHTML = projects.map((project, index) => `
    <article class="card" data-project-index="${index}" tabindex="0" role="button" aria-label="\u6253\u5f00 ${project.title} \u7684\u8be6\u60c5">
      ${renderMedia(project.mediaType, project.mediaSrc, project.title)}
      <h3>${project.title}</h3>
      <div class="card-content">
        <p class="card-description">${project.shortDescription}</p>
        ${buildCardLinks(project)}
      </div>
    </article>
  `).join("");

  projectsGrid.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", (event) => {
      const link = event.target.closest("[data-stop-modal='true']");
      if (link) {
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

function renderPublications() {
  if (!publicationsList) {
    return;
  }

  publicationsList.innerHTML = publications.map((item) => {
    const titleContent = item.link
      ? `<a href="${item.link}" target="_blank" rel="noreferrer">${item.title}</a>`
      : item.title;

    return `
      <article class="publication">
        <div class="pub-image">
          <img src="${item.imageSrc}" alt="\u7814\u7a76\u914d\u56fe">
        </div>
        <div class="pub-content">
          <p class="pub-author">${item.authors}</p>
          <p class="pub-title">${titleContent}</p>
          <p class="pub-venue">${item.venue}</p>
        </div>
      </article>
    `;
  }).join("");
}

function setLinkState(element, url) {
  if (!element) {
    return;
  }
  if (url) {
    element.href = url;
    element.style.display = "inline-flex";
  } else {
    element.removeAttribute("href");
    element.style.display = "none";
  }
}

function openProjectModal(projectIndex) {
  const project = projects[projectIndex];
  if (!project || !projectModal) {
    return;
  }

  modalTitle.textContent = project.title;
  modalDescription.textContent = project.fullDescription;

  if (project.mediaType === "video") {
    modalMediaWrapper.innerHTML = `
      <video class="modal-video" autoplay loop muted playsinline controls>
        <source src="${project.mediaSrc}" type="video/mp4">
      </video>
    `;
  } else {
    modalMediaWrapper.innerHTML = `<img class="modal-image" src="${project.mediaSrc}" alt="${project.title}">`;
  }

  setLinkState(modalGithub, project.githubUrl);
  setLinkState(modalHuggingface, project.huggingfaceUrl);
  setLinkState(modalWebsite, project.websiteUrl);

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
});

if (closeModalButton) {
  closeModalButton.addEventListener("click", closeProjectModal);
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
  }
});

window.addEventListener("scroll", syncNavState);

renderProjects();
renderPublications();
syncNavState();
