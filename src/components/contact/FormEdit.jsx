'use client'
import React from 'react'
import { useSnackbar } from 'notistack'
import { patchContact } from '@/lib/contacts'

export default function FormEdit ({ data, params }) {
  const { enqueueSnackbar } = useSnackbar()
  const [contact, setContact] = React.useState({
    firstname: '',
    lastname: '',
    email: ''
  })

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const data = new FormData(event.currentTarget)
      const sendBody = {
        id: params.id,
        firstname: data.get('firstname'),
        lastname: data.get('lastname'),
        email: data.get('email')
      }
      await patchContact(sendBody).then((result) => {
        enqueueSnackbar('Actualizado con exito', { variant: 'success', autoHideDuration: 3000 })
      })
    } catch (e) {
      enqueueSnackbar(e.message, { variant: 'error', autoHideDuration: 3000 })
    }
  }

  React.useEffect(() => {
    if (data.results) {
      setContact(data.results)
    }
  }, [data])

  return (
    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label className="mb-3 block text-base font-medium text-[#07074D]">
          Nombre
        </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Nombre"
          value={contact.firstname}
          onChange={(e) => setContact({ ...contact, firstname: e.target.value })}
          required
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label className="mb-3 block text-base font-medium text-[#07074D]">
          Apellidos
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          required
          placeholder="Apellidos"
          value={contact.lastname}
          onChange={(e) => setContact({ ...contact, lastname: e.target.value })}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label className="mb-3 block text-base font-medium text-[#07074D]">
          Correo Electronico
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="example@domain.com"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div>
        <button className="hover:shadow-form rounded-md bg-[#41a387] py-3 px-8 text-base font-semibold text-white outline-none">
          Actualizar
        </button>
      </div>
    </form>
  )
}
