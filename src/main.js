const sounds = [
  {
    label: "Hell's Kitchen",
    url: './public/sounds/Kitchen.mp3',
    icon: 'bell',
    accent: '#ffce5c',
  },
  {
    label: 'Vine Boom',
    url: './public/sounds/VineBoom.mp3',
    icon: 'burst',
    accent: '#ff6b8a',
  },
  {
    label: 'Siren',
    url: './public/sounds/999-social-credit-siren.mp3',
    icon: 'siren',
    accent: '#4ed7ff',
  },
  {
    label: 'Μην χειροδικείτε',
    url: './public/sounds/MinXeirodikeite.mp3',
    icon: 'hand',
    accent: '#75f0b5',
  },
]

const futureSlots = Array.from({ length: 4 }, (_, index) => ({
  label: `Future sound ${index + 1}`,
  icon: 'plus',
  accent: '#8e9aaf',
}))

const iconPaths = {
  bell: '<path d="M6.2 10.4c.2-3.6 2.2-6.3 5.8-6.3s5.6 2.7 5.8 6.3l.2 3.2 1.4 2.4H4.6L6 13.6l.2-3.2Z"/><path d="M9.4 18.1a2.8 2.8 0 0 0 5.2 0"/>',
  burst: '<path d="m12 2 1.5 6.1L19 4.8l-3.3 5.5L22 12l-6.3 1.7L19 19.2l-5.5-3.3L12 22l-1.5-6.1L5 19.2l3.3-5.5L2 12l6.3-1.7L5 4.8l5.5 3.3L12 2Z"/>',
  siren: '<path d="M7 15V9a5 5 0 0 1 10 0v6"/><path d="M5 15h14l1.2 4H3.8L5 15Z"/><path d="M12 2v2"/><path d="m4.4 5 1.4 1.4"/><path d="m19.6 5-1.4 1.4"/>',
  hand: '<path d="M8 12V5.7a1.4 1.4 0 1 1 2.8 0V11"/><path d="M10.8 11V4.7a1.4 1.4 0 1 1 2.8 0V11"/><path d="M13.6 11V6a1.4 1.4 0 1 1 2.8 0v6.2"/><path d="M8 12.2 6.5 10a1.5 1.5 0 0 0-2.4 1.8l3.1 5.1A6.2 6.2 0 0 0 12.6 20h.9a4.9 4.9 0 0 0 4.9-4.9V9a1.4 1.4 0 1 0-2.8 0v3"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
}

function formatLabel(label) {
  const words = label.split(' ')
  return words.length > 2
    ? `${words[0]} ${words[1]}\n${words.slice(2).join(' ')}`
    : label
}

function createIcon(name) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('viewBox', '0 0 24 24')
  svg.setAttribute('aria-hidden', 'true')
  svg.innerHTML = iconPaths[name]
  return svg
}

function playSound(sound, button) {
  const audio = new Audio(sound.url)

  button.classList.add('is-playing')
  window.setTimeout(() => button.classList.remove('is-playing'), 420)

  audio.addEventListener('ended', () => {
    button.classList.remove('is-playing')
  })

  audio.play().catch(() => {
    button.classList.remove('is-playing')
  })
}

function createSoundButton(sound) {
  const button = document.createElement('button')
  button.className = 'sound-button'
  button.type = 'button'
  button.style.setProperty('--accent', sound.accent)
  button.setAttribute('aria-label', `Play ${sound.label}`)

  const icon = document.createElement('span')
  icon.className = 'sound-button__icon'
  icon.append(createIcon(sound.icon))

  const label = document.createElement('span')
  label.className = 'sound-button__label'
  label.textContent = formatLabel(sound.label)

  button.append(icon, label)
  button.addEventListener('click', () => playSound(sound, button))

  return button
}

function createPlaceholderButton(slot) {
  const button = document.createElement('button')
  button.className = 'sound-button sound-button--placeholder'
  button.type = 'button'
  button.disabled = true
  button.style.setProperty('--accent', slot.accent)
  button.setAttribute('aria-label', slot.label)

  const icon = document.createElement('span')
  icon.className = 'sound-button__icon'
  icon.append(createIcon(slot.icon))

  button.append(icon)

  return button
}

function createApp() {
  const shell = document.createElement('main')
  shell.className = 'app-shell'

  const stage = document.createElement('section')
  stage.className = 'soundboard-stage'
  stage.setAttribute('aria-label', "Hacky's Soundboard")

  const panel = document.createElement('div')
  panel.className = 'soundboard'

  const grid = document.createElement('div')
  grid.className = 'soundboard__grid'
  sounds.forEach((sound) => grid.append(createSoundButton(sound)))
  futureSlots.forEach((slot) => grid.append(createPlaceholderButton(slot)))

  panel.append(grid)
  stage.append(panel)
  shell.append(stage)

  return shell
}

document.querySelector('#app').append(createApp())
