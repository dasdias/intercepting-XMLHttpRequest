// 'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // 1. Создаём новый объект XMLHttpRequest
    let form = document.querySelector('form');
    let sendData = document.querySelector('#send-data');
    let arr = [];
    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        // console.log(element.type);
        if (element.type !== 'submit') {
            arr = element;
            // console.log(arr);
        }
    }   
    sendData.addEventListener('click', function (e) {
        e.preventDefault();
        var xhr = new XMLHttpRequest();


        // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
        xhr.open('POST', 'mail.php', false);

        // 3. Отсылаем запрос
        xhr.send();

        // 4. Если код ответа сервера не 200, то это ошибка
        if (xhr.status != 200) {
            // обработать ошибку
           console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
        } else {
            // вывести результат
            console.log(xhr.responseText); // responseText -- текст ответа.
            // console.log(JSON.parse(xhr.responseText)); // responseText -- текст ответа.
        }

    });
    
    // console.dir(XMLHttpRequest.prototype.send);
    (function (send) {
        XMLHttpRequest.prototype.send = function (body) {
            // setTimeout(() => {
            //     console.log(this.responseText);
                
            // }, 1000);
            this.addEventListener('load', function () {
                console.log(this.responseText);
                
                console.log('Перехватили ajax запрос и запускаем свою функцию ');
            });
            send.call(this, body);
        };
    })(XMLHttpRequest.prototype.send);
    
});