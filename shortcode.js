(async () => {
  const convertShortcodes = () => {
    document.querySelectorAll('p').forEach((p) => {
      const text = p.textContent?.trim() || '';
      const m = text.match(/^\[convertcalculator\s+id="([^"]+)"\s+type="([^"]+)"\]$/);

      if (m) {
        const div = document.createElement('div');
        div.className = 'calculator';
        div.setAttribute('data-calc-id', m[1]);
        div.setAttribute('data-type', m[2]);

        const script = document.createElement('script');
        script.src = 'https://scripts.convertcalculator.com/embed.js';
        script.async = true;

        p.replaceWith(div, script);
      }
    });
  };

  const ready = (fn) => {
    if (typeof window === 'undefined') return;

    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
      window.addEventListener('popstate', fn);
      window.addEventListener('mercury:load', fn);
    }
  };

  ready(() => {
    convertShortcodes();
  });
})();
