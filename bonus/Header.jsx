import React, { Component } from 'react';

import Header from 'arui-private/header';
import ApplicationMenu from 'arui-private/application-menu';
import ApplicationMenuItem from 'arui-private/application-menu-item';
import ApplicationMenuGroup from 'arui-private/application-menu-group';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.UserRegisterBTN = this.UserRegisterBTN.bind(this);

    this.state = {
      showWarning: false,
      checked: false,
      show: true,
      step: 'LOGIN'
    };
  }

  UserRegisterBTN() {
    this.setState({
      showWarning: true,
      disabled: false
    });

    alert('Показать форму регистрации');
  }

  render() {
    return (
      <Header
        menu={
          <ApplicationMenu>
            <ApplicationMenuGroup title="Пользователи" url="#products">
              <ApplicationMenuItem url="/searchUser">Поиск</ApplicationMenuItem>
              <ApplicationMenuItem url="/reg" onClick={this.UserRegisterBTN}>
                Зарегистрировать пользователя
              </ApplicationMenuItem>
              <ApplicationMenuItem url="#credists">
                Зарегистрированные пользователи
              </ApplicationMenuItem>
              <ApplicationMenuItem url="#credists">
                Заблокированные пользователи
              </ApplicationMenuItem>
              <ApplicationMenuItem url="#credists">
                Отключенные пользователи
              </ApplicationMenuItem>
              <ApplicationMenuItem url="#credists">
                Регистрация пользователя
              </ApplicationMenuItem>
            </ApplicationMenuGroup>
            <ApplicationMenuItem url="#in-work">
              Платежи в работе
            </ApplicationMenuItem>
            <ApplicationMenuItem url="#listing">Выписка</ApplicationMenuItem>
            <ApplicationMenuItem url="#outcoming">
              Исходящие
            </ApplicationMenuItem>
            <ApplicationMenuGroup title="Продукты" url="#products">
              <ApplicationMenuItem url="#deposits">
                Депозиты
              </ApplicationMenuItem>
              <ApplicationMenuItem url="#credists">Кредиты</ApplicationMenuItem>
            </ApplicationMenuGroup>
          </ApplicationMenu>
        }
      />
    );
  }
}

export default HeaderComponent;
