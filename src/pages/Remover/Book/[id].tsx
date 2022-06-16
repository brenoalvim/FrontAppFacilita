import { useRouter } from 'next/router'

export default function removeUser() {
  const router = useRouter()
  removeUser(router.query.id)

  async function removeUser(id: any) {
    const response = await fetch(`http://127.0.0.1:8000/api/books/${id}`, {
      method: 'DELETE',
      redirect: 'follow'
    })

    console.log(response)

    if (response.status === 200) {
      alert('Livro removido com sucesso')
      window.close()
    }
  }

  return (
    <>
      <></>
    </>
  )
}
