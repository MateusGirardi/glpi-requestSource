const mainInterval = setInterval(function () {

    var form = document.querySelector("[action='/front/itilfollowup.form.php']");
    if(form === undefined || form === null){
        form = document.querySelector("[action='/front/ticket.form.php']");
    }

    if(form !== undefined && form !== null){
        clearInterval(mainInterval);

        let listener = function (event) {
            let selector = document.querySelector("[name='requesttypes_id']");

            if (selector.value === '0') {
                event.preventDefault();
                alert("Campo 'Origem do Acompanhamento' não preenchido, preencha-o e envie novamente!");
            }

        }

        form.addEventListener("submit", listener);

    }

}, 150);


