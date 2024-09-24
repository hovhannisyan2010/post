import React from 'react'
import Header from './Header'
import CardPost from './CardPost'
import { useState, useEffect } from 'react'
function Post() {
    const [post, setPhost] = useState([])
    const [post2, setPhost2] = useState([])
    const [newCard, setNewCard] = useState({})
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(res => setPhost(res))
    }, [])

    function create(event) {
        event.preventDefault()
        if (event.target.title.value !== "" && event.target.body.value !== "") {
            setNewCard({
                title: event.target.title.value,
                body: event.target.body.value
            })
        }
        event.target.title.value = ""
        event.target.body.value = ""
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: newCard.title,
                body: newCard.body,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(res => {
                setPhost2([...post2, res])
            })


    }, [newCard])
    return (
        <div>
            <Header />
            <div className='postParent'>
                {
                    post.map((e, i) => {
                        if (i <= 20) {
                            return <CardPost title={e.title} body={e.body} key={i} />
                        }
                    }
                    )
                }
                {
                    post2.map((e, i) => {
                        if (e.title) {
                            return <CardPost title={e.title} body={e.body} key={i} />
                        }
                    }
                    )
                }
            </div>
            <form onSubmit={create}>
                <input type='text' name='title' />
                <input type='text' name='body' />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default Post