import React from 'react'
import TableList from '@/components/contact/TableList'
import { getContacts } from '../lib/contacts'

Page.getInitialProps = async (ctx) => {
  const initialContacts = await getContacts()
  console.log(initialContacts)
  return { initialContacts }
}

export default async function Page ({ initialContacts }) {
  // const initialContacts = await getContacts()
  console.log(initialContacts)
  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <TableList data={initialContacts} />
      </div>
    </section>
  )
}