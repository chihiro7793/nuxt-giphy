export const sliceArray = (array, currentPage, size) => {
    return array.slice(currentPage * size, currentPage * size + size)
}