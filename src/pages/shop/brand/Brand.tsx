/*
 * @Author: 流年的樱花逝
 * @Date: 2019-06-26 17:12:47
 * @Last Modified by: 流年的樱花逝
 * @Last Modified time: 2019-06-26 17:31:07
 */

import React, { FC, useRef } from 'react'
import * as THREE from 'three'
import { ECANCELED } from 'constants'
interface BrandProp {}
const Brand: FC<BrandProp> = () => {
  const earchRef = useRef<HTMLDivElement>(null)

  function init() {
    // 透视相机
    const carmera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      2000
    )

    const scene = new THREE.Scene()

    // 加载皮肤
    const loader = new THREE.TextureLoader()
    loader.load('textures/earth.jpg', texture => {
      const geometry = new THREE.SphereBufferGeometry(200, 20, 20)
      const material = new THREE.MeshLambertMaterial({ map: texture })
      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)
    })

    const render = new THREE.WebGLRenderer()
    render.setSize(window.innerWidth, window.innerHeight)
    earchRef.current && earchRef.current.appendChild(render.domElement)
  }

  return <div ref={earchRef} />
}
export default Brand
