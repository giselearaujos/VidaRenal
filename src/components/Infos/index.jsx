import './styles.scss'

export const Infos = () => {
  return (
    <div className='info-container'>
    <section className="info-profile">
      <div className='info-wrapper'>
        <div className='info-row'><label class='info-label' htmlFor='#'>Paciente:</label> <span class='info-user-data'>Benedito da Silva</span></div>
        <div className='info-row'><label class='info-label' htmlFor='#'>Idade:</label> <span class='info-user-data'>72 anos</span></div>
        <div className='info-row'><label class='info-label' htmlFor='#'>Sorologia:</label><span class='info-user-data'> Negativo</span></div>
        <div className='info-row'><label class='info-label' htmlFor='#'>RG:</label> <span class='info-user-data'>11.111.111</span>  </div>
        <div className='info-row'><label class='info-label' htmlFor='#'>CPF:</label> <span class='info-user-data'>77.777.77</span></div>
        <div className='info-row'><label class='info-label' htmlFor='#'>Nasc:</label> <span class='info-user-data'>03/07/1950</span></div>
        <div className='info-row'><label class='info-label' htmlFor='#'>N°SUS:</label> <span class='info-user-data'>23-456</span>  </div>
        <div className='info-row'><label class='info-label' htmlFor='#'>Box:</label> <span class='info-user-data'>2</span></div>
        <div className='info-row'><label class='info-label' htmlFor='#'>Assento:</label> <span class='info-user-data'>14</span></div>
        <div className='info-row'><label class='info-label' htmlFor='#'>Turno:</label> <span class='info-user-data'>Seg/Qua/Qui</span></div>
        <div className='info-row'><label class='info-label' htmlFor='#'>Período:</label> <span class='info-user-data'>Manhã</span></div>
        <div className='info-row'><label class='info-label' htmlFor='#'>Acesso:</label> <span class='info-user-data'> MSE - FAV</span></div>
      </div>
    </section>
    </div>
  )
};