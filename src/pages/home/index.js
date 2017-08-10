import React from 'react';
import Page from '../Page';
import Constrainer from '../../components/constrainer';
import Editor from '../../components/editor';
import './home.css';

const Home = () => (
    <Page className="home">
        <Constrainer>
            <h1>Choose your own adventure</h1>
            <Editor />
        </Constrainer>
    </Page>
);

export default Home;