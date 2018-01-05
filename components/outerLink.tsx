import Typography from 'material-ui/Typography'
import { Component } from 'react'
import '../interfaces'

export default class OuterLink extends Component<IOuterLinkProps> {
  constructor(props: IOuterLinkProps) {
    super(props)
  }

  public render() {
    return (
      <a href={this.props.href}>
        <Typography type="body1" color="default">{this.props.children}</Typography>
      </a>
    )
  }
}
