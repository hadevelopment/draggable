let region;

export default function announce(message, expire = 7000) {
  const element = document.createElement('div');
  element.innerHTML = message;
  region.appendChild(element);
  return setTimeout(() => {
    region.removeChild(element);
  }, expire);
}

document.addEventListener('DOMContentLoaded', () => {
  region = createRegion();
  document.body.appendChild(region);
});

function createRegion() {
  const element = document.createElement('div');

  element.setAttribute('aria-live', 'assertive');
  element.setAttribute('role', 'status');
  element.setAttribute('aria-relevant', 'additions');
  element.setAttribute('aria-atomic', 'false');

  element.style.position = 'absolute';
  element.style.width = '1px';
  element.style.height = '1px';
  element.style.marginTop = '-1px';
  element.style.clip = 'rect(1px, 1px, 1px, 1px)';
  element.style.overflow = 'hidden';

  return element;
}
