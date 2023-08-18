import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
// import prisma from '../../../../lib/prisma'
const prisma = new PrismaClient()
const validateFields = [{ field: 'email', message: 'el correo electronico ya existe!' }]

export const GET = async (req, res) => {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    let results = []

    if (id) {
      results = await prisma.contact.findUnique({
        where: {
          id: Number(id)
        }
      })
      return NextResponse.json({ message: 'OK', results: results ?? [] }, { status: 200 })
    } else {
      results = await prisma.contact.findMany()
      return NextResponse.json({ message: 'OK', results }, { status: 200 })
    }
  } catch (err) {
    return NextResponse.json({ message: 'Error', err }, { status: 500 })
  }
}

export const POST = async (req, res) => {
  const { firstname, lastname, email } = await req.json()
  try {
    const response = await prisma.contact.create({
      data: { firstname, lastname, email }
    })
    return NextResponse.json({ message: 'OK', response }, { status: 201 })
  } catch (err) {
    let message = ''
    if (err.meta.target.length > 0) message = validateFields.find(item => item.field === err.meta.target[0])?.message ?? ''
    return NextResponse.json({ message: 'Error ' + message ?? 'en la consulta valide su información.', err }, { status: 500 })
  }
}

export const PATCH = async (req, res) => {
  const { id, firstname, lastname, email } = await req.json()
  try {
    const response = await prisma.contact.update({
      where: { id: Number(id) },
      data: { firstname, lastname, email }
    })
    return NextResponse.json({ message: 'OK', response }, { status: 201 })
  } catch (err) {
    let message = ''
    if (err.meta.target.length > 0) message = validateFields.find(item => item.field === err.meta.target[0])?.message ?? ''
    return NextResponse.json({ message: 'Error ' + message ?? 'en la consulta valide su información.', err }, { status: 500 })
  }
}
