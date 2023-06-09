import { BiEditAlt } from 'react-icons/bi';
import { HiSaveAs } from 'react-icons/hi';
import { CgTrash } from 'react-icons/cg';
import './styles.scss';

export const DayParams = () => {
  return (
    <>
    <div className='day-container'>
      <h4 className='day-label'>
        <div>
          <span>Diálise dia:</span>
          <span className='data'>14/06/2023</span>
        </div>
        <span className='day-icon'>
          <BiEditAlt size={30} color="#0b936f"/> <HiSaveAs size={30} color="#666666"/> <CgTrash size={30} color="#e35262"/>
        </span>
      </h4>
      <div className='params'>
        <ul className='params-container'>
          <li className='item'>PESO SECO:<span className='params-data'style={{backgroundColor:"#73d2c3"}}>63 kg</span></li>
          <li className='item'>PESO PRÉ:<span className='params-data'style={{backgroundColor:"#cccccc"}}>67 kg</span></li>
          <li className='item'>PESO PÓS:<span className='params-data' style={{backgroundColor:"#e35262"}}>64 kg</span></li>
        </ul>
        <ul className='params-container'>
          <li className='item pa'>1 Hora PA: <span>150x100 mmHg</span></li>
          <li className='item pa'>2 Hora PA: <span>160x90 mmHg</span></li>
          <li className='item pa'>3 Hora PA: <span>140x90 mmHg</span></li>
          <li className='item pa'>4 Hora PA: <span>140x90 mmHg</span></li>
        </ul>
        <ul className='params-container'>
          <li className='item pa'>Solução Básica: <span>3.5</span></li>
          <li className='item pa'>Solução Ácida: <span>2.5</span></li>
          <li className='item pa'>Heparina: <span>3ml</span></li>
          <li className='item pa'>Dieta: <span>Parcialmente</span></li>
        </ul>
        <ul className='params-container'>
          <li className='item pa'>Locomoção: <span>Deambulante</span></li>
          <li className='item pa'>Acesso: <span>Fístula - Agulha 16g</span></li>
        </ul>
      </div>
      <h4 className='day-label'>
        <div>
          <span>Diálise dia:</span>
          <span className='data' style={{backgroundColor:'#e0bb26'}}>12/06/2023</span>
        </div>
        <span className='day-icon'>
          <BiEditAlt size={30} color="#0b936f"/> <HiSaveAs size={30} color="#666666"/> <CgTrash size={30} color="#e35262"/>
        </span>
      </h4>
      <div className='params'>
        <h2 className='absence'>Paciente não se apresentou para o tratamento nessa data.</h2>
      </div>
    </div>
    </>
  )
}