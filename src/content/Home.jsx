import '../css/Home.css'
import { Container, Col, Row } from 'react-bootstrap'

function Home() {

  return (
    <>
    <Container>
      <div className="header">
        <h1>K A N T I</h1>
        <p>Earth</p>
      </div>
    </Container>
    <div className="split"></div>
    <Container>
      <div className="hub">
        <Row className='justify-content-md-center'>
          <Col md="auto" align='center'>
            <div className='portal' onClick={() => window.location.href = '/'}>
              <span>Home</span>
            </div> 
          </Col>
          <Col md="auto" align='center'>
            <div className='portal' onClick={() => window.location.href = '/about'}>
              <span>About</span>
            </div> 
          </Col>
          <Col md="auto" align='center'>
            <div className='portal' onClick={() => window.location.href = '/blog'}>
              <span>Blog</span>
            </div> 
          </Col>
        </Row>
      </div>
    </Container>
    <div className="split"></div>
    <div className='footer'>Hi</div>
    </>
  )
}

export default Home
