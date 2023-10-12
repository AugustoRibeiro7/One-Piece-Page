const personagens = document.querySelectorAll('.bandeiras');

const nome = document.querySelector("h1");
const texto = document.querySelector("p");
const back = document.querySelector("main");

if(screen.width > 480)
{
    back.style.backgroundImage = "url(img/backgrounds/back_luffy.jpeg)";
    personagens.forEach(personagem =>{
        personagem.addEventListener("click", function(event){
            if (!event.isTrusted) return;

            if(personagem === personagens[0])
            {
                nome.innerHTML = "Monkey D. Luffy";
                texto.innerHTML = "Também conhecido como Luffy do Chapéu de Palha, é o fundador e capitão dos cada vez mais infames e poderosos Piratas do Chapéu de Palha, bem como o mais poderoso de seus melhores lutadores. Ele deseja encontrar o tesouro lendário deixado para trás pelo falecido Gol D. Roger e assim se tornar o Rei dos Piratas, o que ajudaria a facilitar um sonho desconhecido dele que ele contou apenas para Shanks, seus irmãos e tripulação. Ele acredita que ser o Rei dos Piratas significa ter a maior liberdade do mundo.";
                back.style.backgroundImage = "url(img/backgrounds/back_luffy.jpeg)";
            }
            else if(personagem === personagens[1])
            {
                nome.innerHTML = "Roronoa Zoro";
                texto.innerHTML = "Roronoa Zoro, também conhecido como Caçador de Piratas, é o espadachim dos Piratas do Chapéu de Palha e um ex-caçador de recompensas. Ele foi o primeiro membro a juntar-se à tripulação. Ele é um dos quatro melhores lutadores da tripulação, contendo o sonho de se tornar o maior espadachim do mundo. Como o Luffy, ele é considerado um dos piratas da infame Pior Geração.";
                back.style.backgroundImage = "url(img/backgrounds/back_zoro.jpeg)";
            }
            else if(personagem === personagens[2])
            {
                nome.innerHTML = "Vinsmoke Sanji";
                texto.innerHTML = "\"Perna Preta\" Sanji, nascido como Vinsmoke Sanji, é o cozinheiro dos Piratas do Chapéu de Palha, assim como um antigo chefe de cozinha do Baratie. Ele também é o terceiro filho e a quarta criança da Família Vinsmoke, tornando-o um príncipe do Reino Germa, até que ele oficialmente os renunciou duas vezes. Apesar de Sanji renunciar ao seu sobrenome Vinsmoke, o Governo Mundial o rotula como parte de seu nome em seu pôster de procurado. Seu sonho é encontrar o paraíso dos chefes, All Blue.";
                back.style.backgroundImage = "url(img/backgrounds/back_sanji.jpeg)";
            }
            else if(personagem === personagens[3])
            {
                nome.innerHTML = "Nico Robin";
                texto.innerHTML = "Também conhecida como \"Criança Demônio\" e \"Luz da Revolução\", é a arqueóloga dos Piratas do Chapéu de Palha. Ela é a única sobrevivente da ilha destruída de Ohara, localizada no West Blue. Como resultado, ela é atualmente a única pessoa no mundo com a capacidade de ler e decifrar Poneglyphs, uma habilidade que é considerada proibida e que ameaça o Governo Mundial.";
                back.style.backgroundImage = "url(img/backgrounds/back_robin.jpg)";
            }
            else if(personagem === personagens[4])
            {
                nome.innerHTML = "Usopp";
                texto.innerHTML = "\"God\" Usopp é o Atirador dos Piratas do Chapéu de Palha. Ele é o quarto membro da tripulação e o terceiro a entrar. Após colaborar com os Chapéus de Palha para derrotar Kuro e os Piratas do Gato Preto, ele foi convidado a se juntar à tripulação. Apesar de sua covardia normal, Usopp sonha em se tornar um corajoso guerreiro do mar como seu pai, e vive todos os dias em busca de viver à altura deste sonho.";
                back.style.backgroundImage = "url(img/backgrounds/back_usopp.jpg)";
            }
            else if(personagem === personagens[5])
            {
                nome.innerHTML = "Tony Tony Chopper";
                texto.innerHTML = "Ele é o médico da tripulação dos Piratas do Chapéu de Palha. Chopper é uma rena que, após comer a Hito Hito no Mi, adquiriu a habilidade de se transformar e raciocinar como os humanos.Ele é o sexto membro e um dos poucos membros da tripulação que nasceu na Grand Line, numa ilha chamada Drum.";
                back.style.backgroundImage = "url(img/backgrounds/back_chopper.jpg)";
            }
            else if(personagem === personagens[6])
            {
                nome.innerHTML = "Franky";
                texto.innerHTML = "Franky é o carpinteiro dos Piratas do Chapéu de Palha. Ele é um cyborg de 36 anos de Water 7 e foi introduzido na história como o líder da Família Franky, um grupo de desmantelamento de navios. A pedido da Família Franky, Franky foi permitido se juntar aos Chapéu de Palha para realizar seu sonho de criar e dirigir um navio capaz de dar a volta ao mundo, o Thousand Sunny.";
                back.style.backgroundImage = "url(img/backgrounds/back_frank.png)";
            }
            else if(personagem === personagens[7])
            {
                nome.innerHTML = "Jinbe";
                texto.innerHTML = "\"Cavaleiro do Mar\" Jinbe é o timoneiro dos Piratas do Chapéu de Palha. Ele é um homem-peixe sendo um tubarão-baleia e um poderoso mestre do karatê Homem-Peixe. Seu sonho é realizar o desejo moribundo de seu ex-capitão Fisher Tiger de coexistência e igualdade entre humanos e homens-peixe. Ele era um membro dos Piratas do Sol, eventualmente se tornando seu segundo capitão após a morte de seu capitão original, Tiger. Ele eventualmente se tornou um dos Shichibukai, embora tenha renunciado durante a Batalha de Marineford.";
                back.style.backgroundImage = "url(img/backgrounds/back_jinbe.jpeg)";
            }


        })
    });
}
else
{
    back.style.backgroundImage = "url(img/backgrounds/celular/back_luffy.jpeg)";

    personagens.forEach(personagem =>{
        personagem.addEventListener("click", function(event){
            if (!event.isTrusted) return;

            if(personagem === personagens[0])
            {
                nome.innerHTML = "Monkey D. Luffy";
                texto.innerHTML = "Também conhecido como Luffy do Chapéu de Palha, é o fundador e capitão dos cada vez mais infames e poderosos Piratas do Chapéu de Palha, bem como o mais poderoso de seus melhores lutadores. Ele deseja encontrar o tesouro lendário deixado para trás pelo falecido Gol D. Roger e assim se tornar o Rei dos Piratas, o que ajudaria a facilitar um sonho desconhecido dele que ele contou apenas para Shanks, seus irmãos e tripulação. Ele acredita que ser o Rei dos Piratas significa ter a maior liberdade do mundo.";
                back.style.backgroundImage = "url(img/backgrounds/celular/back_luffy.jpeg)";
            }
            else if(personagem === personagens[1])
            {
                nome.innerHTML = "Roronoa Zoro";
                texto.innerHTML = "Roronoa Zoro, também conhecido como Caçador de Piratas, é o espadachim dos Piratas do Chapéu de Palha e um ex-caçador de recompensas. Ele foi o primeiro membro a juntar-se à tripulação. Ele é um dos quatro melhores lutadores da tripulação, contendo o sonho de se tornar o maior espadachim do mundo. Como o Luffy, ele é considerado um dos piratas da infame Pior Geração.";
                back.style.backgroundImage = "url(img/backgrounds/celular/back_zoro.jpeg)";
            }
            else if(personagem === personagens[2])
            {
                nome.innerHTML = "Vinsmoke Sanji";
                texto.innerHTML = "\"Perna Preta\" Sanji, nascido como Vinsmoke Sanji, é o cozinheiro dos Piratas do Chapéu de Palha, assim como um antigo chefe de cozinha do Baratie. Ele também é o terceiro filho e a quarta criança da Família Vinsmoke, tornando-o um príncipe do Reino Germa, até que ele oficialmente os renunciou duas vezes. Apesar de Sanji renunciar ao seu sobrenome Vinsmoke, o Governo Mundial o rotula como parte de seu nome em seu pôster de procurado. Seu sonho é encontrar o paraíso dos chefes, All Blue.";
                back.style.backgroundImage = "url(img/backgrounds/celular/back_sanji.jpeg)";
            }
            else if(personagem === personagens[3])
            {
                nome.innerHTML = "Nico Robin";
                texto.innerHTML = "Também conhecida como \"Criança Demônio\" e \"Luz da Revolução\", é a arqueóloga dos Piratas do Chapéu de Palha. Ela é a única sobrevivente da ilha destruída de Ohara, localizada no West Blue. Como resultado, ela é atualmente a única pessoa no mundo com a capacidade de ler e decifrar Poneglyphs, uma habilidade que é considerada proibida e que ameaça o Governo Mundial.";
                back.style.backgroundImage = "url(img/backgrounds/celular/back_robin.jpeg)";
            }
            else if(personagem === personagens[4])
            {
                nome.innerHTML = "Usopp / Sogeking";
                texto.innerHTML = "\"God\" Usopp é o Atirador dos Piratas do Chapéu de Palha. Ele é o quarto membro da tripulação e o terceiro a entrar. Após colaborar com os Chapéus de Palha para derrotar Kuro e os Piratas do Gato Preto, ele foi convidado a se juntar à tripulação. Apesar de sua covardia normal, Usopp sonha em se tornar um corajoso guerreiro do mar como seu pai, e vive todos os dias em busca de viver à altura deste sonho.";
                back.style.backgroundImage = "url(img/backgrounds/celular/back_usopp.jpeg)";
            }
            else if(personagem === personagens[5])
            {
                nome.innerHTML = "Tony Tony Chopper";
                texto.innerHTML = "Ele é o médico da tripulação dos Piratas do Chapéu de Palha. Chopper é uma rena que, após comer a Hito Hito no Mi, adquiriu a habilidade de se transformar e raciocinar como os humanos.Ele é o sexto membro e um dos poucos membros da tripulação que nasceu na Grand Line, numa ilha chamada Drum.";
                back.style.backgroundImage = "url(img/backgrounds/celular/back_chopper.jpeg)";
            }
            else if(personagem === personagens[6])
            {
                nome.innerHTML = "Franky";
                texto.innerHTML = "Franky é o carpinteiro dos Piratas do Chapéu de Palha. Ele é um cyborg de 36 anos de Water 7 e foi introduzido na história como o líder da Família Franky, um grupo de desmantelamento de navios. A pedido da Família Franky, Franky foi permitido se juntar aos Chapéu de Palha para realizar seu sonho de criar e dirigir um navio capaz de dar a volta ao mundo, o Thousand Sunny.";
                back.style.backgroundImage = "url(img/backgrounds/celular/back_frank.jpeg)";
            }
            else if(personagem === personagens[7])
            {
                nome.innerHTML = "Jinbe";
                texto.innerHTML = "\"Cavaleiro do Mar\" Jinbe é o timoneiro dos Piratas do Chapéu de Palha. Ele é um homem-peixe sendo um tubarão-baleia e um poderoso mestre do karatê Homem-Peixe. Seu sonho é realizar o desejo moribundo de seu ex-capitão Fisher Tiger de coexistência e igualdade entre humanos e homens-peixe. Ele era um membro dos Piratas do Sol, eventualmente se tornando seu segundo capitão após a morte de seu capitão original, Tiger. Ele eventualmente se tornou um dos Shichibukai, embora tenha renunciado durante a Batalha de Marineford.";
                back.style.backgroundImage = "url(img/backgrounds/celular/back_jinbe.png)";
            }


        })
    });
}