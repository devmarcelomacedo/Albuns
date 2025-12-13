const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause');
const anteriorButton = document.getElementById('anterior');
const proximoButton = document.getElementById('proximo');
const capa = document.getElementById('capa');
const titulo = document.getElementById('titulo');
const artista = document.getElementById('artista');
const barraProgresso = document.getElementById('barra-progresso');
const barraProgressoContainer = document.querySelector('.barra-progresso-container');
const tempoAtualSpan = document.getElementById('tempo-atual');
const duracaoTotalSpan = document.getElementById('duracao-total');

// Lista de Músicas
const playlist = [
      {
        titulo: 'When a Man Loves',
        artista: 'Michael Bolton',
        src: 'src/Michael Bolton   When a Man Loves a Woma.mp3', // Substitua pelo caminho real
        capa: 'img/michael button.jpeg'    // Substitua pelo caminho real
    },
      {
        titulo: ' Angel',
        artista: 'Robbie Williams',
        src: 'src/Robbie Williams   Angel.mp3',
        capa: 'img/angels robim.webp'
    },
       {
        titulo: 'Forever Young',
        artista: 'Alphaville',
        src: 'src/Alphaville   Forever Young (Official Music Video.mp3',
        capa: 'img/forever young.jpg'
    },
       {
        titulo: 'Rocket Man',
        artista: 'Elton John',
        src: 'src/Elton John - Rocket Man (Official Music Video)(MP3_160K)_1.mp3',
        capa: 'img/Rocketman.jpg'
    },
       {
        titulo: 'Easy',
        artista: 'Faith No More',
        src: 'src/Faith No More   Easy (Official Music Video.mp3',
        capa: 'img/capa brayam.webp'
    },
       {
        titulo: 'Coming Around Agai',
        artista: 'Carly Simon ',
        src: 'src/Carly Simon   Coming Around Agai.mp3',
        capa: 'img/carly simon.jpg'
    },
       {
        titulo: 'My Oh My',
        artista: 'Slade ',
        src: 'src/Slade   My Oh M.mp3',
        capa: 'img/slade.webp'
    },
       {
        titulo: 'Un Break My Heart',
        artista: 'BToni Braxton ',
        src: 'src/Toni Braxton   Un Break My Heart (Official HD Video.mp3',
        capa: 'img/tony.webp'
    },
       {
        titulo: 'Baby Can I Hold You',
        artista: 'Tracy Chapman',
        src: 'src/Tracy Chapman   Baby Can I Hold You (Live.mp3',
        capa: 'img/tracy.jpg'
    },
       {
        titulo: 'The Way You Are',
        artista: 'Secret Service',
        src: 'src/Secret Service _ The Way You Are.mp3',
        capa: 'img/the Way you are.webp'
    },
       {
        titulo: ' Cry Softly',
        artista: 'Secret Service',
        src: 'src/Secret Service — Cry Softly (OFFICIAL VIDEO,  1982).mp3',
        capa: 'img/cry soft.webp'
    },
       {
        titulo: ' Sh',
        artista: 'Patrick',
        src: 'src/Patrick Swayze   Sh.mp3',
        capa: 'img/patrick.jpg'
    },
        {
        titulo: 'Flaying ',
        artista: 'Chris de Burg',
        src: 'src/Flaying   Chris de Burg   Tradução (Voando)   Hits Again.mp3',
        capa: 'img/flayng.jpg'
    },
    
        {
        titulo: 'Never Say Goodbye',
        artista: 'Bon Jovi ',
        src: 'src/Bon Jovi - Never Say Goodbye (Official Music Video).mp3',
        capa: 'img/bom jovi.jpg'
    },
    
    {
        titulo: 'For Whom The Bell Tolls',
        artista: 'Bee Gees',
        src: 'src/Bee Gees - For Whom The Bell Tolls.mp3',
        capa: 'img/Bee Gees.jpg'
    },
        {
        titulo: ' Halo',
        artista: 'Beyoncé',
        src: 'src/Beyoncé - Halo.mp3',
        capa: 'img/Beyoncé.jpg'
    },
        {
        titulo: 'Skyline Pigeo',
        artista: 'Elton John',
        src: 'src/Elton John   Skyline Pigeo.mp3',
        capa: 'img/empty Garden.jpg'
    },
        {
        titulo: 'Empty Garden ',
        artista: 'Elton John',
        src: 'src/Empty Garden (Hey Hey Johnny.mp3',
        capa: 'img/empty Garden.jpg'
    },
        {
        titulo: 'Torneró ',
        artista: 'I Santo California',
        src: 'src/I Santo California -Torneró - Traduzido.mp3',
        capa: 'img/i santo torneron.jpg'
    },
        {
        titulo: ' Straight From The Heart',
        artista: 'Bryan Adams ',
        src: 'src/Bryan Adams   Straight From The Heart   Live in Lisbon 200.mp3',
        capa: 'img/straigt from.jpg'
    },
        {
        titulo: 'Thats Why ',
        artista: 'Michael Leans',
        src: 'src/That_s_Why_You_Go_Away_Michael_Learns_To_Rock_.mp3',
        capa: 'img/Michael.jpg'
    },
        {
        titulo: 'Gone With the Winner',
        artista: 'Century',
        src: 'src/Gone With the Winner.mp3',
        capa: 'img/Century.jpg'
    },
        {
        titulo: 'Over You',
        artista: 'Lane Brody',
        src: 'src/Lane Brody - Over You.mp3',
        capa: 'img/Lane Brody.jpg'
    },
        {
        titulo: ' Too Much Heaven',
        artista: 'Bee Gees',
        src: 'src/Bee Gees - Too Much Heaven.mp3',
        capa: 'img/Too Much.jpg'
    },
        {
        titulo: 'Just As I Am ',
        artista: 'Air Supply',
        src: 'src/Air Supply - Just As I Am Mp3.mp3',
        capa: 'img/Air Supply  just.jpg'
    },
        {
        titulo: 'Lonely Is The Nigh',
        artista: 'Air Supply',
        src: 'src/Air Supply Lonely Is The Nigh.mp3',
        capa: 'img/Loney.jpg'
    },
        {
        titulo: 'Ready to Take a Chance Again',
        artista: 'Barry Manilow',
        src: 'src/Ready to Take a Chance Again(MP3.mp3',
        capa: 'img/Barry.jpg'
    },
        {
        titulo: 'You_re_the_Inspiration',
        artista: 'Chicago',
        src: 'src/Chicago_You_re_the_Inspiration.mp3',
        capa: 'img/Chicago.jpg'
    },
         {
        titulo: 'Baby I Love You',
        artista: 'Will to Power',
        src: 'src/Will to Power - Baby I Love You.mp3',
        capa: 'img/baby.jpg'
    },
         {
        titulo: 'Only Time Will',
        artista: 'Nelson ',
        src: 'src/Nelson - Only Time Will.mp3',
        capa: 'img/nelson.jpg'
    },
    
];

let indiceMusicaAtual = 0;
let isPlaying = false;

// Função para formatar o tempo em MM:SS
function formatarTempo(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min}:${seg < 10 ? '0' : ''}${seg}`;
}

// 1. Carregar Música
function carregarMusica(indice) {
    const musica = playlist[indice];
    audioPlayer.src = musica.src;
    capa.src = musica.capa;
    titulo.textContent = musica.titulo;
    artista.textContent = musica.artista;
    
    // Recarrega o áudio para aplicar o novo src
    audioPlayer.load();
}

// 2. Tocar/Pausar
function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
    isPlaying = !isPlaying;
    playPauseButton.textContent = isPlaying ? 'Pause' : 'Play';
}

// 3. Próxima/Anterior
function proximaMusica() {
    indiceMusicaAtual = (indiceMusicaAtual + 1) % playlist.length;
    carregarMusica(indiceMusicaAtual);
    if (isPlaying) {
        audioPlayer.play();
    }
}

function musicaAnterior() {
    // Garante que o índice não seja negativo
    indiceMusicaAtual = (indiceMusicaAtual - 1 + playlist.length) % playlist.length;
    carregarMusica(indiceMusicaAtual);
    if (isPlaying) {
        audioPlayer.play();
    }
}

// 4. Atualizar Progresso
function atualizarProgresso() {
    const { duration, currentTime } = audioPlayer;
    const progressoPercentual = (currentTime / duration) * 100;
    barraProgresso.style.width = `${progressoPercentual}%`;

    tempoAtualSpan.textContent = formatarTempo(currentTime);
}

// 5. Definir Duração Total (só quando metadados estiverem carregados)
audioPlayer.addEventListener('loadedmetadata', () => {
    duracaoTotalSpan.textContent = formatarTempo(audioPlayer.duration);
});

// 6. Navegar na Linha do Tempo
function pularPara(e) {
    const largura = barraProgressoContainer.clientWidth;
    const clickX = e.offsetX;
    const duracao = audioPlayer.duration;
    
    audioPlayer.currentTime = (clickX / largura) * duracao;
}

// 7. Event Listeners
playPauseButton.addEventListener('click', togglePlay);
anteriorButton.addEventListener('click', musicaAnterior);
proximoButton.addEventListener('click', proximaMusica);
barraProgressoContainer.addEventListener('click', pularPara);
audioPlayer.addEventListener('timeupdate', atualizarProgresso);
audioPlayer.addEventListener('ended', proximaMusica); // Toca a próxima quando a atual termina

// Inicialização
carregarMusica(indiceMusicaAtual);