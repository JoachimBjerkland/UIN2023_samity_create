import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchShow } from "../utils/sanity/showServices"

export default function Show() {

    const {id} = useParams()
    const [show, setShows] = useState(null)

    async function getShow(id) {
        const data = await fetchShow(id)
        setShows(data[0])
    }

    useEffect (() => {
        getShow(id)
    }, [id])

    console.log(show)

    return (
        <article>
            <h2>{show?.title}</h2>
            <ul>
                {show?.review?.map((r,i) => <li key={(i)}><p>{r.name}</p></li>)}
            </ul>
        </article>
    )
}