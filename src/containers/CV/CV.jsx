import React, { Component } from 'react'
import KG_photo_image from './_images/KG_photo.jpg'
import PhotoWrapper from './_styles/CV_PhotoWrapper'
import Wrapper from 'containers/CV/_styles/CV_Wrapper'
import InfoWrapper from 'containers/CV/_styles/CV_InfoWrapper'
import OptionTitle from 'containers/CV/_styles/CV_OptionTItle'
import { pluralize } from 'numeralize-ru'
import StackWrapper from 'containers/CV/_styles/CV_StackWrapper'
import InfoInnerWrapper from 'containers/CV/_styles/CV_InfoInnerWrapper'
import ASCIIPhoto from 'containers/CV/ASCIIPhoto'
import BackButton from 'components/BackButton/BackButton'
import { slide_top } from 'containers/App/transitions'

export default class CV extends Component {
  render () {
    const {
      formatted_birthday,
      age,
      react_seniority
    } = this
    return (
      <Wrapper>
        <BackButton invert to_top to={{pathname: '/', state: slide_top}} />
        <PhotoWrapper>
          <figure>
            <img src={KG_photo_image} alt={'Фотопортрет меня'} />
            <figcaption><ASCIIPhoto /></figcaption>
          </figure>
        </PhotoWrapper>
        <InfoWrapper>
          <InfoInnerWrapper>
            <h1>Резюме</h1>
            <h2>ReactJS Middle Developer</h2>
            <ul>
              <li>
                <OptionTitle>Опыт ReactJS разработки:</OptionTitle> {react_seniority}
                <small> (с декабря 2016)</small>
              </li>
              <li>
                <StackWrapper>
                  <OptionTitle>Актуальный стек:&nbsp;</OptionTitle>
                  <ul>
                    <li>ReactJS;</li>
                    <li>Apollo GraphQL;</li>
                    <li>new React context API;</li>
                    <li>emotion;</li>
                    <li>react-router;</li>
                  </ul>
                </StackWrapper>
              </li>
              <li>
                <OptionTitle>Рабочее имя:</OptionTitle> Каспер Грин
              </li>
              <li>
                <OptionTitle>Возраст:</OptionTitle> {age}
                <wbr />
                <small>
                  &nbsp;({formatted_birthday}, <small>Стрелец</small>)
                </small>
              </li>
              <li>
                <OptionTitle>Пол:</OptionTitle> Мужской
              </li>
              <li>
                <OptionTitle>Гражданство:</OptionTitle> РФ
              </li>
              <li>
                <OptionTitle>Город проживания:</OptionTitle> Москва
              </li>
              <li>
                <OptionTitle>Согласие на коммандировки</OptionTitle>: Редко
              </li>
              <li>
                <OptionTitle>График:</OptionTitle> 4|<span style={{color: '#f22a00'}}>3</span>
              </li>
              <li>
                <OptionTitle>Режим работы:</OptionTitle> Удалённо
              </li>
              <li>
                <OptionTitle>Присутствие в офисе:</OptionTitle> Редко
              </li>
            </ul>
          </InfoInnerWrapper>
        </InfoWrapper>
      </Wrapper>
    )
  }

  get age () {
    const {
        birthday_Date
      } = this,
      now_date = new Date(),
      age = now_date.getFullYear() - birthday_Date.getFullYear(),
      birthday_not_come = now_date.getMonth() < birthday_Date.getMonth()
    return age - (birthday_not_come ? 1 : 0)
  }

  get birthday_Date () {
    const date = new Date()
    date.setFullYear(1987, 11)
    date.setDate(22)
    return date
  }

  get formatted_birthday () {
    const {
      birthday_Date
    } = this
    return [
      birthday_Date.getDate(),
      birthday_Date.getMonth() + 1,
      birthday_Date.getFullYear()
    ].join('.')
  }

  get react_seniority () {
    const using_start_Date = new Date(),
      now_Date = new Date(),
      milliseconds_in_year = 365 * 24 * 3600 * 1000

    using_start_Date.setFullYear(2016, 11)
    using_start_Date.setDate(1)

    const fixed_years = ((now_Date - using_start_Date) / milliseconds_in_year).toFixed(1)

    return String(fixed_years).replace('.', ',') + ' ' + pluralize(fixed_years, 'год', 'года', 'лет')

  }
}
