const initLang = () => {
    const isFirst = sessionStorage.getItem('first_visit')
    if (isFirst) {
        console.log('cookieLang is not empty')
    } else {
        const browserLang = navigator.language
        const isChinese = window.location.href.includes('zh')
        if (browserLang === 'zh-CN') {
            if (!isChinese) {
                const path = window.location.pathname
                const newUrl = `/zh${path}`
                window.location.href = newUrl
            }
        } else {
            if (isChinese) {
                const path = window.location.pathname
                const newUrl = path.replace('/zh', '')
                console.log('else newUrl', newUrl)
                window.location.href = newUrl
            } else {
                return
            }
        }
        sessionStorage.setItem('first_visit', 'true')
    }
}

const createNotes = (title, content, okText, openUrl) => {
    const modal = document.createElement('div')
    modal.className = 'modalBox'
    // modal content
    modal.innerHTML = `
    <div class="modalContent">
        <h1 class="modalTitle">${title}</h1>
        <p class="modalNotes">${content}</p>
        <div class="modalButtons">
            <button id="modalOk">${okText}</button>
        </div>
    </div>
    `
    // add to document
    document.body.appendChild(modal)
    // add click event
    document.getElementById('modalOk').addEventListener('click', () => {
        modal.remove()
        if (openUrl) {
            window.open(openUrl, '_blank')
        }
    })
}

const initNotes = async () => {
    const ppnotesJson = await fetch(
        'https://file.pacbao.com/pakeplus/ppnotes.json'
    )
    const ppnotesJsonData = await ppnotesJson.json()
    console.log('ppnotesJsonData', ppnotesJsonData)
    const urlHref = window.location.href
    const isChinese = urlHref.includes('zh')
    const ppPathName = window.location.pathname
    const contentValue = isChinese
        ? ppnotesJsonData.zh.note
        : ppnotesJsonData.en.note
    const titleValue = isChinese ? 'PackPlus公告' : 'PakePlus Notice'
    const okTextValue = isChinese ? '确定' : 'OK'
    if (
        (ppnotesJsonData.webShow && ppPathName === '/zh/') ||
        ppPathName === '/'
    ) {
        contentValue &&
            localStorage.getItem('note') !== contentValue &&
            createNotes(
                titleValue,
                contentValue,
                okTextValue,
                ppnotesJsonData.openUrl
            )
        if (ppnotesJsonData.repeatShow) {
            console.log('repeatShow note')
        } else {
            localStorage.setItem('note', contentValue)
        }
    } else {
        console.log('ppnotesJsonData.show is false')
    }
}

// init lang and notes
initLang()
initNotes()
