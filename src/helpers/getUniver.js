import data from '../data.json'

function getUniver() {
    const slug = window.location.pathname.slice(1, window.location.pathname.length + 1)
    const univer = data.filter((item) => item.slug === slug)[0]
    return univer
}

export default getUniver