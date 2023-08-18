import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()

export const GET = async (req, res) => {
    try {
        const { id } = res.params

        const results = await prisma.contact.findUnique({
            where: {
                id: Number(id)
            }
        })
        return NextResponse.json({ message: 'OK', results: results ?? [] }, { status: 200 })
    } catch (err) {
        console.log('Error')
        return NextResponse.json({ message: 'Error', err }, { status: 500 })
    }
}