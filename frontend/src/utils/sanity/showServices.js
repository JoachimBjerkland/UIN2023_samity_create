import { client } from "./client"

export const fetchAllShows = async () => {
    const data =  await client.fetch(`*[_type == "show"]`)
    return data
}