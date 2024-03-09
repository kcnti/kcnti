import '../css/Blog.css'

import { Container } from 'react-bootstrap'

import { useDocumentTitle } from '../Utilities'

export function Blog () {

    useDocumentTitle('Blog | kanti')

    return (
        <Container>
            <header>Blog</header>
            <div className="not-home-split"></div>
            <h4>Not yet sorry :(</h4>
        </Container>
    )
}