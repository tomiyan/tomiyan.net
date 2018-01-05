"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Typography_1 = require("material-ui/Typography");
const react_1 = require("react");
require("../interfaces");
class OuterLink extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<a href={this.props.href}>
        <Typography_1.default type="body1" color="default">{this.props.children}</Typography_1.default>
      </a>);
    }
}
exports.default = OuterLink;
