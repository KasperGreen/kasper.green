import React, { Component } from 'react'
import './ContactsLink.css'
import PropTypes from 'prop-types'

export default class ContactsLink extends Component {
  render () {
    const {
      props: {
        title, url, image_url, background_image
      }
    } = this
    return (
      <div className='ContactsLink'>
        <figure style={{backgroundImage: 'url('+ background_image + ')'}}>
          <img src={image_url} alt={title} />
          <figcaption>
            <cite>
              <a href={url} target='_blank'>
                <span className='ContactsLink-title'>{title}</span>
              </a>
            </cite>
          </figcaption>
        </figure>
      </div>
    )
  }

  static propTypes = {
    title: PropTypes.string,
    image_url: PropTypes.string,
    url: PropTypes.string,
    background_image: PropTypes.string
  }

}
