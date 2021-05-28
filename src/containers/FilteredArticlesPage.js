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
    title: {
        width: '100%',
        margin:'0 0 0 10px',
        padding:'20px',
        fontSize: '20px',
        fontWeight: 'bold',
        border:'1px solid #7D7F7B',
        borderRadius:'10px'
    },
    hashtags: {
        marginLeft: '10px',
        textDecoration: 'none',
        color:'grey'
    },
    listArticles: {
        listStyle: 'none',
        paddingLeft: '0',
        margin:'0'
    },
    listArticles__item: {
        boxSizing:'border-box',
        padding: '20px',
        marginTop:'10px',
        border:'1px solid #7D7F7B',
        borderRadius:'10px'
    },
    listArticles__title: {
        margin: '0',
        paddingLeft: '10px',
        fontSize: '20px',
        fontWeight:'bold'
    },
    listArticles__content: {
        margin:'0',
        overflowWrap: 'anywhere'
    }
})

function filterdArticles({
    data,
    location: {hash}
}) {
    
    const getFilteredArticle =
        data.filter(article => article.hashtags.find(el => el === hash))

    return (
        <>
            <div className={css(style.wrapper)}>
                <div>
                    <Link to='/'>
                        <img src={home}
                            alt='back button'
                            className={css(style.buttonHome)}>
                        </img>
                    </Link>
                </div>
                <h3 className={css(style.title)}>
                    Search by hashtag
                    <span className={css(style.hashtags)}>{`${hash}`}</span>
                </h3>
            </div>

            <ul className={css(style.listArticles)}>
                {getFilteredArticle.map(article => (

                    <li className={css(style.listArticles__item)}
                        key={article.id}>
                        <h2 className={css(style.listArticles__title)}>
                            {article.title}
                        </h2>
                        <p className={css(style.listArticles__content)}>
                            {article.content}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default withRouter(filterdArticles);