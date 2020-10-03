export default {
    namespaced: true,
    state: () => ({
        menu: [
            {
                id: 1,
                title: 'Лекции',
                submenu: [
                    {
                        id: 1,
                        title: 'Основные понятия и предмет философии',
                        payload: {
                            videos: [
                                {id: 1, title: 'Философия как мировоззрение', link: 'https://www.youtube.com/embed/aCP1S8cULM4'},
                                {id: 2, title: 'Функции философии', link: 'https://www.youtube.com/embed/1N1zNDO4uqA'},
                                {id: 3, title: 'Что такое философия', link: 'https://www.youtube.com/embed/KshafAmECAo'},
                            ],
                            presentations: [
                                {id: 1, title: 'Становление философии из мифологии.ppt', link: '/files/presentation/Становление_философии_из_мифологии.ppt'},
                                {id: 2, title: 'Основые понятия и предмет философии.ppt', link: '/files/presentation/Основые_понятия_и_предмет_философии.ppt'},
                                {id: 3, title: 'Основные направления философии XX века.ppt', link: '/files/presentation/Основые_понятия_и_предмет_философии.ppt'},
                            ]
                        },
                    },
                    {
                        id: 2,
                        title: 'Философия древнего мира и средневековая философия',
                        payload: {
                            presentations: [
                                {id: 1, title: 'Философия Древней Индии и Древнего Китая.ppt', link: '/files/presentation/Философия_Древней_Индии_и_Древнего_Китая.ppt'},
                                {id: 2, title: 'Философия древней Греции.ppt', link: '/files/presentation/Философия_древней_Греции.ppt'},
                            ]
                        }
                    },
                    {
                        id: 3,
                        title: 'Философия Возрождения и Нового времени',
                        payload: {
                            videos: [
                                {id: 1, title: 'Философия Возрождения', link: 'https://www.youtube.com/embed/KwUGI1Y7Gmk'},
                                {id: 2, title: 'Философия эпохи Возрождения', link: 'https://www.youtube.com/embed/Jsx1hhkg_6Q'},
                            ],
                            presentations: [
                                {id: 1, title: 'Немецкая классическая философия.ppt', link: '/files/presentation/Немецкая_классическая_философия.ppt'},
                            ]
                        }
                    },
                    {
                        id: 4,
                        title: 'Современная философия',
                        payload: {
                            videos: [
                                {id: 1, title: 'Особенности философии 20 века', link: 'https://www.youtube.com/embed/g0IO53U6LiU'},
                            ],
                            presentations: [
                                {id: 1, title: 'Современная философия.ppt', link: '/files/presentation/Современная_философия.ppt'},
                                {id: 2, title: 'Основы русской философии.pptx', link: '/files/presentation/Основы_русской_философии.pptx'},
                            ]
                        }
                    },
                    {
                        id: 5,
                        title: 'Методы философии и её внутреннее строение',
                        payload: {
                            videos: [
                                {id: 1, title: 'Специфика философского знания', link: 'https://www.youtube.com/embed/QkYu6B3KfWc'},
                                {id: 2, title: 'Методы и внутреннее строение философии', link: 'https://www.youtube.com/embed/4G7HxYvVZ5U'},
                            ],
                            presentations: [
                                {id: 1, title: 'Методы философии и её внутреннее строение.ppt', link: '/files/presentation/Методы_философии_и_её_внутреннее_строение.ppt'},
                            ]
                        }
                    },
                    {
                        id: 6,
                        title: 'Учение о бытии и теория познания',
                        payload: {
                            videos: [
                                {id: 1, title: 'Онтология в структуре философского знания', link: 'https://www.youtube.com/embed/sNbc5X2p0VY'},
                                {id: 2, title: 'Познание как предмет философии', link: 'https://www.youtube.com/embed/E9QRh2J27bY'},
                            ],
                            presentations: [
                                {id: 1, title: 'Онтология.ppt', link: '/files/presentation/Онтология.ppt'},
                            ]
                        },
                    },
                    {
                        id: 7,
                        title: 'Этика и социальная философия',
                        payload: {
                            videos: [
                                {id: 1, title: 'Общество как предмет философии', link: 'https://www.youtube.com/embed/UDDVifEJCmA'},
                                {id: 2, title: 'Мораль и нравственность', link: 'https://www.youtube.com/embed/qJ9GfJLiN4o'},
                                {id: 3, title: 'Жизнь как категория наук об обществе и культуре', link: 'https://www.youtube.com/embed/Z4wZywXXsHM'},
                            ],
                        }
                    },
                    {
                        id: 8,
                        title: 'Место философии в духовной культуре и её значение',
                        payload: {
                            videos: [
                                {id: 1, title: 'Аксиология в системе философского знания', link: 'https://www.youtube.com/embed/ZhwYCcctmIk'},
                                {id: 2, title: 'Философия в системе духовного знания', link: 'https://www.youtube.com/embed/S5c-zLOV2ac'},
                                {id: 3, title: 'Философия ее предмет и место в культуре', link: 'https://www.youtube.com/embed/WOaG0_vpd0I'},
                            ],
                            presentations: [
                                {id: 1, title: 'Место философии в духовной культуре и её значение 1.ppt', link: '/files/presentation/Место_философии_в_духовной_культуре_и_её_значение_1.ppt'},
                                {id: 2, title: 'Место философии в духовной культуре и её значение 2.ppt', link: '/files/presentation/Место_философии_в_духовной_культуре_и_её_значение_2.ppt'},
                            ]
                        }
                    },
                ],
            },
            {
                id: 2,
                title: 'Практические работы',
                payload: {
                    works: [
                        {id: 1, title: 'Практическая работа 1.docx', link: '/files/practice/Практическая_работа_№1.docx'},
                        {id: 2, title: 'Практическая работа 2.docx', link: '/files/practice/Практическая_работа_№2.docx'},
                        {id: 3, title: 'Практическая работа 3.docx', link: '/files/practice/Практическая_работа_№3.docx'},
                        {id: 4, title: 'Практическая работа 4.docx', link: '/files/practice/Практическая_работа_№4.docx'},
                        {id: 5, title: 'Практическая работа 5.docx', link: '/files/practice/Практическая_работа_№5.docx'},
                        {id: 6, title: 'Практическая работа 6.docx', link: '/files/practice/Практическая_работа_№6.docx'},
                        {id: 7, title: 'Практическая работа 7.docx', link: '/files/practice/Практическая_работа_№7.docx'},
                        {id: 8, title: 'Практическая работа 8.docx', link: '/files/practice/Практическая_работа_№8.docx'},
                        {id: 9, title: 'Практическая работа 9.docx', link: '/files/practice/Практическая_работа_№9.docx'},
                        {id: 10, title: 'Практическая работа 10.docx', link: '/files/practice/Практическая_работа_№10.docx'},
                        {id: 11, title: 'Практическая работа 11.docx', link: '/files/practice/Практическая_работа_№11.docx'},
                        {id: 12, title: 'Практическая работа 12.docx', link: '/files/practice/Практическая_работа_№12.docx'},
                        {id: 13, title: 'Практическая работа 13.docx', link: '/files/practice/Практическая_работа_№13.docx'},
                        {id: 14, title: 'Практическая работа 14.docx', link: '/files/practice/Практическая_работа_№14.docx'},
                        {id: 15, title: 'Практическая работа 15.docx', link: '/files/practice/Практическая_работа_№15.docx'},
                        {id: 16, title: 'Практическая работа 16.docx', link: '/files/practice/Практическая_работа_№16.docx'},
                        {id: 17, title: 'Практическая работа 17.docx', link: '/files/practice/Практическая_работа_№17.docx'},
                    ]
                }
            },
            {
                id: 3,
                title: 'Контрольные работы',
                submenu: [
                    {
                        id: 9,
                        title: 'Контрольная работа 1',
                        payload: {
                            works: [
                                {id: 1, title: 'Вариант 1.docx', link: '/files/control/1/Вариант_1.docx'},
                                {id: 2, title: 'Вариант 2.docx', link: '/files/control/1/Вариант_2.docx'},
                                {id: 3, title: 'Вариант 3.docx', link: '/files/control/1/Вариант_3.docx'},
                                {id: 4, title: 'Вариант 4.docx', link: '/files/control/1/Вариант_4.docx'},
                            ]
                        }
                    },
                    {
                        id: 10,
                        title: 'Контрольная работа 2',
                        payload: {
                            works: [
                                {id: 1, title: 'Вариант 1.docx', link: '/files/control/2/Вариант_1.docx'},
                                {id: 2, title: 'Вариант 2.docx', link: '/files/control/2/Вариант_2.docx'},
                                {id: 3, title: 'Вариант 3.docx', link: '/files/control/2/Вариант_3.docx'},
                                {id: 4, title: 'Вариант 4.docx', link: '/files/control/2/Вариант_4.docx'},
                            ]
                        }
                    },
                    {
                        id: 11,
                        title: 'Контрольная работа 3',
                        payload: {
                            works: [
                                {id: 1, title: 'Вариант 1.docx', link: '/files/control/3/Вариант_1.docx'},
                                {id: 2, title: 'Вариант 2.docx', link: '/files/control/3/Вариант_2.docx'},
                                {id: 3, title: 'Вариант 3.docx', link: '/files/control/3/Вариант_3.docx'},
                                {id: 4, title: 'Вариант 4.docx', link: '/files/control/3/Вариант_4.docx'},
                            ]
                        }
                    },
                    {
                        id: 12,
                        title: 'Контрольная работа 4',
                        payload: {
                            works: [
                                {id: 1, title: 'Вариант 1.docx', link: '/files/control/4/Вариант_1.docx'},
                                {id: 2, title: 'Вариант 2.docx', link: '/files/control/4/Вариант_2.docx'},
                                {id: 3, title: 'Вариант 3.docx', link: '/files/control/4/Вариант_3.docx'},
                                {id: 4, title: 'Вариант 4.docx', link: '/files/control/4/Вариант_4.docx'},
                            ]
                        }
                    },
                    {
                        id: 13,
                        title: 'Контрольная работа 5',
                        payload: {
                            works: [
                                {id: 1, title: 'Вариант 1.docx', link: '/files/control/5/Вариант_1.docx'},
                                {id: 2, title: 'Вариант 2.docx', link: '/files/control/5/Вариант_2.docx'},
                                {id: 3, title: 'Вариант 3.docx', link: '/files/control/5/Вариант_3.docx'},
                                {id: 4, title: 'Вариант 4.docx', link: '/files/control/5/Вариант_4.docx'},
                            ]
                        }
                    },
                ]
            },
            {
                id: 4,
                title: 'Методические указания',
                payload: {
                    works: [
                        {id: 1, title: 'ОГСЭ 01 Основы философии.doc', link: '/files/instruction/ОГСЭ_01_Основы_философии.doc'},
                        {id: 2, title: 'Рабочая программа.doc', link: '/files/instruction/Рабочая_программа.doc'},
                        {id: 3, title: 'Основы философии Горелов А.А.doc', link: '/files/instruction/Основы_философии_Горелов_А.А.doc'},
                        {id: 4, title: 'Вопросы.docx', link: '/files/instruction/Вопросы.docx'},
                    ]
                }
            },
        ]
    }),
    getters: {
        getMenu: state => state.menu
    }
}
