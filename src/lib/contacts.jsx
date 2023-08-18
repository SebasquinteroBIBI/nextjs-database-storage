import apiCli from '../app/api/apiService'

export const getContacts = async () => {
  const response = await apiCli.get('contacts/')

  return response.data
}

export const getContactByID = async (params) => {
  const { id } = params

  if (id) {
    const response = await apiCli.get(`contacts/?id=${id}`)
    return response.data
  }
}

export const postContacts = async (body) => {
  const response = await apiCli.post('contacts/', body)

  return response.data
}

export const patchContact = async (body) => {
  const response = await apiCli.patch('contacts/', body)

  return response.data
}

export async function getStaticProps () {
  console.log('GET')
  const initialContacts = await getContacts()
  console.log(initialContacts)

  return { props: { initialContacts } }
}
