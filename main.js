function enviarDiscord() {
    let webhookURL = "https://discord.com/api/webhooks/1379211646437818499/kPbfctqi3BI6sWrbL69fREI8WePSwjwh1UIURQTsYKqRHZVXJ6SKMBVEYhTLliX-67dY"; // Reemplaza con la URL del webhook de Discord
    let mensaje = { content: "она сказала ДА!! 🥰" };

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mensaje)
    })
    .then(response => console.log("Notificación enviada a Discord"))
    .catch(error => console.error("Error:", error));

    document.getElementById("nobutton").disabled = true;

    alert("Ответ отправился к Адриану")
}

let contador = 0;
        const mensajes = [
            "По моему кропка не работает 😰",
            "Не Работает !",
            "Cielo!",
            "Не",
            "Хватит",
            "Все равно не работает!",
            "Стоп",
            "Ты че?",
            "Может хватит",
            "Будешь кнопку сломать 🛎️",
            "😡😭😱🫀🧠❤️‍🩹🦘🐑🐏🐺",
            "Сломала кнопка, рада что ли ?",
        ];

function changeMessage() {
    const msg = document.getElementById("message");
    contador = (contador + 1) % mensajes.length;
    msg.textContent = mensajes[contador];
}

window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const content = document.querySelector('.content');
        
        // Fade out loader
        loader.style.opacity = '0';
        
        // Show content
        content.style.display = 'block';

        
        // Remove loader from DOM after transition
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000); // Show loader for 2 seconds
});