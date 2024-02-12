import './style.css'
import * as THREE from 'three'
import { water } from './addMeshes'
import { water1 } from './addMeshes'

import { drum1 } from './addMeshes'
import { drum2 } from './addMeshes'
import { drum3 } from './addMeshes'

// import { addBoilerPlateMeshes, addStandardMesh } from './addMeshes'
import { addLight } from './addLights'

const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    100
)
const scene = new THREE.Scene()
scene.background = new THREE.Color('#a7c4d1')

const meshes = {}
const lights = {}
const clock = new THREE.Clock()


init()
function init() {
    //set up our renderer default settings, add scene/canvas to webpage
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    meshes.water = water()
    meshes.water1 = water1()

    meshes.drum1 = drum1()
    meshes.drum2 = drum2()
    meshes.drum3 = drum3()

    lights.default = addLight()

    scene.add(lights.default)
    scene.add(meshes.water)
    scene.add(meshes.water1)

    // scene.add(meshes.drum1)
    scene.add(meshes.drum2)
    scene.add(meshes.drum3)

    camera.position.set(0, 0, 5)
    resize()
    animate()
}

function resize() {
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
    })
}

function animate() {
    requestAnimationFrame(animate)
    const tick = clock.getElapsedTime()
    meshes.water.rotation.x += 0.005
    meshes.water.rotation.y += 0.005
    meshes.water.position.z = Math.sin(tick * 0.5)

    meshes.water1.rotation.x = Math.sin(tick * 0.3) * 2
    meshes.water1.rotation.y = Math.cos(tick * 0.3) * 2

    meshes.water1.position.x = Math.sin(tick * 0.3) * 2
    meshes.water1.position.y = Math.sin(tick * 0.3) * 2

    meshes.drum2.rotation.z = Math.sin(tick * 0.3) * 2

    meshes.drum3.rotation.y = Math.sin(tick * -0.3) * 2

    renderer.render(scene, camera)
}