import { blogs } from '../data/blog.js'
import '../css/Blog.css'

import { Container } from 'react-bootstrap'

import { useDocumentTitle } from '../Utilities'


export default function Blog () {

    useDocumentTitle('Blog | kanti')

    return (
        <Container>
            <header>Blog</header>
            <div className="not-home-split"></div>
            {blogs.map((data) => (
                Object.keys(data).map((blog) => (
                    <div className="blog" onClick={() => window.location.href = `/blog/${blog}`}>
                        <h4>{data[blog].title}</h4>
                        <p>{data[blog].desc}</p>
                        <span className='date'>{data[blog].date}</span>
                    </div>
                ))
            ))}
        </Container>
    )
}