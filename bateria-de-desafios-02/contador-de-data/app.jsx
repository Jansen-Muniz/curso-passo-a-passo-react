const handleClickMinusInterval = () => console.log('Clicou no menos do Intervalo')
const handleClickAddInterval = () => console.log('Clicou no mais do Intervalo')
const handleClickMinusStep = () => console.log('Clicou no menos da Contagem')
const handleClickAddStep = () => console.log('Clicou no mais da Contagem')

const App = () => (
  <div className="container">
    <div className="count">
      <button onClick={handleClickMinusInterval}>-</button>
      <h2>Intervalo: 1</h2>
      <button onClick={handleClickAddInterval}>+</button>
    </div>

    <div className="count">
      <button onClick={handleClickMinusStep}>-</button>
      <h2>Contagem: 0</h2>
      <button onClick={handleClickAddStep}>+</button>
    </div>
    <h2>Hoje é Domingo, 22 de out. de 2023</h2>
  </div>
)

export { App }
