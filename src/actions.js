import { redirect } from "react-router-dom";
import url from "./url";

// PERSON CREATE ACTION
export async function CreateAction ({request}){
    // Gte form data
    const formData = await request.formData()

    // construct request body
    const newPerson = {
        name: formData.get("name"),
        // ask about whether or not you'll need gifts here
    }
    // send request to backend
    await fetch(url + "/addperson", {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPerson)
    })
    // redirect back to index page
    return redirect("/")
}

// PERSON UPDATE ACTION
export async function UpdateAction ({
    request, params }){
        // Get form data
        const formData = await request.formData()

    // construct request body
    const newPerson = {
        name: formData.get("name"),
        // ask about whether or not you'll need gifts heer
    }
    // send request to backend
    await fetch(url + params.id + "/",
    {
        method: "put",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPerson)
    })
    // redirect back to index page
    return redirect("/")
}

// PERSON DELETE ACTION 
export async function DeleteAction ({params}){
    // get the id
    const id = params.id

    // send request to delete
    await fetch(url + "/people/" + id + "/", {
        method: "delete"
    })

    // redirect
    return redirect("/")
}

////////////////////////////////////////////////////////////////////////

// GIFT CREATE ACTION
export async function GiftCreateAction ({request}){
    // Get form data
    const formData = await request.formData()

    // construct request body
    const newGift = {
        item: formData.get("item"),
        image: formData.get("image"),
        link: formData.get("link"),
        notes: formData.get("notes"),
    }
    // send request to backend
    await fetch(url + "/addgift/:personid", {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGift)
    })
    // redirect back to index page
    return redirect("/")
}

// GIFT UPDATE ACTION
export async function GiftUpdateAction ({
    request, params }){
        // Get form data
        const formData = await request.formData()

    // construct request body
    const newGift = {
        item: formData.get("item"),
        image: formData.get("image"),
        link: formData.get("link"),
        notes: formData.get("notes"),
    }
    // send request to backend
    await fetch(url + params.id + "/",
    {
        method: "put",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGift)
    })
    // redirect back to index page
    return redirect("/")
}

// GIFT DELETE ACTION 
export async function GiftDeleteAction ({params}){
    // get the id
    const id = params.id

    // send request to delete
    await fetch(url + id + "/", {
        method: "delete"
    })

    // redirect
    return redirect("/")
}
