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
import KasperName from 'containers/CV/_styles/CV_KasperName'

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
                <OptionTitle>Рабочее имя:</OptionTitle> <KasperName>Каспер Грин</KasperName>
              </li>
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
            <details>
              <summary>Опыт работы:</summary>
              <article>
                <br />
                <br />
                <br />
                2018-2019 <a href={'//sportvokrug.ru/sports'} target={'_blank'}>
                {'//sportvokrug.ru'}
              </a><br />
                ==============================<br />
                <br />
                Место работы в настоящее время. Front-end Архитектор<br />
                <br />
                Делаем новый фронт для системы управления спортом РФ.<br />
                Бета ограничена художественной гимнастикой и фигурным катанием.<br />
                <br />
                * освоил styled-components;<br />
                * apollo graphql;<br />
                * перевёл глобальный стейт приложения с redux на React context API;<br />
                * подготовил UI для повторного использования;<br />
                * разработал компоненты форм на базе контекста;<br />
                * lazy-loading.<br />
                <br />
                <br />
                <br />
                <br />
                2018-2019 <a href={'//kasper.green'} target={'_blank'}>
                {'//kasper.green'}
              </a><br />
                ========================<br />
                <br />
                <a
                  href={'//github.com/KasperGreen/kasper.green'}
                  target={'_blank'}
                >
                  {'//github.com/KasperGreen/kasper.green'}
                </a><br />
                <br />
                Личный сайт визитка. Платформа для экспериментов.<br />
                <br />
                <br />
                <br />
                <br />
                2018-2019 <a href={'//elfafeya.art'} target={'_blank'}>{'//elfafeya.art'}</a> <br />
                ======================<br />
                <br />
                (доступ в репозиторий по запросу)<br />
                <br />
                * Онлайн экспозиция картин Эльфафеи;<br />
                * одностраничное оффлайн приложение;<br />
                * эффекты при просмотре картин;<br />
                * анимации на css и js/canvas;<br />
                * ретушь в Photoshop.<br />
                <br />
                <br />
                <br />
                <br />
                2018 <a href={'//potok.kasper.green'} target={'_blank'}>
                {'//potok.kasper.green'}
              </a> <br />
                ========================<br />
                <br />
                https://github.com/KasperGreen/artpotok<br />
                <br />
                * Прототип системы управления фестивалем с бэкендом на laravel (достпу в репозиторий по запросу)<br />
                (доступ к админкнопкам после регистрации по запросу);<br />
                * отточил работу с React context API;<br />
                * адаптировал формы под API.<br />
                Слежение за состоянием отправки.<br />
                Прогрессбар. Вывод ошибок;<br />
                * Отработал «отменяемые действия»;<br />
                Удаление из списков можно отменить сразу после случайного нажатия;<br />
                * Стал кешировать результаты для оффлайн доступа к информации.<br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                2018 <a href={'//sunspirit.kasper.green'} target={'_blank'}>
                {'//sunspirit.kasper.green'}</a> <br />
                ===========================<br />
                <br />
                https://github.com/KasperGreen/sun-spirit<br />
                <br />
                * Превратил сайт фестиваля SunSpirit в<br />
                одностраничное оффлайн приложение<br />
                работает без API. Все данные захардкожены;<br />
                * отточил скилл оффлайн приложений;<br />
                * в разделе музыка адаптировал плеер для воспроизведения<br />
                со странички soundcloud артиста;<br />
                * столкнулся с проблемами производительности.<br />
                Перестал рендерить некоторые кадры когда вкладка не активна.<br />
                <br />
                <br />
                <br />
                <br />
                <br />
                2018 работа в <a href={"//aic.ru"} target={"_blank"}>
                {'//aic.ru'}
              </a>
                <br />
                ====================<br />
                <br />
                * Подписал соглашение о неразглашении;<br />
                * занимался архитектурой фронта в нескольких проектах;<br />
                * интерфейсные эксперименты;<br />
                * типографикаж<br />
                * CI.<br />
                <br />
                <br />
                <br />
                <br />
                <br />
                2018 Фронт Личного кабинета банка Северный Морской Путь<br />
                =================================================<br />
                <br />
                * Делал изоморфные компоненты для генерации критической разметки;<br />
                * начал использовать package.json и css-modules;<br />
                * возглавлял UI команду. Разработал компонент-декоратор для;<br />
                * коннекта с UI→API командой;<br />
                * первая версия компонента для быстрых UI форм;<br />
                * MoneyFormat компонент для рендера денежных сумм с настройками;<br />
                * pre/post-css.<br />
                <br />
                <br />
                <br />
                <br />
                2017 <a href={'//ratingruneta.ru'} target={'_blank'}>
                {'//ratingruneta.ru'}
              </a> <br />
                ========================<br />
                <br />
                * Новый фронт на ReactJS;<br />
                * глобальное состояние на Redux;<br />
                * углублённая работа с React Router;<br />
                * эффект прилипания в списках номенантов;<br />
                Собственная более производительная реализация на фоне доступных библиотек;<br />
                * sass;<br />
                * yarn;<br />
                * git WebHook;<br />
                * нотификация о состоянии пересборки продакшена с выводом лога для избавления от фрустрации;<br />
                * связь адреса страницы с API для сохранения легаси ссылок.<br />
                <br />
                <br />
                <br />
                <br />
                2017 suitup (сейчас не доступен)<br />
                ==========================<br />
                <br />
                * Концепт магазина одежды для коллекций которые можно<br />
                примерить на модель одежду в любом порядке и сочитании,<br />
                а потом покрутить на 360°;<br />
                * рендер этого дела в canvas;<br />
                * less;<br />
                * webpack;<br />
                * express;<br />
                * reactJS;<br />
                * npm;<br />
                * БЭМ;<br />
                <br />
                <br />
                <br />
                <br />
                <br />
                2001-2016<br />
                ========<br />
                <br />
                В этот период было некоторое количество проектов.<br />
                <br />
                Одни уже почили в историю,<br />
                другие не относятся на прямую к вебу,<br />
                на третьи проданы эксклюзивные права.<br />
                <br />
                <br />
                * Разнообраные CRUD и вебморды;<br />
                * генерация SVG;<br />
                * CSS анимации;<br />
                * jQuery;<br />
                * CodeIgniter;<br />
                * bower;<br />
                * системы сборки gulp/grunt.<br />
                <br />
                <br />
                В этот период были получены навыки:<br />
                <br />
                * Вёрстка;<br />
                * HTML;<br />
                * Photoshop;<br />
                * CSS;<br />
                * PHP;<br />
                * реверс-инженеринг;<br />
                * MySQL;<br />
                * CRUD;<br />
                * MVC;<br />
                * ООП;<br />
                * регулярные выражения;<br />
                * адаптивная вёрстка
                * REST API;<br />
                * рефакторинг (очень понравился Боб Мартин и его «Чистый Код»).<br />
                <br />
                В этом периоде был сделан сайт <a href={"//gips.pro"} target={"_blank"}>
                {"//gips.pro"}
              </a> .<br />
                В штате компании я занимался не только сайтом,<br />
                но и IT направлением в целом.<br />
                <br />
                Включая:<br />
                * администрирование серверов (window\linux) и рабочих машин с windows xp-8 на борту;<br />
                * контекст (я.директ, google AdWords);<br />
                * продвижение;<br />
                * обучение персонала;<br />
                * SEO оптимизацию внутреннюю и внешнюю;<br />
                * чтобы вжиться в роль пользователя, прошёл обучение на гипсокартонщика и получил сертификат; )<br />
                * дизайн\вёрстка\программирование сайта;<br />
                * Интернет-магазин с онлайн оплатой;<br />
                * Полнотекстовый поиск на базе sphinxsearch;<br />
                * Калькулятор <a href={'//gips.pro/index.php?target=calculator&id=7'} target={'_blank'}>
                {'//gips.pro/index.php?target=calculator&id=7'}
              </a> ;<br />
                * Фильтр по ГКЛ на главной;<br />
                * CRUD для управления доставками.<br />
                <br />
                <br />
                Так-же в этот период был владельцем ресурса с посещаемостью 40к хостов в сутки.<br />
                <br />
                <a href={"//tapochek.net"} target={"_blank"}>
                  {"//tapochek.net"}
                </a> <br />
                <br />
                * Познал кеширование<br />
                * Познал легаси в виде движка основанного на phpBB2, на мне последующая его доработка новых и
                оптимизация старых.<br />
                * В силу не коммерческой основы ресурса остро стояла задача вписаться в один не слишком производительный
                сервер.<br />
                * Месяцы оптимизации.<br />
                * Руководство большой командой контент менеджеров, модераторов и администраторов.<br />
                * Ресурс по прежнему онлайн, но мне более не принадлежит.<br />
                <br />

              </article>
            </details>
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
