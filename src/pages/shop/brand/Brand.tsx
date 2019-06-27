/*
 * @Author: 流年的樱花逝
 * @Date: 2019-06-26 17:12:47
 * @Last Modified by: 流年的樱花逝
 * @Last Modified time: 2019-06-27 10:32:18
 * 
 * 
 * @describe  重点是 threejs 对于外部素材的加载 需要requestAnimationFrame
 * 否则无法显示
 * 
 */

import React, { FC, useRef, useEffect } from 'react'
import * as THREE from 'three'
interface BrandProp {}

const Brand: FC<BrandProp> = () => {
  const earchRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    init()
    animate()
  }, [])

  // 初始化threejs的三要素 相机 场景 渲染器

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    1,
    2000
  )
  const scene = new THREE.Scene()
  const renderer = new THREE.WebGLRenderer()


  let mesh: THREE.Mesh

  function init() {
    renderer.setSize(window.innerWidth, window.innerHeight)
    earchRef.current && earchRef.current.appendChild(renderer.domElement)
    camera.position.x = 500
    const earthTextrue = new THREE.TextureLoader().load(
      'http://ptqg3vb51.bkt.clouddn.com/earth.jpg'
    )
    const geometry = new THREE.SphereBufferGeometry(200, 20, 20)
    const material = new THREE.MeshBasicMaterial({ map: earthTextrue })
    mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(0, 0, 100)
    scene.add(mesh)
    window.addEventListener('resize', onWindowResize, false)
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  function animate() {
    requestAnimationFrame(animate)
    render()
  }

  function render() {
    mesh.rotation.y += 0.001
    camera.lookAt(scene.position)
    renderer.render(scene, camera)
  }

  return <div ref={earchRef} />
}
export default Brand
