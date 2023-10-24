const buttonMinusInterval = () => console.log('Clicou no menos do Intervalo')
const buttonAddInterval = () => console.log('Clicou no mais do Intervalo')
const buttonMinusStep = () => console.log('Clicou no menos da Contagem')
const buttonAddStep = () => console.log('Clicou no mais da Contagem')

const App = () => (
  <div className="container">
    <div className="count">
      <button onClick={buttonMinusInterval}>-</button>
      <h2>Intervalo: 1</h2>
      <button onClick={buttonAddInterval}>+</button>
    </div>

    <div className="count">
      <button onClick={buttonMinusStep}>-</button>
      <h2>Contagem: 0</h2>
      <button onClick={buttonAddStep}>+</button>
    </div>
    <h2>Hoje é Domingo, 22 de out. de 2023</h2>
  </div>
)

export { App }
