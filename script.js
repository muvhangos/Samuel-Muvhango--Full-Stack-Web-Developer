// Typing effect function
function typeText(elementId, text, speed = 80, callback = null) {
  const el = document.getElementById(elementId);
  el.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, speed);
}

// Sequence typing
typeText('typed-name', 'Samuel Muvhango', 100, () => {
  typeText('typed-role', 'Full-Stack Developer', 80, () => {
    typeText('typed-desc', 'Passionate about building scalable applications using modern technologies.', 50);
  });
});
