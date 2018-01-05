import Head from 'next/head'
import { Component } from 'react'

import UsTest from '../../components/usTest'
import '../../interfaces'

/// @ts-ignore
import withRoot from '../../src/withRoot'

import AppBar from 'material-ui/AppBar'
import withStyles, { StyleRules, WithStyles } from 'material-ui/styles/withStyles'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const styles: StyleRules = {
  flex: {
    flex: 1,
  },
  root: {
    width: '100%',
  },
}

export class Index extends Component<WithStyles> {

  public render() {
    return (
      <div className={this.props.classes.root}>
          <Head>
            <title>URL scheme test tool</title>
          </Head>
          <AppBar position="static">
            <Toolbar>
              <Typography type="title" color="default" className={this.props.classes.flex}>
                URL scheme test tool
              </Typography>
            </Toolbar>
          </AppBar>
          <UsTest></UsTest>
          <Typography type="body1" color="default" align="center">&copy;2018 tomiyan.net</Typography>
      </div>
    )
  }
}

export default withRoot(withStyles(styles)<{}>(Index))
