const luzes = ['vermelho', 'amarelo', 'verde'];

let luzAtual = 0;

function mudaLuz()
{
    luzes.forEach(cor => {
        document.getElementById(`luz-${cor}`).classList.remove(cor);
    });

     document.getElementById(`luz-${luzes[luzAtual]}`).classList.add(luzes[luzAtual]);
    
     luzAtual = (luzAtual +1) % luzes.length;
}

setInterval(mudaLuz, 3000);

mudaLuz();