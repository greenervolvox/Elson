import PropType from 'prop-types'

function Item({marca, ano_lancamento}){
    return(
        <>
        <li>
            {marca} - {ano_lancamento}
          </li>
            </>
    )
}

Item.PropType = {
    marca: PropType.string,isRequired,
    ano_lancamento: PropType.number,
}

Item.defaultProps ={
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default Item