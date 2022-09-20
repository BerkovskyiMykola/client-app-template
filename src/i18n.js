import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    // we init with resources
    resources: {
        en: {
            translations: {
                create: "Create",
                edit: "Edit",
                delete: "Delete",
                loadSuccess: "Loaded successfully",
                error: "Something went wrong. Please refresh the page",
                createSuccess: "Created successfully",
                deleteSuccess: "Deleted successfully",
                editSuccess: "Edited successfully",
                restorSuccess: "Restored successfully",
                defaultOption: "Choose an option",
                actions: "Actions",
                listEmpty: "List is empty",
                signUp: "Sign Up",
                logOut: "LogOut",
                login: "Login",
                role: "Role",
                createBackup: "Create Backup",
                restoreDatabase: "Restore Database",
                email: "Email",
                firstname: "First name",
                lastname: "Last name",
                password: "Password",

                home: "Home",
                profile: "Profile",
                backups: "Backups",
                backupName: "Backup name",
                database: "Database",
                users: "Users",


                "This field is required!": "This field is required!",
                "This is not a valid email": "This is not a valid email",
                "Bad Request": "Bad Request",
                "Not Found": "Not Found",
                "User with such Email exists": "User with such Email exists",
                "Email or password is incorrect": "Email or password is incorrect",
                "One or more validation errors occurred.": "One or more validation errors occurred",
            }
        },
        ua: {
            translations: {
                create: "Створити",
                edit: "Редагувати",
                delete: "Видалити",
                loadSuccess: "Завантажено успішно",
                error: "Щось пішло не так. Будь ласка, оновіть сторінку",
                createSuccess: "Створено успішно",
                deleteSuccess: "Видалено успішно",
                editSuccess: "Відредаговано успішно",
                restorSuccess: "Відновлено успішно",
                defaultOption: "Виберіть варіант",
                actions: "Дії",
                listEmpty: "Список пустий",
                signUp: "Зареєструватись",
                LogOut: "Вийти",
                login: "Ввійти",
                role: "Роль",
                createBackup: "Створити резервну копію",
                restoreDatabase: "Відновити базу даних",
                email: "Пошта",
                firstname: "Ім'я",
                lastname: "Прізвище",
                password: "Пароль",
                home: "Домашня сторінка",
                profile: "Профіль",
                backups: "Бекапи",
                backupName: "Назва бекапа",
                database: "База даних",
                users: "Користувачі",


                "This field is required!": "Це поле необхідне!",
                "This is not a valid email": "Це не валідна пошта",
                "Bad Request": "Поганий запит",
                "Not Found": "Не знайдено",
                "User with such Email exists": "Користувач з такою електронною поштою існує",
                "Email or password is incorrect": "Електронна адреса або пароль неправильні",
                "One or more validation errors occurred.": "Сталася одна чи кілька помилок перевірки",
            }
        }
    },
    fallbackLng: "en",
    debug: false,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        useSuspense: false,
    }
});

export default i18n;
