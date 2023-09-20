import Card from "../components/Card"

import bg from '../assets/code-image.jpeg'


const About = () => {

    return (
        <section>
            <h2>About Page</h2>
            {/* <p></p> */}

            <img src={bg} alt="" />

            <div>
                {/* Card */}
                <Card name={'Rayo'} desscription={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, itaque?'} btnTitle={'Read More'}/>
            </div>
        </section>
     
    )

}


export default About