import React from 'react';
import Form from '../components/Form';
import List from '../components/List';

function HomePage({
    data,
    createCallback
}) {

    return (
        <>
            <Form handlerSubmit={createCallback} />
            <List items={data}   
            />
        </>
    )
}

export default HomePage;