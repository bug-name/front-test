

var camera = new THREE.PerspectiveCamera(75, 736 / 736, 1, 500);
camera.position.y = 60;

var model;
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

renderer.setSize(736, 736);
$('#fox').append(renderer.domElement);

let loader = new THREE.GLTFLoader();
loader.load('assets/models/fox.glb', function (gltf) {
    model = gltf.scene.children[0];
    model.scale.set(1, 1, 1);
    scene.add(gltf.scene);
});

var clock = new THREE.Clock();
var angle = 0;
var angularSpeed = THREE.Math.degToRad(12); // градусов в секунду
var delta = 200;
var radius = 200;

const color = 0xFFFFFF;
const intensity = 0.6;
const intensity2 = 0.5;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(0, 100, 0);
light.target.position.set(0, 0, 0);
scene.add(light);
const light2 = new THREE.DirectionalLight(color, intensity2);
light2.position.set(0, 20, 100);
light2.target.position.set(0, 0, 0);
scene.add(light2);
scene.add(light2.target);
const color3 = 0xFFFFFF;
const intensity3 = 0.3;
const light3 = new THREE.AmbientLight(color3, intensity3);
scene.add(light3);

function animate() {
    delta = clock.getDelta();
    requestAnimationFrame(animate);
    camera.position.x = Math.cos(angle) * radius;
    camera.position.z = Math.sin(angle) * radius;
    angle += angularSpeed * delta;
    camera.lookAt(0, 30, 0);
    light2.position.set(camera.position.x, 0, camera.position.z);
    renderer.render(scene, camera);
}

animate();
