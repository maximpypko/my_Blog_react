import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite-jss';

const style = StyleSheet.create({
    list: {
        listStyle: 'none',
        paddingLeft: '0',
        margin:'0'
    },
    list__item: {
        padding: '20px',
        marginTop:'10px',
        border:'1px solid #7D7F7B',
        borderRadius:'10px'
    },
    list__itemTitle: {
        display:'block',
        paddingLeft:'10px',
        textDecoration: 'none',
        color:'black',
        fontSize: '20px',
        fontWeight:'bold'
    },
    list__itemText: {
        overflowWrap: 'anywhere'
      },
    list__Hastags: {
        textAlign: 'end',
    },
    list__HastagItem: {
        display: 'inline-block',
    },
    list__HastagLink: {
        marginRight: '10px',
        textDecoration: 'none',
        color:'grey'
    }
})

function List({ items }) {

    return (
        <ul className={css(style.list)}>
            {items.map(article => (

                    <li className={css(style.list__item)}
                        key={article.id}>
                        
                        <Link className={css(style.list__itemTitle)}
                            to={`/article${article.id}`}>{article.title}
                        </Link>

                        <ul className={css(style.list, style.list__Hastags)}>
                            {article.hashtags.map((hashtag, index) => (

                                <li className={css(style.list__HastagItem)}
                                    key={article.id + index}>
                                    <Link className={css(style.list__HastagLink)}
                                        to={`/hashtag${hashtag}`}>{hashtag}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))
            }
        </ul>
    )
}

export default List;