<!DOCTYPE html>
<html lang="ru" dir="ltr">
<head>
    <meta charset="utf-8">
    <title>Добро пожаловать в Ирландию</title>
    <!-- Подключение Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous">
    <!-- Подключение собственного CSS -->
    <link rel="stylesheet" href="irelandstyle.css">
    
    <!-- Подключение Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
            crossorigin="anonymous"></script>
            
</head>
<body>

<div class="header">
    <h1>Добро пожаловать в Ирландию</h1>
</div>

<!-- Навигация -->
<nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Ирландия</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#dublin">Дублин</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#moher">Утес Мохер</a>

                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#loch_corrib">Лох-Корриб</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Контакты</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#data_form">Форма Данных</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#resources" >Полезные ресурсы</a>
                </li>
			    <li class="nav-item">
                    <a class="nav-link" href="Решение алгоритмической задачи.html">Задача</a>
                  </li>
                <li class="nav-item">
                    <a class="nav-link" href="Изменяем кириллицу на латиницу по клику.html" target="_blank" >Паспорт</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<!-- Основной контент -->
<div class="container">

 <!-- Раздел 1: Дублин -->
 <section id="dublin">
    <h2>Дублин</h2>
    <img src="https://github.com/IrmaKlimova/-1/blob/main/TAL-header-dublin-ireland-DUBLIN0324-78d8076c12ec4049ac0250c34fa39edc.jpg?raw=true" alt="Дублин" title="Столица Ирландии — Дублин">
    <p>Дублин — столица Ирландии, известная своей богатой культурой и историей. Вот некоторые достопримечательности, которые стоит посетить:</p>
    <ul>
        <li>Тринити-колледж
            <ul>
                <li>Кафе и рестораны</li>
                <li>Музеи и галереи</li>
            </ul>
        </li>
        <li>Собор Святого Патрика
            <ul>
                <li>Многолетняя история</li>
                <li>Архитектурные особенности</li>
            </ul>
        </li>
        <li>Дублинский замок
            <ul>
                <li>Государственные апартаменты</li>
                <li>Королевская часовня</li>
            </ul>
        </li>
    </ul>
    <!-- Миниатюра с возможностью открытия большого изображения в новом окне -->
    <a href="https://github.com/IrmaKlimova/-1/blob/main/TAL-header-dublin-ireland-DUBLIN0324-78d8076c12ec4049ac0250c34fa39edc.jpg?raw=true" target="_blank" onclick="window.open(this.href, 'newwindow', 'width=600,height=400'); return false;">
        <img src="https://github.com/IrmaKlimova/-1/blob/main/TAL-header-dublin-ireland-DUBLIN0324-78d8076c12ec4049ac0250c34fa39edc.jpg?raw=true" alt="Дублин Большое" class="thumbnail">
    </a>
</section>

    <!-- Раздел 2: Утес Мохер -->
    <section id="moher">
        <h2>Утес Мохер</h2>
        <img src="https://github.com/IrmaKlimova/-1/blob/main/5292_r800x0.jpg?raw=true" alt="Утес Мохер" title="Утес Мохер — природное чудо Ирландии">
        <p>Утесы Мохер — одно из самых впечатляющих природных чудес Ирландии. Они поднимаются на высоту до 214 метров и тянутся на 8 км вдоль Атлантического океана. Причины для посещения:</p>
        <ol>
            <li>Захватывающие виды</li>
            <li>Уникальная флора и фауна</li>
            <li>Прогулки по тропам вдоль утесов</li>
        </ol>
        </section>

    <!-- Раздел 3: Озеро Лох-Корриб -->
    <section id="loch_corrib">
        <h2>Озеро Лох-Корриб</h2>
        <img src="https://github.com/IrmaKlimova/-1/blob/main/Lough-Corrib.jpg?raw=true" alt="Озеро Лох-Корриб" title="Живописное озеро Лох-Корриб">
        <p>Лох-Корриб — второе по величине озеро в Ирландии, известное своими живописными видами и местами для рыбалки. Что можно сделать на озере:</p>
        <ul>
            <li>Отправиться на лодочную прогулку</li>
            <li>Заняться рыбалкой</li>
            <li>Насладиться природой и тишиной</li>
        </ul>
          </section>


<section id="contact" >
    <h3 align="center">Поделитесь контактами</h3>
    
    <!-- Форма для отправки данных на сервер -->

    <form class="form-section" action="https://www.bing.com/search?" method="get" id="UserEnter" name="UserEnter" target="_blank">

        <input type="hidden" name="q" value="search">
        
        <p>Имя: <input type="text" name="name" value="Иван"></p>
        <p>Фамилия: <input type="text" name="last_name" value="Петров"></p>
        <p>Группа: <input type="text" name="group"></p>
        <p>Мобильный телефон: <input type="tel" name="phone"></p>
        <p>Электронная почта: <input type="email" name="email"></p>
        <p>Дата отправки сообщения: <input type="date" name="date"></p>
        <p><input type="submit" value="Отправить"></p>
    </form>
    </section>



 <section id="data_form" >
    <h3 align="center"> Отправить данные</h3>
    
    <!-- Форма для отправки данных на сервер -->
    
    <form class="form-section" id="link" action="https://www.bing.com/search?" method="get" target="_blank">
        <input type="hidden" name="q" value="search">
        <p>Путевка: <input type="text" name="product" value="Тур по Дублину"></p>
        <p>Количество человек: <input type="number" name="quantity" min="1" ></p>
        <p>Тип путешествия:
            <input type="radio" name="company" value="standard" > Соло
            <input type="radio" name="company" value="express"> В группе
        </p>
        <p>Дополнительно:
            <input type="checkbox" name="gift"> Страховка
            <input type="checkbox" name="warranty"> Гарантия
        </p>
        <p>Пароль: <input type="password" name="password" required></p>
        <input type="hidden" name="order_id" value="12345">
        <p><input type="submit" value="Отправить"></p>
    </form>
 </section>

 <!--<script>  
    function showForm() {
 document.getElementById("auth").hidden = false;
 document.getElementById("link").hidden = true;
}
</script> -->
<script>
    function showForm() {
        document.getElementById("auth").hidden = false;
        document.getElementById("data_form").hidden = false;
    }
</script>

    <p id="data_form_link" onclick="showForm()"> Уже зарегистрированы? Авторизация на сайте </p>
    <form class="form-section" action="https://www.bing.com/search?" method="get" target="_blank" id="auth" hidden>
        <input type="hidden" name="q" value="search">
     <p><label>Логин: <input name="user" required></label></p>
     <p><label>Пароль: <input name="pass" type="password" required></label></p>
     <p><input type="submit" value="Войти"></p>
    </form>

   <!-- Таблица с ссылками -->
    <section id="resources">
        <h2>Полезные ресурсы</h2>
        <table style="width: 100%; background-image: url('https://github.com/IrmaKlimova/-1/blob/main/becd4e97b50caeae7467a800a7d02408.png?raw=true'); background-size: cover;">
            <tr>
                <th style="text-align: left;">Полезные ресурсы</th>
                <th></th>
                <th>Ссылка на электронный ресурс</th>
            </tr>
            <tr>
                <td>Официальный сайт Дублина</td>
                <td><img src="https://img.freepik.com/vector-premium/green-welcome-to-dublin-sign-stamp-sticker-estrellas-trebol-cuatro-hojas-ilustracion-vectorial_723710-600.jpg" alt="Дублин" style="width: 100px;"></td>
                <td><a href="https://www.visitdublin.com" target="_blank">Посетить сайт</a></td>
            </tr>
            <tr>
                <td>Культурные мероприятия</td>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2UQL45DbQYlo3hABh2oyN-_Nc0z1JPMm7Jg&s" alt="Событие" style="width: 100px;"></td>
                <td><a href="https://dublin.ie/whats-on/" target="_blank">Узнать больше</a></td>
            </tr>
            <tr>
                <td>Туристические гиды</td>
                <td><img src="https://img.freepik.com/free-vector/travel-logo-template_23-2149705476.jpg" alt="Гид" style="width: 100px;"></td>
                <td><a href="https://www.myirelandtour.com/travelguide/dublin/index.php" target="_blank">Посмотреть гиды</a></td>
            </tr>
        </table>
    </section>

</div>

<!-- Футер -->
<footer class="footer">
    <p>&copy; 2024 Путешествия по Ирландии</p>
    <button id="scrollToTop" onclick="scrollToTop()">Наверх</button>

</footer>

<!-- Скрипт для кнопки -->
<script>
    window.onscroll = function() {
        const button = document.getElementById("scrollToTop");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = "block"; 
        } else {
            button.style.display = "none"; 
        }
    };
    
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    }
    </script>

</body>
</html>