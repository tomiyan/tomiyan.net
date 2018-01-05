import Typography from 'material-ui/Typography'
import Link from 'next/link'
import { Component } from 'react'
import '../interfaces'

export default class InnerLink extends Component<IInnerLinkProps> {
  constructor(props: IInnerLinkProps) {
    super(props)
  }

  public render() {
    return (
      <Link href={this.props.href}>
        <a><Typography type="body1" color="default">{this.props.children}</Typography></a>
      </Link>
    )
  }
}
