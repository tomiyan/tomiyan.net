"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const head_1 = require("next/head");
const react_1 = require("react");
const usTest_1 = require("../../components/usTest");
require("../../interfaces");
/// @ts-ignore
const withRoot_1 = require("../../src/withRoot");
const AppBar_1 = require("material-ui/AppBar");
const withStyles_1 = require("material-ui/styles/withStyles");
const Toolbar_1 = require("material-ui/Toolbar");
const Typography_1 = require("material-ui/Typography");
const styles = {
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
            <title>URL scheme test tool</title>
          </head_1.default>
          <AppBar_1.default position="static">
            <Toolbar_1.default>
              <Typography_1.default type="title" color="default" className={this.props.classes.flex}>
                URL scheme test tool
              </Typography_1.default>
            </Toolbar_1.default>
          </AppBar_1.default>
          <usTest_1.default></usTest_1.default>
          <Typography_1.default type="body1" color="default" align="center">&copy;2018 tomiyan.net</Typography_1.default>
      </div>);
    }
}
exports.Index = Index;
exports.default = withRoot_1.default(withStyles_1.default(styles)(Index));
