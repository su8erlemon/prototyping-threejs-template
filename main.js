import * as THREE from 'three';

const threeApp = require('./lib/createThree');
const { camera, scene, renderer, controls } = threeApp();

const glsl = require('glslify');
const simpleFrag = glsl.file('./shader/shader.frag');
const simpleVert = glsl.file('./shader/shader.vert');

let geo = new THREE.BoxGeometry(1,1,1);
let mat = new THREE.MeshBasicMaterial({ wireframe: true, color: 0xffffff })
let box = new THREE.Mesh(geo, mat);
scene.add(box);

let shaderMaterial =
    new THREE.ShaderMaterial({
        vertexShader:   simpleVert,
        fragmentShader: simpleFrag
    });
let box1 = new THREE.Mesh(geo, shaderMaterial)
box1.position.x = 1.5;
scene.add(box1);

render();

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera)
}