const Application = PIXI.Application;

const app = new Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true
});

app.renderer.backgroundColor = 0x23395D;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);


const Graphics = PIXI.Graphics;

const rectangle = new Graphics();
rectangle.beginFill(0xAA33BB)
    .lineStyle(4, 0xFFEA00, 1)
.drawRect(200, 200, 100, 120)
.endFill();

app.stage.addChild(rectangle);


const poly = new Graphics();
poly.beginFill(0xFF66FF)
    .lineStyle(5, 0xFFEA00, 1)
.drawPolygon([
    600, 50,
    800, 150,
    900, 300,
    400, 400
])
.endFill();

app.stage.addChild(poly)

const circle = new Graphics();
circle.beginFill(0x22AACC)
.drawCircle(440, 200, 80)
.endFill();

app.stage.addChild(circle);

const line = new Graphics();
line.lineStyle(5, 0xFFEA00, 1)
.moveTo(1500, 100)
.lineTo(1500, 800);

app.stage.addChild(line);

const torus = new Graphics();
torus.beginFill(0xFFFDDD)
.drawTorus(100, 700, 80, 100, 0, Math.PI / 2)
.endFill();

app.stage.addChild(torus);

const star = new Graphics();
star.beginFill(0xADADAD)
.drawStar(900, 700, 300, 80)
.endFill();

app.stage.addChild(star);


const style = new PIXI.TextStyle({
    fontFamily: 'Montserrat',
    fontSize: 48,
    fill: 'deepskyblue',
    stroke: '#ffffff',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowDistance: 10,
    dropShadowAngle: Math.PI / 2,
    dropShadowBlur: 4,
    dropShadowColor: '#000000'
})

const myText = new PIXI.Text('Hello world!', style);

app.stage.addChild(myText);

myText.text = 'Text changed!';

myText.style.wordWrap = true;
myText.style.wordWrapWidth = 100;
myText.style.align = 'center';

// app.ticker.add(delta => loop(delta))
//
// function loop(delta) {
//     const rect = new Graphics();
//     rect.beginFill(0xFFFFFF)
//
//         .drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 10, 10)
//         .endFill();
//
//     app.stage.addChild(rect);
// }

app.ticker.add(delta => loop(delta))

function loop(delta) {
    // char1Sprite.x += 1;
    // char1Sprite.rotation += 0.01;
}


// const char1Texture = PIXI.Texture.from('data:image/jpeg;base64,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');
// const char1Sprite = new PIXI.Sprite(char1Texture);


const char1Sprite = new PIXI.Sprite.from('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPHFhOM2TkxUtn3z5EhsfgXIl1kVs2SJ0Gw&usqp=CAU')
app.stage.addChild(char1Sprite);

// char1Sprite.width = 500
// char1Sprite.height = 500

// char1Sprite.scale.x = 1.5;
// char1Sprite.scale.y = 2;
// char1Sprite.scale.set(2, 2);

// char1Sprite.x = 200;
// char1Sprite.y = 400;
char1Sprite.position.set(800, 400);

// char1Sprite.rotation = 1;
// char1Sprite.anchor.x = 0.5;
// char1Sprite.anchor.y = 0.5;
char1Sprite.anchor.set(0.5, 0.5);

char1Sprite.interactive = true;
char1Sprite.buttonMode = true;

char1Sprite.on('pointerdown', function (){
    char1Sprite.scale.x += 0.1;
    char1Sprite.scale.y += 0.1;
});

document.addEventListener('keydown', function (e){
   if(e.key === 'ArrowRight')
       char1Sprite.x += 10;
    if(e.key === 'ArrowLeft')
        char1Sprite.x -= 10;
    if(e.key === 'ArrowUp')
        char1Sprite.y -= 10;
    if(e.key === 'ArrowDown')
        char1Sprite.y += 10;
});


const container = new PIXI.Container();

const char2Sprite = new PIXI.Sprite.from('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPHFhOM2TkxUtn3z5EhsfgXIl1kVs2SJ0Gw&usqp=CAU')
container.addChild(char2Sprite);

const char3Sprite = new PIXI.Sprite.from('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPHFhOM2TkxUtn3z5EhsfgXIl1kVs2SJ0Gw&usqp=CAU')
container.addChild(char3Sprite);

app.stage.addChild(container);

char2Sprite.position.set(1000, 500);

container.x = 200

console.log(char3Sprite.x);
console.log(char3Sprite.getGlobalPosition());
console.log(container.children)

const particleContainer = new PIXI.ParticleContainer(1000,{
    position: true,
    rotation: true,
    vertices: true,
    tint: true,
    uvs: true
});


// const loader = PIXI.Loader.shared;
//
// loader.add('char4Texture', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPHFhOM2TkxUtn3z5EhsfgXIl1kVs2SJ0Gw&usqp=CAU');
//
// loader.load(setup);
//
// function setup(loader, resources) {
//     const char4Sprite = new PIXI.Sprite(
//         resources.char4Texture.texture
//     );
//     char4Sprite.y = 400;
//     app.stage.addChild(char4Sprite);
// }

