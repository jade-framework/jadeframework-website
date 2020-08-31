const setActive = (progress, activeHeader) => {
  const activeLink = progress.querySelector(`li[data-id="${activeHeader.id}"]`);

  const activeLinks = progress.querySelectorAll('.visible');

  activeLinks.forEach((link) => {
      link.classList.remove('active')
      link.classList.remove('visible')}
  );

  activeLink.classList.add('active');

  let parentNode = activeLink;
  while (!parentNode.classList.contains('visible')) {
    parentNode.classList.add('visible');
    parentNode = parentNode.parentNode;
  };
}

const createOutline = (headers) => {
  const outline = new DocumentFragment();
  let prevHdrLvl = 2;
  let elementToAppendTo = outline;

  headers.forEach(({ id, dataset, textContent: text, nodeName: tag }) => {
    const hdrLvl = parseInt(tag.replace('H', ''), 10);
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = `#${id}`;
    a.innerHTML = dataset.title || text;
    li.appendChild(a);
    li.dataset.level = hdrLvl;
    li.dataset.id = id;

    if (hdrLvl > prevHdrLvl) {
      const ul = document.createElement('ul');
      elementToAppendTo.lastChild.appendChild(ul);
      elementToAppendTo = ul;
    } else if (hdrLvl < prevHdrLvl) {
      const lvlsToJump = prevHdrLvl - hdrLvl;

      for (let i = 0; i < lvlsToJump; i += 1) {
        elementToAppendTo = elementToAppendTo.parentNode.parentNode;
      }
    }

    elementToAppendTo.appendChild(li);
    prevHdrLvl = hdrLvl;
  });

  return outline;
}

const scroller = () => {
  let allowScrollUpdate = true;
  let lastScrollPosition = 0;
  let tick = false;
  let activeSection = null;
  const progress = document.querySelector('#progress');
  const headers = [...document.querySelectorAll('h2, h3, h4, h5, h6')];
  const outline = createOutline(headers);
  headers.reverse();

  // Inspired by Mothership.live
  const handleScroll = () => {
    const windowVerticalCenter = Math.floor(window.innerHeight / 2);
    lastScrollPosition = window.scrollY;

    if (!tick) {
      setTimeout(() => {
        tick = false;
        const prevActiveSection = activeSection;

        activeSection = headers.find((h) => lastScrollPosition > h.offsetTop - windowVerticalCenter);

        if (!activeSection) {
          progress.parentNode.classList.remove('visible');
          return;
        }

        if (activeSection === prevActiveSection) { return; }
        progress.parentNode.classList.add('visible');

        if (allowScrollUpdate) {
          setActive(progress, activeSection);
        }
        allowScrollUpdate = true;
      }, 150);

      tick = true;
    }
  }

  progress.appendChild(outline);

  progress.addEventListener('click', (e) => {
    const { tagName, parentNode } = e.target;
    if (tagName !== 'A') { return; }

    const targetHeader = document.getElementById(parentNode.dataset.id);

    allowScrollUpdate = false;
    setActive(progress, targetHeader);
  });

  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
}

document.addEventListener('DOMContentLoaded', scroller);
