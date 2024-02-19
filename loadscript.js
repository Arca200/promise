function loadScript (src, callback) {
  const script = document.createElement('script')
  script.src = src
  script.onload = () => callback(null, script)
  script.onerror = () => callback(new Error('Could not load script'))
  document.body.appendChild(script)
}