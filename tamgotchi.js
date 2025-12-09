

// --- MODELO ---
let hambre = 0;
let felicidad = 10;
let estaMuerto = false;


//---VISTA---
function vista() {

    // OPCIONAL: Mensaje de fin de juego
    let mensaje = estaMuerto ? "<div class='game-over'>GAME OVER</div>" : "";

    document.getElementById("app").innerHTML = `
        <div class="pet-screen">
            <h1>PIXEL PET</h1>
            
            <div class="pet-face">
                ${estaMuerto ? "💀" : "👾"} 
            </div>

            <div class="stats">
                <div>🍗 Hambre:${vistaIconos("🍗", hambre)}</div>
                <div>❤️ Felicidad:${vistaIconos("❤️", felicidad)} </div>
            </div>

            ${estaMuerto ? "<div class='game-over'>GAME OVER</div>" : ` <div class="controls">
                <button class="boton" id="btn-comer">Dar Comida</button>
                <button class="boton" id="btn-jugar">Jugar</button>
            </div>` }
            
           
        </div>
    `

    document.getElementById("btn-comer").onclick = () => {
        if (hambre > 0)
            hambre--
          document.getElementById("btn-comer").onclick = () => {
        if (hambre > 0) {
            hambre--;
            
            // 1. Bloqueamos el botón
            comiendo = true;
            vista(); // Pintamos el botón gris ("Masticando...")

            // 2. Iniciamos el temporizador de 1 segundo (1000ms)
            setTimeout(() => {
                comiendo = false; // Desbloqueamos
                vista(); // Pintamos el botón amarillo otra vez
            }, 1000);
        }
    }

        vista()

    }
    

}

function vistaIconos(icono, zenbat) {
    let iconos = []
    for (i = 0; i < zenbat; i++) {
        iconos.push(icono)
    }
    return iconos.join("")
}

vista()




function pasoDelTiempo() {
    // 2 segundoro (2000ms), maskotak okerrera egiten du
    setTimeout(() => {

        // 1. Estatistikak okertzen ditugu
        hambre++;      // Gosea sartzen zaio
        felicidad--;   // Tristetu egiten da

        // 2. Balioak mugatzen ditugu (infinituak izan ez daitezen)
        if (hambre > 10) hambre = 10;
        if (felicidad < 0) felicidad = 0;



        // Primero calculamos si está vivo o muerto
        estaMuerto = (hambre >= 10 || felicidad <= 0);

        // 3. Pantaila eguneratzen dugu
        vista();
        

        // 4. Tenporizadoreari berriro deitzen diogu (Begizta infinitua)
        if (!estaMuerto)
            pasoDelTiempo();

    }, 2000);
}

// DENBORA HASI
pasoDelTiempo();

