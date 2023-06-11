import { BiEditAlt } from 'react-icons/bi';
import { HiSaveAs } from 'react-icons/hi';
import { CgTrash } from 'react-icons/cg';
import './styles.scss';


export const Historic = () => {
  return (
    <div className='historic-container'>
      <div className='wrapper-title'>
        <h3 className='historic-title'>Diagnóstico:</h3><span className='diagnosis'>Insuficiência Renal Crônica</span>
      </div>
      <h4 className='subtitles'>
        <span>Antecedentes Médicos:</span>
        <span className='historic-icon'>
          <BiEditAlt size={30} color="#0b936f"/> <HiSaveAs size={30} color="#666666"/> <CgTrash size={30} color="#e35262"/>
        </span>
      </h4>
      <ul className='list-container'>
        <li className='item'>O paciente foi diagnosticado com deficiência renal crônica há aproximadamente 2 anos.</li>
        <li className='item'>Ele tem histórico de hipertensão arterial.</li>
        <li className='item'>Também foi diagnosticado com diabetes tipo 2.</li>
      </ul>
      <h4 className='subtitles'>
        <span>Tratamento / Cuidados:</span>
        <span className='historic-icon'>
            <BiEditAlt size={30} color="#0b936f"/> <HiSaveAs size={30} color="#666666"/> <CgTrash size={30} color="#e35262"/>
        </span>
      </h4>
      <ul className='list-container'>
        <li className='item'>O paciente recebe tratamento para controlar a pressão arterial e o diabetes, o que ajuda a retardar a progressão da doença renal.</li>
        <li className='item'>Ele segue uma dieta especia, com restrição de sódio, potássio e fósforo.</li>
        <li className='item'>Realiza hemodiálise 3 vezes por semana.</li>
        <li className='item'>Está sob supervisão médica regular e faz exames de sangue e urina para monitorar a função renal e ajustar a medicação, se necessário.</li>
        <li className='item'>Limite de ingestão de água 600ml diária.</li>
      </ul>
      <h4 className='subtitles'>
        <span>Recomendações:</span>
        <span className='historic-icon'>
          <BiEditAlt size={30} color="#0b936f"/> <HiSaveAs size={30} color="#666666"/> <CgTrash size={30} color="#e35262"/>
        </span>
      </h4>
      <ul className='list-container'>
        <li className='item'>O paciente deve adotar um estilo de vida saudável, incluindo uma alimentação equilibrada e exercícios físicos adequados à sua condição.</li>
        <li className='item'>É essencial comparecer às consultas médicas regularmente e seguir as orientações do médico e da equipe de saúde.</li>
        <li className='item'>O paciente também pode ser encaminhado a um psicólogo ou grupo de apoio para lidar com os aspectos emocionais e psicológicos associados à deficiência renal.</li>
      </ul>
      <h4 className='subtitles'>
        <span>Observações:</span>
        <span className='historic-icon'>
          <BiEditAlt size={30} color="#0b936f"/> <HiSaveAs size={30} color="#666666"/> <CgTrash size={30} color="#e35262"/>
        </span>
      </h4>
      <ul className='list-container'>
        <li className='item'>Cada caso de deficiência renal é único, e o tratamento pode variar de acordo com a gravidade da condição e a resposta individual do paciente.</li>
        <li className='item'>É importante que o paciente mantenha uma comunicação aberta com a equipe médica, relatando quaisquer sintomas, preocupações ou alterações na saúde.</li>
        <li className='item'>Mora com a esposa e dois filhos. Possui um irmão com deficiência renal crônica.</li>
      </ul>
  </div>
  )
}