import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

import "./style.css";

class Music extends Component {
    render() {
        return(
            <>
                <Grid>
                    <Header as="h1">Music</Header>
                </Grid>
            </>
        );
    }
}

export default Music;