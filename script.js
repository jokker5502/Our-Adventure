// Espera a que todo el contenido de la página se cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {

// --- FUNCIÓN DEL RELOJ PRECISO ---
    function actualizarContador() {
        const fechaInicio = new Date('2023-11-21T20:00:00');
        const ahora = new Date();

        let anios = ahora.getFullYear() - fechaInicio.getFullYear();
        let meses = ahora.getMonth() - fechaInicio.getMonth();
        let dias = ahora.getDate() - fechaInicio.getDate();
        let horas = ahora.getHours() - fechaInicio.getHours();
        let minutos = ahora.getMinutes() - fechaInicio.getMinutes();
        let segundos = ahora.getSeconds() - fechaInicio.getSeconds();

        if (segundos < 0) {
            segundos += 60;
            minutos--;
        }
        if (minutos < 0) {
            minutos += 60;
            horas--;
        }
        if (horas < 0) {
            horas += 24;
            dias--;
        }
        if (dias < 0) {
            dias += new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
            meses--;
        }
        if (meses < 0) {
            meses += 12;
            anios--;
        }

        const contadorEl = document.getElementById('contador');
        if (contadorEl) {
            contadorEl.innerHTML = 
                `<strong>${anios}</strong> a, <strong>${meses}</strong> m, <strong>${dias}</strong> d, <br>
                 <strong>${horas}</strong> h, <strong>${minutos}</strong> min y <strong>${segundos}</strong> s juntos.`;
        }
    }

    // --- INICIAMOS EL RELOJ ---
    actualizarContador();
    setInterval(actualizarContador, 1000);

    // --- 2. MENSAJE Y POEMA DIARIO ---
    function mostrarMensajeDiario() {
        const teAmoEnIdiomas = ["Te amo", "I love you", "Je t'aime", "Ich liebe dich", "Ti amo", "愛してる (Aishiteru)", "Eu te amo", "Seni seviyorum", "Я тебя люблю (Ya tebya lyublyu)"];
        const poemas = [
            "“Andábamos sin buscarnos pero sabiendo que andábamos para encontrarnos.” - Julio Cortázar",
            "“Quiero hacer contigo lo que la primavera hace con los cerezos.” - Pablo Neruda",
            "“Te quiero no por quien eres, sino por quien soy cuando estoy contigo.” - Gabriel García Márquez",
            "“Amar no es mirarse el uno al otro; es mirar juntos en la misma dirección.” - Antoine de Saint-Exupéry",
            "“Uno está enamorado cuando se da cuenta de que otra persona es única.” – Jorge Luis Borges",
            "“Te amo para amarte y no para ser amado, puesto que nada me place tanto como verte a ti feliz.” – George Sand",
            "“Te quiero no por quien eres, sino por quien soy cuando estoy contigo.” – Elizabeth Barrett Browning",
            "“El amor es intensidad y por esto es una distensión del tiempo.” – Octavio Paz",
            "“El amor es la poesía de los sentidos.” – Honoré de Balzac",
            "“El amor no mira con los ojos, sino con el alma.” – William Shakespeare",
            "“Todo lo que se hace por amor, se hace más allá del bien y del mal.” – Friedrich Nietzsche",
            "“No hay remedio para el amor sino amar más.” – Henry David Thoreau",
            "“Amar es cambiar la casa del alma.” – Mario Benedetti",
            "“El amor es como el viento, no se ve pero se siente.” – Nicholas Sparks",
            "“En un beso, sabrás todo lo que he callado.” – Pablo Neruda",
            "“El amor es el ala que Dios ha dado al alma para subir al cielo.” – Michelangelo Buonarroti",
            "“El amor es el espacio y el tiempo medido por el corazón.” – Marcel Proust",
            "“Donde reina el amor, sobran las leyes.” – Platón",
            "“Amar es despojarse de los nombres.” – Clarice Lispector",
            "“No sabíamos que era imposible, así que lo hicimos.” – Jean Cocteau",
            "“El amor es como una flor; hay que dejarla crecer.” – John Lennon",
            "“Te amo como se aman ciertas cosas oscuras, secretamente.” – Pablo Neruda",
            "“La mayor declaración de amor es la que no se hace; el hombre que siente mucho, habla poco.” – Platón",
            "“Amar es encontrar belleza en lo que otros no ven.” – Roberto Juarroz",
            "“Lo que se da con el corazón, se queda para siempre.” – Henri-Frédéric Amiel",
            "“El amor es el triunfo de la imaginación sobre la inteligencia.” – H. L. Mencken",
            "“Amar es darle a alguien el poder de destruirte y confiar en que no lo hará.” – Anónimo (atribuido a E. L. James)",
            "“El amor no se mira, se siente, y aún más cuando ella está junto a ti.” – Pablo Neruda",
            "“La medida del amor es amar sin medida.” – San Agustín",
            "“En el amor siempre hay algo de locura, pero también en la locura siempre hay algo de razón.” – Friedrich Nietzsche",
            "“Quien no ama demasiado, no ama lo suficiente.” – Blaise Pascal",
            "“El amor es una promesa; el amor es un recuerdo.” – John Lennon",
            "“El amor es la llave maestra que abre las puertas de la felicidad.” – Oliver Wendell Holmes",
            "“Amar es, sobre todo, aceptar al otro tal como es.” – Paulo Coelho",
            "“Cuando el amor es feliz, lleva al alma a la dulzura y a la bondad.” – Víctor Hugo",
            "“El amor es lo único que crece cuando se reparte.” – Antoine de Saint-Exupéry",
            "“Amar es desear que el otro exista.” – Jacques Lacan",
            "“Podrán cortar todas las flores, pero no podrán detener la primavera.” – Pablo Neruda",
            "“Andábamos sin buscarnos, pero sabiendo que andábamos para encontrarnos.” – Julio Cortázar",
            "“Mi estrategia es que un día cualquiera, no sé cómo ni sé con qué pretexto, por fin me necesites.” – Mario Benedetti",
            "“Me basta mirarte para saber que contigo me voy a empapar el alma.” – Jaime Sabines",
            "“Y de pronto uno sabe que ha encontrado lo que tanto buscaba.” – Gabriel García Márquez",
            "“No es que muera de amor, muero de ti.” – Jaime Sabines",
            "“Un día sabrás que no todos los trenes se detienen dos veces.” – Julio Cortázar",
            "“Si me olvidas, quiero que sepas una cosa… me habrás perdido para siempre.” – Pablo Neruda",
            "“Hay amores que justifican todas las locuras.” – Plutarco Elías Calles",
            "“No hay nostalgia peor que añorar lo que nunca sucedió.” – Joaquín Sabina",
            "“Entre lo que veo y digo, entre lo que digo y callo, entre lo que callo y sueño… está el poema.” – Octavio Paz",
            "“Quédate con quien te mire como si fueras magia.” – Mario Benedetti",
            "“Uno no se enamora de una persona, se enamora de un instante.” – Julio Cortázar",
            "“Lo más bonito que me pasó fue cruzarme contigo en esta vida.” – Facundo Cabral",
        ];
        
        const hoy = new Date();
        const diaDelAnio = Math.floor((hoy - new Date(hoy.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        
        const indiceIdioma = diaDelAnio % teAmoEnIdiomas.length;
        const indicePoema = diaDelAnio % poemas.length;

        document.getElementById('frase-diaria').textContent = teAmoEnIdiomas[indiceIdioma];
        document.getElementById('poema-diario').textContent = poemas[indicePoema];
    }
    mostrarMensajeDiario();

    // --- 3. SPRITE QUE SIGUE AL CURSOR ---
    document.addEventListener('mousemove', function(e) {
        const sprite = document.getElementById('sprite-cursor');
        sprite.style.left = e.pageX + 'px';
        sprite.style.top = e.pageY + 'px';
    });

    // --- 5. GENERADOR DE RAZONES PARA AMARLA ---
    const razones = [
        "Porque llegaste cuando no buscaba a nadie, y aun así te quedaste.",
        "Porque tu risa puede cambiarme el día entero.",
        "Por la forma en que escuchas incluso lo que no digo.",
        "Porque me enseñas que el amor también es paciencia.",
        "Por tus ojos, que son hogar antes de ser mirada.",
        "Porque contigo, los silencios nunca pesan.",
        "Porque me haces sentir suficiente sin pedírmelo.",
        "Por cómo encuentras belleza en lo simple.",
        "Porque haces que crea en mí cuando yo no lo hago.",
        "Por cada palabra que me cura sin que lo sepas.",
        "Porque incluso en mis peores días, me tratas con ternura.",
        "Por cómo abrazas, como si no existiera el resto del mundo.",
        "Porque aprendo contigo que la confianza se construye.",
        "Por tu forma de caminar, como si siempre supieras a dónde ir.",
        "Porque me das calma en medio de mi caos.",
        "Por tu voz, que se me queda tatuada en la memoria.",
        "Porque no eres solo parte de mis días, eres parte de mi vida.",
        "Por cada vez que me haces reír hasta doler el estómago.",
        "Porque me haces creer que el amor es posible.",
        "Por la forma en que me miras, como si me vieras de verdad.",
        "Porque contigo las despedidas siempre son más largas de lo previsto.",
        "Por cada conversación que termina siendo más profunda de lo esperado.",
        "Porque tu existencia me inspira a escribir.",
        "Porque me haces ver que los pequeños gestos son los más grandes.",
        "Por cada mensaje tuyo que me devuelve la esperanza.",
        "Porque en tu compañía, ser yo mismo es fácil.",
        "Por cómo me cuidas sin hacer ruido.",
        "Porque tienes paciencia con mis miedos.",
        "Por cómo logras que quiera ser mejor persona.",
        "Porque me enseñas que amar también es dejar ser.",
        "Por tu forma de emocionarte con las cosas pequeñas.",
        "Porque cada vez que te veo, todo lo demás pierde importancia.",
        "Porque me das memorias que atesoro como tesoros.",
        "Por cómo dices mi nombre.",
        "Porque tu presencia siempre es más importante que cualquier regalo.",
        "Porque tu sonrisa es mi paisaje favorito.",
        "Por la forma en que me entiendes con solo una mirada.",
        "Porque llegas a partes de mí que ni yo conocía.",
        "Por cada vez que me defiendes incluso en mi ausencia.",
        "Porque me haces sentir que pertenezco.",
        "Porque logras que me sienta afortunado solo por conocerte.",
        "Por la forma en que te preocupas por mi bienestar.",
        "Porque me haces sentir que importo.",
        "Por tu capacidad de ver lo bueno en todos.",
        "Porque nunca me pides que cambie para encajar.",
        "Por cómo valoras lo que soy y no solo lo que hago.",
        "Porque tu forma de amar es genuina.",
        "Por los planes que soñamos, aunque no todos se cumplan.",
        "Porque tu esencia sigue viva en mis días.",
        "Por cómo me haces sentir en casa, incluso lejos de casa.",
        "Porque me enseñas que amar es más que decir 'te amo'.",
        "Por las aventuras pequeñas que se vuelven grandes contigo.",
        "Porque contigo, incluso esperar se siente distinto.",
        "Por cómo respetas mis tiempos.",
        "Porque tus abrazos son el mejor lugar del mundo.",
        "Porque me aceptas incluso en mis días grises.",
        "Por cada consejo tuyo que guardo como amuleto.",
        "Porque eres mi refugio sin que lo pida.",
        "Porque tienes una luz que ilumina todo.",
        "Por cómo logras que me sienta especial.",
        "Porque tu ternura es un arte.",
        "Por cómo conviertes lo cotidiano en algo mágico.",
        "Porque tu manera de ser cambia la mía.",
        "Porque tu cariño es honesto.",
        "Porque me enseñas a amar con más profundidad.",
        "Por cómo valoras la sinceridad.",
        "Porque tus imperfecciones te hacen única.",
        "Por cómo cuidas de los demás.",
        "Porque tu risa se queda en mi alma.",
        "Porque eres mi mayor inspiración.",
        "Porque siempre recordaré cómo me miras.",
        "Por cada vez que me das fuerza sin darte cuenta.",
        "Porque sabes ver mis heridas sin asustarte.",
        "Porque eres un capítulo que cambia mi historia.",
        "Por cómo te importan los detalles.",
        "Porque haces que cada día contigo valga la pena.",
        "Por cada vez que crees en mí.",
        "Porque tu forma de quererme es única.",
        "Porque logras que el tiempo contigo sea diferente.",
        "Porque eres verdad en un mundo de apariencias.",
        "Por cada sueño que compartimos.",
        "Porque logras que quiera dar lo mejor de mí.",
        "Porque tu cariño no depende de las circunstancias.",
        "Por cómo sabes decir las palabras justas.",
        "Porque eres mi confidente.",
        "Porque tu sinceridad es valiosa.",
        "Porque tu compañía es el mejor regalo.",
        "Porque me das lecciones que aún aplico.",
        "Porque eres parte de mi crecimiento.",
        "Por cada vez que me sorprendes.",
        "Porque tu amor no se parece a ningún otro.",
        "Porque eres un antes y un después en mi vida.",
        "Porque me muestras que el amor también es cuidar.",
        "Porque tu forma de ser es irrepetible.",
        "Porque eres mi lugar seguro.",
        "Porque logras que crea en lo imposible.",
        "Porque tus gestos son tan importantes como tus palabras.",
        "Porque me das recuerdos que nunca olvidaré.",
        "Porque eres parte de mi historia más bonita.",
        "Porque, aunque no estés físicamente, sigues siendo parte de mí."
    ];


    document.getElementById('btn-razon').addEventListener('click', function() {
        const indiceAleatorio = Math.floor(Math.random() * razones.length);
        document.getElementById('razon-texto').textContent = "Te amo " + razones[indiceAleatorio];
    });
    
    // --- 6. GALERÍA SECRETA ---
    const btnUnlock = document.getElementById('btn-unlock');
    if(btnUnlock) {
        btnUnlock.addEventListener('click', function() {
            const respuestaCorrecta = "maria y pepito"; 
            const respuestaUsuario = document.getElementById('respuesta-secreta').value.toLowerCase().trim();
            const galeria = document.getElementById('galeria-fotos');
            const feedback = document.getElementById('feedback-respuesta');

            if (respuestaUsuario === respuestaCorrecta) {
                galeria.classList.remove('locked');
                document.getElementById('unlock-container').style.display = 'none';
            } else {
                feedback.textContent = "Respuesta incorrecta... ¡Inténtalo de nuevo!";
                setTimeout(() => { feedback.textContent = ""; }, 3000);
            }
        });
    }

    // --- 4. MAPA DE AVENTURAS ---
    const map = L.map('mapa-aventuras').setView([-0.244622, -78.469616], 11); // Centrado en el primer punto con un zoom más alejado
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Array con todas las ubicaciones
    const lugares = [
        { lat: -0.244622, lng: -78.469616, msg: '<b>Aquí nos conocimos</b><br>¡El mejor día de mi vida!' },
        { lat: -0.176672, lng: -78.479299, msg: '<b>Nuestra primera cita</b><br>Donde todo empezó. ☕' },
        { lat: -0.173883, lng: -78.487171, msg: '<b>Nuestro lugar favorito</b><br>Tardes hermosas.' },
        { lat: 0.206445, lng: -78.094685, msg: '<b>Nuestro Primer Viaje con amigos</b><br>' },
        { lat: -0.411410, lng: -78.406573, msg: '<b>Nuestro Primer Trip los dos</b><br>' },
        { lat: -0.181071, lng: -78.480283, msg: '<b>Nuestra primera cena juntos</b><br>' },
        { lat: -0.192373, lng: -78.517863, msg: '<b>Cita Americana</b><br>' },
        { lat: -0.138785, lng: -78.488411, msg: '<b>Nuestro Parque</b><br>' },
        { lat: -0.165912, lng: -78.475808, msg: '<b>Nuestro Desayuno</b><br>' },
        { lat: -0.181707, lng: -78.501243, msg: '<b>Aprender a Manejar y Salida Pedagógica</b><br>' },
        { lat: -0.116821, lng: -78.483657, msg: '<b>Pijamada en mi casa!</b><br>' },
        { lat: -0.179503, lng: -78.478479, msg: '<b>Noches de nosotros</b><br>' },
        { lat: -0.176458, lng: -78.484994, msg: '<b>COMIDAS1!!!</b><br>' },
        { lat: -0.180182, lng: -78.474265, msg: '<b>COMIDAS2!!!</b><br>' },
        { lat: -0.197226, lng: -78.439935, msg: '<b>COMIDAS3!!!</b><br>' },
        { lat: -0.178492, lng: -78.480213, msg: '<b>COMIDAS4!!!</b><br>' },
        { lat: -0.164447, lng: -78.475143, msg: '<b>COMIDAS5!!!</b><br>' },
        { lat: -0.220075, lng: -78.511666, msg: '<b>COMIDAS6!!!</b><br>' },
        { lat: -0.206140, lng: -78.483108, msg: '<b>COMIDAS7!!!</b><br>' },
        { lat: -0.202235, lng: -78.480962, msg: '<b>COMIDAS8!!!</b><br>' },
        { lat: -0.181465, lng: -78.481141, msg: '<b>Dia de muertooooos</b><br>' },
        { lat: -0.217340, lng: -78.437768, msg: '<b>Dia de patinaje</b><br>' },
        { lat: -0.200771, lng: -78.429318, msg: '<b>COMIDAS9!</b><br>' },
        { lat: -0.139377, lng: -78.486021, msg: '<b>COMIDA(CON MI FAMILIA 1)!</b><br>' },
        { lat: -0.210840, lng: -78.494852, msg: '<b>Nuestro Primer Concierto Juntos</b><br>' },
        { lat: -0.183578, lng: -78.538527, msg: '<b>Reconciliados y en lo más alto</b><br>' },
        { lat: -0.202235, lng: -78.427941, msg: '<b>COMIDAS 10!</b><br>' },
        { lat: -0.161799, lng: -78.484416, msg: '<b>COMIDA(CON MI FAMILIA 2)!</b><br>' },
        { lat: -0.160977, lng: -78.498599, msg: '<b>COMIDA(CON MI FAMILIA 3)!</b><br>' },
        { lat: -0.195483, lng: -78.429780, msg: '<b>Cita Dobleeee</b><br>' }
    ];

    // Bucle para añadir cada marcador al mapa
    lugares.forEach(lugar => {
        L.marker([lugar.lat, lugar.lng]).addTo(map).bindPopup(lugar.msg);
    });

// --- FRASCO DE AVENTURAS FUTURAS ---
    const frasco = document.getElementById('frasco-imagen');
    const mensajeAventuraEl = document.getElementById('mensaje-aventura');
    const textoAventuraEl = document.getElementById('texto-aventura');
    const papelito = document.querySelector('.papelito');

    const aventuras = [
    "Hacer un picnic bajo las estrellas.",
    "Un viaje en carretera sin un destino fijo.",
    "Cocinar juntos una receta complicada que nunca hemos intentado.",
    "Ver el amanecer desde la cima de una montaña.",
    "Pasar un día entero en pijama viendo nuestras películas favoritas con mucha comida.",
    "Aprender a bailar salsa juntos.",
    "Construir un fuerte de sábanas en la sala solo los dos.",
    "Dar un paseo en bicicleta por un lugar nuevo.",
    "Ver un atardecer desde la playa o un mirador.",
    "Hacer una maratón de nuestra serie favorita.",
    "Probar un restaurante que ninguno haya visitado antes.",
    "Visitar un museo o galería de arte juntos.",
    "Escribirnos cartas de amor y leerlas en voz alta.",
    "Hacer un tour gastronómico por la ciudad.",
    "Ir a una feria o parque de diversiones.",
    "Acampar en la terraza o en el campo.",
    "Dibujarnos o pintarnos mutuamente.",
    "Explorar un pueblo cercano que nunca hayamos visitado.",
    "Probar comida callejera en diferentes puestos.",
    "Armar un rompecabezas gigante juntos.",
    "Visitar una librería y elegir un libro para leer juntos.",
    "Tomar un curso de cocina o repostería en pareja.",
    "Hacer karaoke en casa o en un bar.",
    "Tomarnos fotos como si fuera una sesión profesional.",
    "Tener una cita temática en casa.",
    "Ver películas antiguas en blanco y negro.",
    "Escribir juntos una lista de sueños a cumplir.",
    "Ir a un parque a alimentar patos o palomas.",
    "Armar una playlist especial para nosotros y bailarla en casa.",
    "Hacer un juego de preguntas profundas y responderlas sin filtros.",
    "Hacer una cata de vinos, chocolates o cafés.",
    "Ver las estrellas con una aplicación de astronomía.",
    "Hacer voluntariado juntos.",
    "Visitar un zoológico o acuarium.",
    "Hacer guerra de globos de agua.",
    "Probar deportes extremos como rafting, parapente o escalada.",
    "Ver juntos un documental interesante y discutirlo.",
    "Construir un álbum de fotos con nuestros recuerdos.",
    "Escribir un cuento juntos y leerlo en voz alta.",
    "Hacer una tarde de spa en casa.",
    "Probar recetas de postres y elegir el mejor.",
    "Ver una obra de teatro o musical.",
    "Tener un día de juegos de mesa.",
    "Hacer una caja del tiempo para abrirla en unos años.",
    "Explorar un mercado artesanal.",
    "Escribir una canción juntos.",
    "Ver una película al aire libre (drive-in o pantalla gigante).",
    "Tener una cita en la azotea con luces y velas.",
    "Viajar en tren o en bus a un lugar nuevo.",
    "Jugar videojuegos en pareja.",
    "Diseñar camisetas personalizadas en casa.",
    "Hacer senderismo y terminar con un picnic.",
    "Visitar un parque temático acuático.",
    "Asistir a un concierto de nuestra banda favorita.",
    "Tomar fotos con cámaras instantáneas.",
    "Pasar la tarde en una cafetería escribiendo.",
    "Visitar un planetario.",
    "Hacer una fogata con malvaviscos.",
    "Tener una tarde de manualidades juntos.",
    "Diseñar un mural en una pared o lienzo.",
    "Probar comida de un país distinto cada mes.",
    "Hacer un tour de helados o postres.",
    "Jugar a esconder pistas en casa como una búsqueda del tesoro.",
    "Visitar un jardín botánico.",
    "Explorar cuevas o cascadas.",
    "Probar yoga en pareja.",
    "Hacer un reto de 24 horas sin tecnología.",
    "Organizar una cita sorpresa el uno para el otro.",
    "Ir a ver fuegos artificiales.",
    "Alquilar una cabaña en la montaña.",
    "Probar clases de pintura con vino.",
    "Visitar un centro histórico y tomar fotos como turistas.",
    "Tener una cena elegante en casa con música en vivo (aunque sea en YouTube).",
    "Escribir mensajes en papeles y pegarlos por la casa para encontrarlos.",
    "Visitar un acuario y elegir un pez favorito.",
    "Construir legos o armar maquetas.",
    "Hacer un tour en kayak.",
    "Tener una guerra de almohadas.",
    "Hacer origamis juntos.",
    "Visitar un observatorio astronómico.",
    "Ir a un escape room.",
    "Ver juntos el amanecer en un viaje improvisado.",
    "Bailar bajo la lluvia.",
    "Escribir en un diario compartido.",
    "Adoptar juntos una planta y cuidarla.",
    "Hacer fotos de parejas inspiradas en Pinterest.",
    "Ir a una feria gastronómica.",
    "Tomar un taller de cerámica.",
    "Organizar un viaje sorpresa de fin de semana."
    ];


    if (frasco) { // Buena práctica: nos aseguramos de que el frasco existe antes de añadir el listener
        frasco.addEventListener('click', () => {
            const indiceAleatorio = Math.floor(Math.random() * aventuras.length);
            textoAventuraEl.textContent = aventuras[indiceAleatorio];

            mensajeAventuraEl.classList.remove('hidden');
            papelito.classList.remove('visible');
            
            void papelito.offsetWidth; // Truco para reiniciar la animación

            papelito.classList.add('visible');
        });
    }
});