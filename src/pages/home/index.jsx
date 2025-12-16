import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const users = [{
    id: 'wkefhwqui',
    name: 'Cleiton',
    age: 33,
    email: 'cleit@email.com',
  },
  {
    id: 'wqdwhdkj',
    name: 'Jeff',
    age: 29,
    email: 'jeff@email.com',
  },
  {
    id: 'wiuqqbyg1j',
    name: 'Carol',
    age: 26,
    email: 'carol@email.com',
  }, 
  ]}
  

return (
  <div className='container'>
    <form>
      <h1>Cadastro de Usuários</h1>
      <input placeholder="Nome" name='nome' type='text' />
      <input placeholder="Idade" name='idade' type='number' />
      <input placeholder="E-mail" name='email' type='email' />
      <button type='button'>Cadastrar</button>
    </form>

    {users.map(user => (
      <div key={user.id} className="card">
        <div>
          <p>Nome: <span>{user.name}</span></p>
          <p>Idade: <span>{user.age}</span></p>
          <p>Email: <span>{user.email}</span></p>
        </div>
        <button>
          <img src={Trash} />
        </button>
      </div>


    ))}

  </div>
)


export default Home