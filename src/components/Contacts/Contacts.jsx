import React, { Component } from 'react'
import './Contacts.css'
import ContactsLink from 'components/Contacts/ContactsLink'
import email_image from './images/social/email.svg'
import facebook_image from './images/social/facebook.svg'
import vk_image from './images/social/vk.svg'
import instagram_image from './images/social/instagram.svg'
import blogger_image from './images/social/blogger.svg'
import github_image from './images/social/github.svg'
import gplus_image from './images/social/gplus.svg'
import habr_image from './images/social/habr.svg'
import bg1 from './images/bg_1.jpg'
import bg2 from './images/bg_2.jpg'
import bg3 from './images/bg_3.jpg'
import bg4 from './images/bg_4.jpg'
import bg5 from './images/bg_5.jpg'
import bg6 from './images/bg_6.jpg'
import bg7 from './images/bg_7.jpg'
import bg8 from './images/bg_8.jpg'
import _ from 'lodash'
import { slide_right } from 'containers/App/transitions'
import BackButton from 'components/BackButton/BackButton'

export default class Contacts extends Component {
  state = {
    background_blend_color: 'rgba(0, 0, 0, 0.64)'
  }

  render () {
    const {
      state: {
        background_blend_color
      },
      props: {
        history
      },
      onMouseEnter
    } = this
    return (
      <section className='Contacts'>
        <div
          className='Contacts-blend_layer'
          style={{background: background_blend_color}}
        />
        <BackButton invert to_left to={{pathname: '/', state: slide_right}} />
        <header>
          <h1 className='Contacts-title'>Каспер Грин</h1>
        </header>
        <address>
          <ul>
            <li {...{onMouseEnter}}>
              <ContactsLink
                background_image={bg3}
                image_url={instagram_image}
                title={'instagram.com'}
                url={'https://www.instagram.com/Aleksandr.Kasper.Green'}
              />
            </li>
            <li {...{onMouseEnter}}>
              <ContactsLink
                background_image={bg4}
                image_url={email_image}
                title={'email'}
                url={'mailto:email@Kasper.Green'}
              />
            </li>
            <li {...{onMouseEnter}}>
              <ContactsLink
                background_image={bg1}
                image_url={facebook_image}
                title={'facebook.com'}
                url={'https://facebook.com/kaspergreen'}
              />
            </li>
            <li {...{onMouseEnter}}>
              <ContactsLink
                background_image={bg2}
                image_url={vk_image}
                title={'vk.com'}
                url={'https://vk.com/KasperGreen'}
              />
            </li>
            <li {...{onMouseEnter}}>
              <ContactsLink
                background_image={bg5}
                image_url={blogger_image}
                title={'blogger.com'}
                url={'https://KasperGreen.blogspot.com'}
              />
            </li>
            <li {...{onMouseEnter}}>
              <ContactsLink
                background_image={bg6}
                image_url={gplus_image}
                title={'plus.google.com'}
                url={'https://plus.google.com/+KasperGreen'}
              />
            </li>
            <li {...{onMouseEnter}}>
              <ContactsLink
                background_image={bg7}
                image_url={github_image}
                title={'github.com'}
                url={'https://github.com/KasperGreen'}
              />
            </li>
            <li {...{onMouseEnter}}>
              <ContactsLink
                background_image={bg8}
                image_url={habr_image}
                title={'habr.com'}
                url={'https://habr.com/users/KasperGreen/'}
              />
            </li>
          </ul>
        </address>
        <footer>
          <cite className='Contacts-Kasper'>
            <a href={'https://Kasper.Green'} target={'_blank'}>2018 © Kasper Green</a>
          </cite>
        </footer>
      </section>
    )
  }

  colors = [
    'rgba(196, 3, 3, 0.64)',
    'rgba(3, 196, 32, 0.64)',
    'rgba(3, 75, 196, 0.64)',
    'rgba(38, 3, 196, 0.64)',
    'rgba(136, 3, 196, 0.64)',
    'rgba(196, 3, 176, 0.64)',
    'rgba(61, 130, 51, 0.64)',
    'rgba(26, 81, 18, 0.64)',
    'rgba(18, 42, 81, 0.64)',
    'rgba(5, 141, 203, 0.64)',
    'rgba(183, 202, 0, 0.64)',
    'rgba(189, 18, 112, 0.64)',
    'rgba(3, 46, 190, 0.64)',
    'rgba(18, 145, 16, 0.64)',
    'rgba(0, 150, 100, 0.64)',
  ]
  onMouseEnter = (e) => {
    this.setState(
      (state) => {
        return {
          ...state,
          background_blend_color: _.sample(this.colors)
        }
      }
    )
  }
}
