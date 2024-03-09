import '../css/About.css'
import { Container } from 'react-bootstrap'
import {activities, competition} from '../data/data.js'

import { useDocumentTitle } from '../Utilities.jsx'


export default function About () {

    useDocumentTitle('About | kanti')

    return (
    <>
        <Container>
            <header>About</header>
            <div className="not-home-split"></div>
            <div className="section">
                <h4>Me</h4>
                <ul>
                    <li>Name: Kantinun</li>
                    <li>Nickname: Earth</li>
                    <li>Date of Birth: 27 Feb 2004</li>
                    <li>Education
                        <ul>
                            <li>Denla (Phetkasem)</li>
                            <li>Satit Prasarnmit Demonstration School (Primary)</li>
                            <li>Satit Prasarnmit Demonstration School (Secondary)</li>
                            <li>Chulalongkorn University</li>
                        </ul>
                    </li>
                </ul>
                <div className='social-box' onClick={() => window.open("https://www.linkedin.com/in/earthktn/", '_blank')}>Linkedin</div>
                    <div className='social-box' onClick={() => window.open("https://github.com/kcnti/", "_blank")}>Github</div>
                    <div className='social-box' onClick={() => window.open("https://monkeytype.com/profile/kcnti", "_blank")}>Monkeytype</div>
                    <div className='social-box' onClick={() => window.open("https://data.typeracer.com/pit/profile?user=gunjique&ref=badge", "_blank")}>Typeracer</div>
            </div>
            <div className="not-home-split"></div>
            <div className="section">
                <h4>Activity</h4>
                <ul>
                    {activities.map((data, idx) => (
                        <>
                            <li key={idx}>{data}</li>
                        </>
                    ))}
                </ul>
            </div>
            <div className="not-home-split"></div>
            <div className="section">
                <h4>Competition</h4>
                <ul>
                    {competition.map(data => (
                        Object.keys(data).map((title, idx) => (
                            <li key={idx}>
                                {title}
                                <ul key={title}>
                                    <li key="1">{data[title].ranking}</li>
                                    <li key="2">Issued by <span style={{ color: '#D5CEA3' }}>{data[title].issuer}</span></li>
                                    <li key="3">Date: <span style={{ color: '#D5CEA3' }}>{data[title].date}</span></li>
                                    <li key="4">Cert: {data[title].certificates !== 'no cert' ? <img style={{ width: 100, display: "block" }} src={data[title].certificates} /> : 'no cert'}</li>
                                </ul>
                            </li>
                        ))
                    ))}
                </ul>
            </div>
            <div className="not-home-split"></div>
            <div className="section">
                <h4>ETC.</h4>
                <p>not yet</p>
            </div>
        </Container>
    </>
    )
}