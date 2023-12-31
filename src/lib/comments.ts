import { sql } from '@vercel/postgres'

import short from 'short-uuid'

export async function saveComment(userName: string, content: string, slug: string) {
    const uuid = short.generate()

    await sql `INSERT INTO comments(id, slug, username, content) VALUES  (${uuid}, ${slug}, ${userName}, ${content})`

    return uuid
}

export async function getComments(slug:string) {
    return await sql`SELECT * FROM comments WHERE slug=${slug}`
}