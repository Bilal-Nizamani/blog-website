import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import { Grid } from '@material-ui/core'
import Posts from './Posts';
function Home() {
    return (
        <div>
            <Banner />
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                
                <Grid container item  lg={10} xs={12} sm={10}>

                    <Posts />

                </Grid>

            </Grid>

        </div>
    )
}

export default Home
