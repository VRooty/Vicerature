import { getComments, saveComment } from "@/lib/comments";
import { NextRequest, NextResponse } from 'next/server'


export async function GET(request: NextRequest, {params} : {params: {slug: string}}) {
 
    try {
        const slug = params.slug;
        const comments = await getComments(slug)
        return NextResponse.json({comments})
    } catch (error) {
        return NextResponse.json({message: "that didn't work!"})
    }
}

export async function POST(request: NextRequest, {params} : {params: {slug: string}}) {
    const slug = params.slug

    const formData = await request.formData()
    const username = formData.get('username') as string;
    const comment = formData.get('comment') as string;
}