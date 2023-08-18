'use client'
import React from 'react'
import TableList from '../components/contact/TableList'
import { getContacts } from '../lib/contacts'

export default function Page () {
  const [initialContacts, setInitialContacts] = React.useState([])
  // const initialContacts = await getContacts()

  const getData = async () => {
    try {
      const initialContacts = await getContacts()
      setInitialContacts(initialContacts)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <TableList data={initialContacts} />
      </div>
    </section>
  )
}
