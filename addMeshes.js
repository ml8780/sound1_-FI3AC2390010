import {
	BoxGeometry,
	MeshBasicMaterial,
	MeshStandardMaterial,
	Mesh,
	SphereGeometry,
	CapsuleGeometry,
	RingGeometry,
	MeshPhongMaterial,
	MeshLambertMaterial,
	MeshPhysicalMaterial,
	TextureLoader,
	CylinderGeometry
} from 'three'

const loader = new TextureLoader()

export const water = () => {
	const color = loader.load('/textures/Water_001_COLOR.jpg')
	const displace = loader.load('/textures/Water_001_DISP.png')
	const normal = loader.load('/textures/Water_001_NORM.jpg')
	const waterGeometry = new SphereGeometry(3, 250, 250)
	const waterMaterial = new MeshPhysicalMaterial({
		map:color, 
		displacementMap: displace, 
		normalMap: normal, 
		metalness:0.0, 
		roughness:0.1,
		thickness:1.5,
		sheen: 0.5,
		sheenColor: 'white',
		transparent: true,
		opacity:0.5,
		// wireframe: true
	})
	const waterMesh = new Mesh(waterGeometry,waterMaterial)
	return waterMesh
}

export const water1 = () => {
	const color = loader.load('/textures/Water_001_COLOR.jpg')
	const displace = loader.load('/textures/Water_001_DISP.png')
	const normal = loader.load('/textures/Water_001_NORM.jpg')
	const water1Geometry = new SphereGeometry(0.1, 250, 250)
	const water1Material = new MeshPhysicalMaterial({
		map:color, 
		displacementMap: displace, 
		normalMap: normal, 
		metalness:0.0, 
		roughness:0.1,
		thickness:1.5,
		sheen: 0.8,
		sheenColor: 'red',
		// transparent: true,
		// opacity:0.5,
		// wireframe: true
	})
	const water1Mesh = new Mesh(water1Geometry,water1Material)
	return water1Mesh
}

export const drum1 = () =>{
	const drum1Geometry = new CylinderGeometry(2, 0.5, 1.5, 250)
	const drum1Material = new MeshStandardMaterial({
		color:0x03ff07, 
		metalness: 0.3, 
		roughness:1,
		wireframe:true
	})
	const drum1Mesh = new Mesh(drum1Geometry,drum1Material)
	drum1Mesh.position.set(0, -2.5, 2)
	
	return drum1Mesh
}

export const drum2 = () =>{
	const drum2Geometry = new CylinderGeometry(1.5, 0.05, 1.5, 80)
	const drum2Material = new MeshStandardMaterial({
		color:0x03ff07, 
		metalness: 0.3, 
		roughness:1,
		wireframe:true
	})
	const drum2Mesh = new Mesh(drum2Geometry,drum2Material)
	drum2Mesh.position.set(3, 2.5, 0)
	drum2Mesh.rotateZ(90)
	
	return drum2Mesh
}

export const drum3 = () =>{
	const drum3Geometry = new CylinderGeometry(1.5, 0.05, 1.5, 80)
	const drum3Material = new MeshStandardMaterial({
		color:0x03ff07, 
		metalness: 0.3, 
		roughness:1,
		wireframe:true
	})
	const drum3Mesh = new Mesh(drum3Geometry,drum3Material)
	drum3Mesh.position.set(-3, -2.5, 0)
	drum3Mesh.rotateZ(-45)
	
	return drum3Mesh
}