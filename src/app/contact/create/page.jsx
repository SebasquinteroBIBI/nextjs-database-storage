'use client'
import React from 'react'
import { postContacts } from '../../../lib/contacts'
import { useSnackbar } from 'notistack'

export default function Page () {
  const { enqueueSnackbar } = useSnackbar()
  const formRef = React.useRef(null)

  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const data = new FormData(event.currentTarget)

      const sendBody = {
        firstname: data.get('firstname'),
        lastname: data.get('lastname'),
        email: data.get('email')
      }

      await postContacts(sendBody).then((result) => {
        formRef.current.reset()
        enqueueSnackbar('Creado con exito', { variant: 'success', autoHideDuration: 3000 })
      })
    } catch (e) {
      enqueueSnackbar(e.message, { variant: 'error', autoHideDuration: 3000 })
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Crear Contacto
          </h2>
          <form ref={formRef} className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Nombre
              </label>
              <input type="text" name="firstname" id="firstname" placeholder="Nombre" requiredclassName="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Apellidos
              </label>
              <input type="text" name="lastname" id="lastname" required placeholder="Apellidos" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Correo Electronico
              </label>
              <input type="email" name="email" id="email" required placeholder="example@domain.com" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div>
              <button className="hover:shadow-form rounded-md bg-[#41a387] py-3 px-8 text-base font-semibold text-white outline-none">
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
