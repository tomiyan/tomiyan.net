"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Typography_1 = require("material-ui/Typography");
const link_1 = require("next/link");
const react_1 = require("react");
require("../interfaces");
class InnerLink extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<link_1.default href={this.props.href}>
        <a><Typography_1.default type="body1" color="default">{this.props.children}</Typography_1.default></a>
      </link_1.default>);
    }
}
exports.default = InnerLink;
