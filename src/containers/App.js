import React, { useState, useCallback } from 'react';
import { Router, Route, Switch, BrowserRouter  } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from './HomePage';
import ArticlePage from './ArticlePage';
import FilteredArticlesPage from './FilteredArticlesPage'
import { StyleSheet, css } from 'aphrodite-jss';

const style = StyleSheet.create({
    container: {
        width: '50%',
        margin:'20px auto 0',
        padding: '30px',
        borderRadius:'10px',
        background: '#FFDAB2',
        boxShadow:'0px 0px 10px'
    },
    title: {
        margin: '0 auto 10px',
        padding:'15px',
        textAlign: 'center',
        textTransform: 'uppercase',
        border:'1px solid #7D7F7B',
        borderRadius:'10px'
    }
})

const history = createBrowserHistory();

function App() {
    const [articles, setArticles] = useState([]);
    
    const createArticleHandler = useCallback(
        el => setArticles([el, ...articles]),
        [articles]
    );
   
    const deleteArticleHandler = useCallback(
        id => setArticles(articles.filter(el => el.id !== id)),
        [articles]
    );
    return (
        <>
            <div className={css(style.container)}>
                <h1 className={css(style.title)}>My blog</h1>
                <Router history={history}>
                    <BrowserRouter>
                    <Switch>

                        <Route
                            path='/'
                            exact
                            render={() => (
                                <HomePage
                                    data={articles}
                                    createCallback={createArticleHandler}
                                    
                                />
                            )}
                        />
                        
                        <Route
                            path='/article:id'
                            render={() => (
                                <ArticlePage
                                    data={articles}
                                    deleteCallback={deleteArticleHandler}
                                />
                            )}
                        />
                        
                        <Route
                            path='/hashtag'
                            render={() => (
                                <FilteredArticlesPage
                                    data={articles} 
                                />
                            )}
                        />
                        </Switch>
                    </BrowserRouter>
                        
                </Router>
            </div>
        </>
    )
}

export default App;