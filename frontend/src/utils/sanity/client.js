import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "dr67asls",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
})

export const writeClient = createClient({
    token: "skwwO8CGvgROsGVSIrYvpljPl7yTYzfF34fYpV9vBKnRXY6y0e8ST1VZGJqrQc1daceLZRoKBSgTtOKaYHd641tSOt5gy0ODSyWIZXdAtztBwp993E5jJyUZvZnUcZoqSdzbDya2gAHbK4yuHHf5t36hHCjGpfvemV2UzkdENLnj6MwZffyO",
    projectId: "dr67asls",
    dataset: "production"
})