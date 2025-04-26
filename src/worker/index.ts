export {}

chrome.contextMenus.create({
  id: 'startRecord',
  title: '녹화 시작하기',
})

chrome.contextMenus.onClicked.addListener((_info, tab) => {
  if (!tab?.id) return
  chrome.scripting.executeScript({
    files: ['dist/content.js'],
    target: { tabId: tab.id },
    world: 'MAIN',
  }).catch(() => {})
})
