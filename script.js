const red = '#ff4040'
const defaultColor = document.getElementsByClassName('td')[0].style.backgroundColor


function findElem(){
    let title = document.getElementById('search-text').value.toLowerCase()

    let titleDivs = [...[...document.getElementsByClassName('td')]
        .filter(elem => elem.dataset.label==='Автор')
    ]
    const foundDivs = []
    const otherDivs = []
    titleDivs.forEach(elem => {
        elem.style.backgroundColor = defaultColor
        elem.innerText.toLowerCase().indexOf(title) === -1 ? otherDivs.push(elem) : foundDivs.push(elem);
    })

    otherDivs.forEach(elem => elem.style.backgroundColor = defaultColor)
    if(!title) return
    foundDivs.forEach(elem => elem.style.backgroundColor = red)

}