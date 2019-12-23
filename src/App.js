import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store";
import './App.css';
import Logo from './components/Logo';
import Filter from './components/Filter';
import Content from './components/Content';
import { Container, Grid } from '@material-ui/core';

const App = () => {
    return (
        <Provider store={store}>
            {/*<Container maxWidth='lg'>*/}
                <Grid container justify='space-around'>
                    <Grid item xs={12}>
                        <Logo/>
                    </Grid>
                    <Grid item xs={3}>
                        <Filter />
                    </Grid>
                    <Grid item xs={8}>
                        <Content />
                    </Grid>
                </Grid>
            {/*</Container>*/}
        </Provider>
    );

}

export default App;
