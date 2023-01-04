export const dynamicGetImg = (name: string) => {
    try {
        return new URL(`../assets/images/${name}`, import.meta.url).href
    } catch (error) {
        console.log(error)
    }
}