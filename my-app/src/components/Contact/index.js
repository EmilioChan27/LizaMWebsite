import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import {useState, useEffect} from 'react'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 3000)
    // }, [])

    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                        idx={15}/>
                </h1>
                <p>
                   This is some sample text that contains enough text to show that we have some 
                   things to say. 
                </p>
                <div className="contact-form">
                    <form>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeHolder="Name" required/>
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeHolder="Email" required/>
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message"
                                name="message"
                                required />
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
};


export default Contact;