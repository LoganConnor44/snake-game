import { GameLogic } from "./GameLogic";
import { Snake } from "./Snake";
import { Web } from "./Web";
import { Apple } from "./Apple";
import { CardinalDirections } from "./CardinalDirections";

const webGameCanvas = <HTMLCanvasElement> document.getElementById('gamewebGameCanvas');
const canvasContext = webGameCanvas.getContext('2d');
let web = new Web(700, 500);

// Position helpers
function x(c: number) {
	return Math.round(c * webGameCanvas.width / web.gameCanvas[0].length);
}
function y(r: number) {
	return Math.round(r * webGameCanvas.height / web.gameCanvas.length);
}

const draw = () => {
	canvasContext.fillStyle = "#232323";
	canvasContext.fillRect(0, 0, webGameCanvas.width, webGameCanvas.height);

	canvasContext.fillStyle = "rgb(0, 200, 50)";

}

draw();
console.log(
	"this works"
);

// Game loop draw
// const draw = () => {
//     // clear
//     ctx.fillStyle = '#232323'
//     ctx.fillRect(0, 0, webGameCanvas.width, webGameCanvas.height)
  
//     // draw snake
//     ctx.fillStyle = 'rgb(0,200,50)'
//     state.snake.map(p => ctx.fillRect(x(p.x), y(p.y), x(1), y(1)))
  
//     // draw apples
//     ctx.fillStyle = 'rgb(255,50,0)'
//     ctx.fillRect(x(state.apple.x), y(state.apple.y), x(1), y(1))
  
//     // add crash
//     if (state.snake.length == 0) {
//       ctx.fillStyle = 'rgb(255,0,0)'
//       ctx.fillRect(0, 0, webGameCanvas.width, webGameCanvas.height)
//     }
//   }