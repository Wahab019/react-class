// import Link from 
const Card = ({name, desscription, btnTitle}) => {

    return (
    <div>
        <h2>
            {name}
        </h2>
        <p>{desscription}</p>

        <button>
            {btnTitle}
        </button>
    </div>
     
    )

}


export default Card