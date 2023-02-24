$(document).ready(function () {
    
    // Сохранение данных при перезагрузке страницы
    let formData = {};
    const LS = localStorage;

    $("input, textarea").keyup(function () {
        formData[$(this).attr("name")] = $(this).val();

        LS.setItem("formData", JSON.stringify(formData));
    })

    try {
        if (LS.getItem("formData")) {
            formData = JSON.parse(LS.getItem("formData"));

            $.each(formData, function (key, value) {
                $(`[name = ${key}]`).val(value);
            })
        }
    } catch (err) {
        console.log(err)
    };
    //

    $('[data-submit]').on('click', function (e) {
        e.preventDefault();
        $(this).parent("form").submit();
    })

    $.validator.addMethod("regex", function (value, element, regexp) {
        let regExsp = new RegExp(regexp);
        return this.optional(element) || regExsp.test(value);
    }, 'check your input');

    $(".form-block").validate({
        rules: {
            name: {
                required: true,
                regex: /^[a-zA-zА-Яа-я\s]{1,32}$/gm
            },
            phone: {
                required: true,
                regex: /^((\+7|7|8)+([0-9]){10})$/,
            },
            mail: {
                required: true,
                regex: /(\w|-|\.)+@\w+\.\w+/m,
            },
            text: {
                required: true,
            },
            surname: {
                required: true,
                regex: /^[a-zA-zА-Яа-я\s]{1,32}$/gm
            },
            patronymic: {
                required: false,
                regex: /^[a-zA-zА-Яа-я\s]{1,32}$/gm,
            }
        },
        messages: {
            name: {
                regex: "Неверный формат имени",
                required: "Это поле обязательно"
            },
            phone: {
                regex: "Неверный формат номера",
                required: "Это поле обязательно"
            },
            mail: {
                regex: "Неверный формат e-mail",
                required: "Это поле обязательно"
            },
            surname: {
                regex: "Неверный формат",
                required: "Это поле обязательно",
            },
            patronymic: {
                regex: "Неверный формат",
            },
            text: {
                required: 'Это поле обязательно',
                regex: "Неверный формат текста",
            }
        },

        submitHandler: function (form) {
            let $form = $(form);
            let $formId = $(form).attr('id');
            // Если форм несколько
            switch ($formId) {
                case 'form-block':
                    $.ajax({
                        type: 'POST',
                        url: $form.attr("action"),
                        data: $form.serialize(),
                    })
                        .done(function () {
                            console.log("Succes");
                        })
                        .fail(function () {
                            console.log("Fail")
                        })
                        .always(function () {
                            // Очистка LocalStorage
                            LS.clear()
                            
                            //ссылка на страницу спасибо - редирект
                            location.href = 'thank.html'
                            console.log("always");
                            setTimeout(function () {
                                $form.trigger('reset');
                            }, 1100);
                        });
                    break;
            }
            return false;
        }
    });
});