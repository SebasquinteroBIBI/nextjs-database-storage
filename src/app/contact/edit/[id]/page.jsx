'use client'
import React from 'react'
import { getContactByID } from '../../../../lib/contacts'
import FormEdit from '../../../../components/contact/FormEdit'

export default function Page ({ params }) {
  const [contact, setContact] = React.useState({})

  const getData = async () => {
    try {
      const contact = await getContactByID(params)
      setContact(contact)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Editar Contacto
          </h2>

          <FormEdit data={contact} params={params} />

        </div>
      </div>
    </section>
  )
}
