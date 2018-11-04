import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';


class Layout extends Component {

    state = {
        showSidedrawer: false
    }

    sidedrawerClosed = () => {
        this.setState({ showSidedrawer: false })
    }

    sidedrawerOpen = () => {
        this.setState((prevState) => {
            return { showSidedrawer: !prevState.showSidedrawer }
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar toggleDrawerClick={this.sidedrawerOpen}/>
                <Sidedrawer
                    closed={this.sidedrawerClosed}
                    open={this.state.showSidedrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


export default Layout;