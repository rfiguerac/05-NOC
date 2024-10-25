import { Server } from "./presentacion/server";

//funcion anonima auto invocada
(async()=> {
    main();
})();

function main(){
    Server.start();
}