"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = require("next/head");
const react_1 = require("react");
const AppBar_1 = require("material-ui/AppBar");
const Grid_1 = require("material-ui/Grid");
const Paper_1 = require("material-ui/Paper");
const withStyles_1 = require("material-ui/styles/withStyles");
const Toolbar_1 = require("material-ui/Toolbar");
const Typography_1 = require("material-ui/Typography");
const innerLink_1 = require("../components/innerLink");
const outerLink_1 = require("../components/outerLink");
require("../interfaces");
/// @ts-ignore
const withRoot_1 = require("../src/withRoot");
const styles = {
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
};
class Index extends react_1.Component {
    render() {
        return (<div className={this.props.classes.root}>
        <head_1.default>
          <title>tomiyan.net</title>
        </head_1.default>
        <AppBar_1.default position="static">
          <Toolbar_1.default>
            <Typography_1.default type="title" color="default" className={this.props.classes.flex}>tomiyan.net</Typography_1.default>
          </Toolbar_1.default>
        </AppBar_1.default>
        <Grid_1.default container spacing={8}>
          <Grid_1.default item xs={12}>
            <Paper_1.default className={this.props.classes.paper}>
              <ul>
                <li><outerLink_1.default href="http://profile.hatena.ne.jp/tomiyanx/">About</outerLink_1.default></li>
                <li><innerLink_1.default href="/tools/urlscheme">URL scheme test tool</innerLink_1.default></li>
                <li><outerLink_1.default href="http://d.hatena.ne.jp/tomiyanx/">Blog</outerLink_1.default></li>
                <li><outerLink_1.default href="https://www.facebook.com/masakuni.tomita">Facebook</outerLink_1.default></li>
                <li><outerLink_1.default href="https://twitter.com/tomiyan">Twitter</outerLink_1.default></li>
                <li><outerLink_1.default href="https://github.com/tomiyan">Github</outerLink_1.default></li>
                <li><outerLink_1.default href="https://qiita.com/tomiyan">Qiita</outerLink_1.default></li>
                <li><outerLink_1.default href="mailto:tomiyanx@gmail.com">Mail</outerLink_1.default></li>
              </ul>
            </Paper_1.default>
          </Grid_1.default>
        </Grid_1.default>
        <Typography_1.default type="body1" color="default" align="center">&copy;2018 tomiyan.net</Typography_1.default>
      </div>);
    }
}
exports.Index = Index;
exports.default = withRoot_1.default(withStyles_1.default(styles)(Index));
