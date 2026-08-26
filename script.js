const tabs = document.querySelectorAll(".nav__tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.target;

    tabs.forEach((t) => {
      t.classList.toggle("is-active", t === tab);
      t.setAttribute("aria-selected", t === tab ? "true" : "false");
    });

    panels.forEach((panel) => {
      const isTarget = panel.id === `panel-${target}`;
      if (isTarget) {
        panel.hidden = false;
        panel.classList.remove("is-active");
        // restart animation
        void panel.offsetWidth;
        panel.classList.add("is-active");
      } else {
        panel.hidden = true;
        panel.classList.remove("is-active");
      }
    });
  });
});
