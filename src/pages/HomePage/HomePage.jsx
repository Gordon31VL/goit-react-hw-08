import homePageCss from "./HomePage.module.css"

export default function HomePage() {
     

    return (
        <div className={homePageCss.box}>
            <h1>Вітаємо у Phonebook!</h1>
            <p>
                <b>Phonebook</b> — це сучасний застосунок для зберігання та швидкого пошуку ваших контактів.<br />
                Реєструйтесь, додавайте друзів, колег і рідних, шукайте їх за ім’ям та керуйте своїм списком контактів з будь-якого пристрою.
            </p>
            <ul>
                <li>🔒 Безпечний доступ до ваших даних</li>
                <li>🔍 Зручний пошук контактів</li>
                <li>📱 Миттєве додавання та видалення</li>
                <li>🌐 Доступ з будь-якого місця</li>
            </ul>
            <p>
                <i>Розробник: GordonVL</i>
            </p>
        </div>
      );
}