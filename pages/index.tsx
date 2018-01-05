import Head from 'next/head'
import { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import withStyles, { StyleRules, WithStyles } from 'material-ui/styles/withStyles'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import InnerLink from '../components/innerLink'
import OuterLink from '../components/outerLink'
import '../interfaces'

/// @ts-ignore
import withRoot from '../src/withRoot'

const styles: StyleRules = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '8px',
  },
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
          <title>tomiyan.net</title>
        </Head>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="default" className={this.props.classes.flex}>tomiyan.net</Typography>
          </Toolbar>
        </AppBar>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Paper className={this.props.classes.paper}>
              <ul>
                <li><OuterLink href="http://profile.hatena.ne.jp/tomiyanx/">About</OuterLink></li>
                <li><InnerLink href="/tools/urlscheme">URL scheme test tool</InnerLink></li>
                <li><OuterLink href="http://d.hatena.ne.jp/tomiyanx/">Blog</OuterLink></li>
                <li><OuterLink href="https://www.facebook.com/masakuni.tomita">Facebook</OuterLink></li>
                <li><OuterLink href="https://twitter.com/tomiyan">Twitter</OuterLink></li>
                <li><OuterLink href="https://github.com/tomiyan">Github</OuterLink></li>
                <li><OuterLink href="https://qiita.com/tomiyan">Qiita</OuterLink></li>
                <li><OuterLink href="mailto:tomiyanx@gmail.com">Mail</OuterLink></li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
        <Typography type="body1" color="default" align="center">&copy;2018 tomiyan.net</Typography>
      </div>
    )
  }
}

export default withRoot(withStyles(styles)<{}>(Index))
