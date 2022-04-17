export function customizeUrl(url) {
  if (window.location.href.includes(url)) {
    return window.history.replaceState(
      null,
      null,
      `http://127.0.0.1:446/${url}.html`
    );
  }
}
