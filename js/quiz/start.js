let MainQuiz = new Quiz({   
    slides: [
        
        {
            hide:[true, false],
            title:[
                "Где необходимо установить вентиляцию или кондиционер?",
                "Выбор оборудования зависит от типа объекта."
            ],
            inactive:[true, false],
        },
        {
            hide:[false, false],
            title:[
                "Укажите площадь вашего помещения:",
                "Площадь помещения необходима для расчета мощности оборудования."
            ],
            inactive:[false, false],
        },
        {
            hide:[false, false],
            title:[
                "Какой тип климатической системы необходим?",
                "Затрудняетесь с выбором? Наши инженеры проведут Вам БЕСПЛАТНУЮ консультацию."
            ],
            inactive:[false, false],
        },
        {
            hide:[false, false],
            title:[
                "Выберите Ваш бюджет:",
                "Мы подберем для Вас лучшее оборудование из этого ценового сегмента."
            ],
            inactive:[false, false],
        },
        {
            hide:[false, false],
            title:[
                "Есть ли у Вас дизайн-проект или планировка?",
                "Наличие проекта поможет нам быстрее подобрать для Вас лучшее решение."
            ],
            inactive:[false, false],
        },
        {
            hide:[false, false],
            title:[
                "Где необходимо установить вентиляцию или кондиционер?",
                "Выбор оборудования зависит от типа объекта."
            ],
            inactive:[false, false],
        },
        {
            hide:[false, false],
            title:[
                "Какой подарок вы бы хотели холучить?",
                ""
            ],
            inactive:[false, false],
        },
        {
            hide:[false, false],
            title:[
                "Отлично!",
                "Оставьте контакты и получите расчет стоимости"
            ],
            inactive:[false, true],
        },

    ],
    progressBlockId: "#QuizProgress",
    blockId: "#QuizSlide",
    backwardButtonId: "#QuizBbutton",
    forwardButtonId: "#QuizFbutton",
    titleBlockId: "#QuizTitle",
    descBlockId: "#QuizDescription",
});