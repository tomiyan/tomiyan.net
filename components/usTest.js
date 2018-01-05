"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Form_1 = require("material-ui/Form");
const Grid_1 = require("material-ui/Grid");
const Input_1 = require("material-ui/Input");
const Paper_1 = require("material-ui/Paper");
const withStyles_1 = require("material-ui/styles/withStyles");
const Typography_1 = require("material-ui/Typography");
const QRCode = require("qrcode.react");
const react_1 = require("react");
require("../interfaces");
const outerLink_1 = require("./outerLink");
const styles = (theme) => ({
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
});
class UsTest extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            uri: 'comgooglemaps://?center=37.788463,-122.392545&zoom=12',
        };
        this.handleChange = (event) => {
            this.setState({ uri: event.target.value });
        };
    }
    render() {
        return (<div className={this.props.classes.container}>
        <Grid_1.default container spacing={8}>
          <Grid_1.default item xs={12}>
            <Paper_1.default className={this.props.classes.paper}>
              <Typography_1.default type="headline">Step1 URL schemeを入力</Typography_1.default>
            </Paper_1.default>
          </Grid_1.default>
          <Grid_1.default item xs={12}>
            <Paper_1.default className={this.props.classes.paper}>
              <Form_1.FormControl className={this.props.classes.formControl} fullWidth>
                <Input_1.InputLabel htmlFor="uri">Uri</Input_1.InputLabel>
                <Input_1.default id="uri" value={this.state.uri} onChange={this.handleChange}/>
              </Form_1.FormControl>
            </Paper_1.default>
          </Grid_1.default>
          <Grid_1.default item xs={12}>
            <Paper_1.default className={this.props.classes.paper}>
              <Typography_1.default type="headline">Step2 スマートフォンでLINKをクリックまたはQRコードを読み込み</Typography_1.default>
            </Paper_1.default>
          </Grid_1.default>
          <Grid_1.default item xs={12}>
            <Paper_1.default className={this.props.classes.paper}>
              <outerLink_1.default href={this.state.uri}>URL scheme Link</outerLink_1.default>
            </Paper_1.default>
          </Grid_1.default>
          <Grid_1.default item xs={12}>
            <Paper_1.default className={this.props.classes.paper}>
              <QRCode value={this.state.uri}></QRCode>
            </Paper_1.default>
          </Grid_1.default>
        </Grid_1.default>
      </div>);
    }
}
exports.default = withStyles_1.default(styles)(UsTest);
