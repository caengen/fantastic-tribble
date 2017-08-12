import React from 'react';
import Page from '../Page';
import Constrainer from '../../components/constrainer';
import CiaoEditor from '../../components/editor';
import './home.css';

const Home = () => (
    <Page className="home">
        <Constrainer>
            <h1>Choose your own adventure</h1>
            <CiaoEditor />
        </Constrainer>
    </Page>
);

export default Home;