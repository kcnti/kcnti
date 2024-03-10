import { useParams } from 'react-router'
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Markdown from 'markdown-to-jsx';

import { blogs } from '../data/blog';

export function MarkdownBlog () {

    let { blogName } = useParams();
    let [ content, setContent] = useState("");
    let [ desc, setDesc ] = useState("");
    let [ date, setDate ] = useState("");
    let [ loading, setLoading ] = useState(true)

    useEffect(()=> {
        import(`../content/blogs/${blogName}.md`)
            .then(module => {
                fetch(module.default)
                    .then((res) => res.text())
                    .then((md) => {
                        blogs.map(data => {
                            Object.keys(data).map(blog => {
                                if (blog === blogName) {
                                    setDesc(data[blog].desc)
                                    setDate(data[blog].date)
                                }
                            })
                        })
                        setContent(md);
                        setLoading(false);
                    });
            })
    }, [blogName])

    return (
        <Container>
            <header>{blogName}</header>
            <sub-header>{desc} <span className="date">{date}</span></sub-header>
            <div className="not-home-split"></div>
            <div className="markdown">
                { loading ? <h1>Loading...</h1> :
                    <Markdown children={content} options={{ wrapper: 'Container' }} />
                }
            </div>
        </Container>
    )
}