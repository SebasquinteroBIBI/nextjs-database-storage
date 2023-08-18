import React from 'react'
import TableList from '@/components/contact/TableList'
import { getContacts } from '../lib/contacts'

export default async function Page () {
  const initialContacts = await getContacts()

  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
        <TableList data={initialContacts} />
      </div>
      <footer className="relative pt-8 pb-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              {/* <div class="text-sm text-blueGray-500 font-semibold py-1">
                Made with <a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" class="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
