import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite-jss';
import home from '../images/home.svg';

const style = StyleSheet.create({
    wrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    buttonHome: {
        width: '60px'
    },
    list__Hastags: {
        width:'100%',
        listStyle:'none',
        margin: '0 0 0 10px',
        padding:'20px',
        border:'1px solid #7D7F7B',
        borderRadius:'10px'
    },
    list__HastagItem: {
        display:'inline-block',
        marginRight: '10px',
        textDecoration: 'none',
        color:'grey'
    },
    list__itemWrapper: {
        padding: '20px',
        marginTop:'10px',
        border:'1px solid #7D7F7B',
        borderRadius:'10px'
    },
    list__itemTitle: {
        paddingLeft: '10px',
        margin:'0',
        fontSize: '20px',
        fontWeight:'bold'
    },
    list__itemContent: {
        marginTop:'7px',
        overflowWrap: 'anywhere' 
    },
    list__buttonDelete: {
        padding: '10px',
        marginLeft:'10px',
        fontSize: '16px',
        textTransform:'uppercase',
        background: '#FF0800',
        color: 'black',
        borderRadius: '10px',
        boxShadow: '0 0 2px 1px',
        cursor:'pointer'
    }
})

function ArticlePage({
    data,
    deleteCallback,
    match: {
        params:{ id }
    },
    history
}) {
    const article = data.find(article => article.id === id);
    
    return (
        <>
            <div className={css(style.wrapper)}>
                <Link to='/'>
                    <img
                        src={home}
                        alt='back button'
                        className={css(style.buttonHome)}>
                    </img>
                </Link>

                <ul className={css(style.list__Hastags)}>
                    {article.hashtags.map((hashtag, index) => (

                        <li className={css(style.list__HastagItem)}
                            key={article.id + `${index}`}>{hashtag}</li>
                    ))}
                </ul>

                <button className={css(style.list__buttonDelete)}
                    onClick={() => {
                    deleteCallback(article.id);
                    history.replace('/');
                }}>
                    Delete Article
                </button>
            </div>
            
            <div className={css(style.list__itemWrapper)}>
                <h2 className={css(style.list__itemTitle)}>
                    {article.title}
                </h2>
                <p className={css(style.list__itemContent)}>{article.content}</p>
            </div>
        </>
    )
}

export default withRouter(ArticlePage);