import React from 'react'
import style from './app-header.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {

	return (

		<header>
			<div className={style.header}>
				
				<div className={style.menuItem}>
					<BurgerIcon type='primary' />
					<p className="text text_type_main-default ml-2">
  					Конструктор
					</p>
				</div>
				
				<div className={style.menuItem}>
					<ListIcon type='secondary' />
					<p className="text text_type_main-default text_color_inactive ml-2">
  					Лента заказов
					</p>
				</div>

				<div className={style.menuLogo}>
					<Logo />
				</div>

				<div className={style.menuItem}>
				</div>

				<div className={style.menuItem}>
					<ProfileIcon type='secondary' />
					<p className="text text_type_main-default text_color_inactive ml-2">
  					Личный кабинет
					</p>
				</div>
			</div>
		</header>
  	)
}

export default AppHeader
