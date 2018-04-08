<template>
	<div ref="stage"></div>
</template>

<script>
	const THREE = require("three")

	module.exports = {
		name: "sample",
		data() {
			const size = [500, 500]
			// === scene ===
			const scene = new THREE.Scene()

			// === renderer ===
			const renderer = new THREE.WebGLRenderer()
			// renderer.setSize(window.innerWidth, window.innerHeight)
			renderer.setSize(size[0], size[1])

			// === camera ===
			// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
			const camera = new THREE.PerspectiveCamera(45, size[0] / size[1], 1, 10000)
			camera.position.z = 1000

			// === light ===
			const light = new THREE.DirectionalLight(0xffffff)
			// light.position.set(0, 0, 10)
			light.position.set(1, 1, 1)

			// === model ===
			// const geometry = new THREE.BoxGeometry(1, 1, 1)
			const geometry = new THREE.SphereGeometry(300, 30, 30)
			// const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
			const material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(require("./earth.jpg")) })
			const mesh = new THREE.Mesh(geometry, material)

			return {
				scene: scene,
				renderer: renderer,
				camera: camera,
				light: light,
				mesh: mesh
			}
		},

		created() {
			// === sceneにmodel,light, cameraを追加 ===
			this.scene.add(this.camera)
			this.scene.add(this.light)
			this.scene.add(this.mesh)
		},

		mounted() {
			// === DOMを追加, animate ===
			this.$refs.stage.appendChild(this.renderer.domElement)
			this.animate()
		},

		methods: {
			animate() {
				requestAnimationFrame(this.animate)

				this.mesh.rotation.x += 0.05 * 0.1
				this.mesh.rotation.y += 0.05 * 0.1

				this.renderer.render(this.scene, this.camera)
			}
		}
	}
</script>

<style></style>