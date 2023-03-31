import url from "./url";

export async function IndexLoader() {
    const response = await fetch(url + "/people")
    const people = await response.json()
    return people
}

export async function ShowLoader ({ params }){
    const response = await fetch(url + "/people/" + params.id + "/")
    const gift = await response.json()
    return gift
}
