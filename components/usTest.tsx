import { FormControl, FormHelperText } from 'material-ui/Form'
import Grid from 'material-ui/Grid'
import Input, { InputLabel } from 'material-ui/Input'
import Paper from 'material-ui/Paper'
import { Theme } from 'material-ui/styles/createMuiTheme'
import withStyles, { StyleRulesCallback, WithStyles } from 'material-ui/styles/withStyles'
import Typography from 'material-ui/Typography'
import * as QRCode from 'qrcode.react'
import { Component } from 'react'
import '../interfaces'
import OuterLink from './outerLink'

const styles: StyleRulesCallback = (theme: Theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '8px',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  paper: {
    color: theme.palette.text.secondary,
    padding: 16,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
})

class UsTest extends Component<WithStyles> {
  public state = {
    uri: 'comgooglemaps://?center=37.788463,-122.392545&zoom=12',
  }

  public handleChange = (event: any) => {
    this.setState({ uri: event.target.value })
  }

  public render() {
    return (
      <div className={this.props.classes.container}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Paper className={this.props.classes.paper}>
              <Typography type="headline">Step1 URL schemeを入力</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={this.props.classes.paper}>
              <FormControl className={this.props.classes.formControl} fullWidth>
                <InputLabel htmlFor="uri">Uri</InputLabel>
                <Input id="uri" value={this.state.uri} onChange={this.handleChange} />
              </FormControl>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={this.props.classes.paper}>
              <Typography type="headline">Step2 スマートフォンでLINKをクリックまたはQRコードを読み込み</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={this.props.classes.paper}>
              <OuterLink href={this.state.uri}>URL scheme Link</OuterLink>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={this.props.classes.paper}>
              <QRCode value={this.state.uri}></QRCode>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)<{}>(UsTest)
