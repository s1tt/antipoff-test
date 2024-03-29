<h1 align="center" id="title">Тестовое задание</h1>


<h2>🧐 Требования:</h2>

<details>
  <summary>ТЗ</summary>
  
Создайте сайт на React + Redux и TypeScript, в котором на главной странице отображается список карточек пользователей и по клику на каждую карточку открывается страница с детальной информацией о пользователе. Список пользователей доступен только для зарегистрированных пользователей. Сайт должен быть адаптивным. Макет вы найдете здесь:
https://www.figma.com/file/Nw9TJYCeh8Tmi9cX3KxyqO/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5.-%D0%A4%D1%80%D0%BE%D0%BD%D1%82%D0%B5%D0%BD%D0%B4?node-id=0%3A1
1. Регистрация и авторизация должны осуществляться через email/password. Проверять на валидность все входные данные и выводить ошибку при невалидных данных
Токен необходимо сохранять в памяти браузера и удалять после нажатия на кнопку “выход”
2. Страница всех пользователей. На этой странице отображаются все пользователи. 
3. Страница пользователя отображает данные конкретного пользователя
Для запросов можно использовать https://reqres.in/ или любой другой сервис предоставляющий такие данные. Использование библиотечных компонентов вроде mui-material не желательно и будет оцениваться ниже.

Если вам это задание кажется слишком простым, вот задание “со звездочкой”
1. Для списка пользователей добавить пагинацию
2. На странице пользователя добавить загрузку аватарки
3. Добавить возможность ставить лайки пользователям, которые сохраняются  после перезагрузки страницы

Стэк: 
Typescript
React 
React-hook-form
Redux-toolkit(rtk-query)

</details>

<h2>🚀 ДЕМО</h2>

[https://antipoff-test.vercel.app/](https://antipoff-test.vercel.app/)

<h2>Скриншот проекта:</h2>

<img src="https://github.com/s1tt/antipoff-test/assets/40265221/9663775e-afb0-4f6a-b841-8864268d058f" alt="project-screenshot" width="500" height="250/">

<h2>🛠️ Установка и Запуск:</h2>

<p>1. Клонировать репозиторий:</p>

```
git clone https://github.com/s1tt/antipoff-test.git
```

<p>2. Перейти в директорию проекта:</p>

```
cd antipoff-test
```

<p>3. Установить зависимости:</p>

```
npm install
```

<p>4. Запустить приложение в режиме разработки:</p>

```
npm run dev
```
