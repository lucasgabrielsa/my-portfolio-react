import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Link } from 'react-router-dom';

const myStyle404 = { display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' as 'column', marginTop: '15%' };

const Page404 = () => (
    <>
        <PageHeader />
        <div style={myStyle404}>
            <h1>Ops, something is not right :O</h1>
            <p>
            <Link to="/">You can go back to the home :)</Link>
            </p>   
        </div>        
    </>
)

export default Page404;