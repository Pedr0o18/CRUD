import './App.css'

import { useState } from 'react'

function App() {

  const [nome, setNome] = useState("")
  const [valor, setValor] = useState("")
  const [produtos, setProdutos] = useState([])

  const handleSave = () => {
    
    const novoProduto = {
      id: Date.now(),
      nome,
      valor
    }
  
    setProdutos([...produtos, novoProduto])
    setNome("")
    setValor("")

  }

  const handleDelete = (id) => {
    const produtosAtt = produtos.filter(produto => produto.id !== id)
    setProdutos(produtosAtt)
  }

  return (
    <div className="App">
      <header>
        <h1>Registro de Produtos</h1>
      </header>
      <main>
        <nav className='registerArea'>
          <label>
            <span>Nome: </span>
            <input type="text" name="nomeProduto" id="productName" required placeholder='nome do produto' onChange={(evt) => setNome(evt.target.value)}/>
          </label>
          <label>
            <span>Valor: </span>
            <input type="number" name="valorProduto" id="productPrice" required placeholder='valor do produto'onChange={(evt) => setValor(evt.target.value)} />
          </label>
          <button onClick={handleSave}>Salvar</button>
        </nav>
        <nav className='displayArea'>
          <ul>
            {produtos.map((produto) => (
              <li key={produto.id}>
                {produto.nome} - R${produto.valor}
                <button onClick={() => handleDelete(produto.id)}>Excluir</button>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  )
}

export default App
