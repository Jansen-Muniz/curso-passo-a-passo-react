const App = () => {
  const handleClickToggle = (e) => console.log(e.target.textContent)
  const handlePreviousStep = (e) => console.log(e.target.textContent)
  const handleNextStep = (e) => console.log(e.target.textContent)

  return (
    <>
      <div className="container-close">
        <div className="close" onClick={handleClickToggle}>Fechar</div>
      </div>

      <div className="steps">
        <div className="numbers">
          <div className="active">1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <h3 className="message">
          Passo 1: entender o problema do cliente
        </h3>

        <div className="buttons">
          <button onClick={handlePreviousStep}>
            <span>Anterior</span>
          </button>
          <button onClick={handleNextStep}>
            <span>Próximo</span>
          </button>
        </div>
      </div>
    </>
  )
}

export { App }
