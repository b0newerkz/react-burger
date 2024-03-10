import React from 'react'
import style from './app-header.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {

	return (

		<header>
			<nav className={style.header}>
				
				<a href='#' className={style.menuItem}>
					<BurgerIcon type='primary' />
					<p className="text text_type_main-default ml-2">
  						Конструктор
					</p>
				</a>
				
				<a href='#' className={style.menuItem}>
					<ListIcon type='secondary' />
					<p className="text text_type_main-default text_color_inactive ml-2">
  						Лента заказов
					</p>
				</a>

				<a href='#' className={style.menuLogo}>
					<Logo />
				</a>

				<div className={style.menuItem}>
				</div>

				<a href='#' className={style.menuItem}>
					<ProfileIcon type='secondary' />
					<p className="text text_type_main-default text_color_inactive ml-2">
  						Личный кабинет
					</p>
				</a>
			</nav>
		</header>
  	)
}

export default AppHeader
