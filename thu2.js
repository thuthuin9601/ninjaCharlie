const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH=canvas.width = 600;
const CANVAS_HEIGHT=canvas.height = 600;
const spriteWidth=575;
const spriteHeight=523;
let gameFrame=0;
let playerState='dizzy'
const staggerFrames=2; //chỉnh tốc độ
const spriteAnimations =[];//array cho animations chạy
const animationStates = [//dữ liệu cho animations
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'hurt',
        frames: 4,
    },
];
// animationStates.forEach((tên lớp chung của các phần tử trong mảng, index của phần tử trong mảng) => {})
animationStates.forEach((state, index) => {
    let frames = {
        loc: []
    }
    for(let j=0; j < state.frames; j++){
        let positionX = j* spriteWidth;
        let positionY = index* spriteHeight
        frames.loc.push({x: positionX, y: positionY});// lấy tọa độ x, y của từng sprite
    }
    spriteAnimations[state.name] = frames
});
console.log(spriteAnimations);

const playerImage = new Image();
playerImage.src='shadow_dog.png'

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position= Math.floor(gameFrame/staggerFrames)% spriteAnimations[playerState].loc.length;//công thức của tốc độ+ chỉnh sprite
    let frameX=spriteWidth*position;
    let frameY=spriteAnimations[playerState].loc[position].y;
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImage,frameX,frameY,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
    // if(gameFrame%staggerFrames==0){
    //     if (frameX<6){
    //         frameX++;
    //     }
    //     else {frameX=0}
    // }
    gameFrame++;
    requestAnimationFrame(animate);//tại sao thêm dấu ngoặc nó lại khác nhau
}
animate();