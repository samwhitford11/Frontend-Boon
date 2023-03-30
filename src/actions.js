import { redirect } from "react-router-dom";
import url from "./url";

// PERSON CREATE ACTION
export async function CreateAction ({request}){
    // Get form data
    const formData = await request.formData()

    // construct request body
    const newPerson = {
        name: formData.get("name"),
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
        // console.log("params" , params.id)
    // construct request body
    const updatedPerson = {
        name: formData.get("name"),
    }
    // send request to backend
    await fetch(url + "/people/" + params.id + "/",
    {
        method: "put",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPerson)
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
    console.log("test", formData.get("personid"))

    // construct request body
    const newGift = {
        item: formData.get("item"),
        image: formData.get("image"),
        link: formData.get("link"),
        notes: formData.get("notes"),
    }
    // send request to backend
    await fetch(url + "/addgift/" + formData.get("personid") + "/", {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGift)
        
    })
    // redirect back to show page
    return redirect("/post/" + formData.get("personid"))
}


// GIFT UPDATE ACTION
export async function GiftUpdateAction ({
    request, params }){
        // Get form data
        let formData = await request.formData()

        let personid = formData.get("personid")
        

    // construct request body
    const updateGift = {
        item: formData.get("item"),
        image: formData.get("image"),
        link: formData.get("link"),
        notes: formData.get("notes"),
    } 
    
//     // send request to backend
    await fetch(url + "/gift/" + params.id + "/",
    {
        method: "put",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateGift)
    })
//     // redirect back to show page
    return redirect("/post/" + personid)
    // return redirect ("/")
}

// GIFT DELETE ACTION 
export async function GiftDeleteAction ({params}){
    // get the id
    const id = params.id
    console.log("params.id", id)

    // send request to delete
    await fetch(url + "/gift/" + id + "/", {
        method: "delete"
    })

    // redirect
    return redirect("/post/" + params)
}
