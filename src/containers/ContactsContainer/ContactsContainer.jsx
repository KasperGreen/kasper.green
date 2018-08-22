import React, { Component } from 'react'
import Contacts from 'components/Contacts'
import { Wrapper } from 'containers/App/Page'

export default class ContactsContainer extends Component {
  render () {
    const {
      props: {
        history
      }
    } = this
    return (
      <Wrapper>
        <Contacts {...{history}}/>
      </Wrapper>
    )
  }
}
