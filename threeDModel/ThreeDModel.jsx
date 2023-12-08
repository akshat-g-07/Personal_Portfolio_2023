import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

// eslint-disable-next-line react/prop-types
const ThreeDModel = ({ scrollTo, scrollDown }) => {
  const animationMixerRef = useRef(null);
  const animationActionRef = useRef(null);

  const someValue = useRef(scrollTo);
  const scrollYValRef = useRef(scrollDown);

  const elapsedTime = useRef(0);

  useEffect(() => {
    let character;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 1, 5);

    const spotLight = new THREE.SpotLight(0xffffff, 100);
    spotLight.position.set(0, 5, 2);
    spotLight.penumbra = 1;
    spotLight.castShadow = true;
    spotLight.shadow.focus = 1;
    scene.add(spotLight);

    const canvasElement = document.querySelector(".webgl");
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasElement,
    });
    renderer.setPixelRatio(2);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const render = () => {
      renderer.render(scene, camera);
    };

    // eslint-disable-next-line no-unused-vars
    const charLoader = new GLTFLoader().load("models/character.glb", (gltf) => {
      character = gltf.scene;
      character.castShadow = true;
      character.scale.set(1, 1, 1);
      character.position.set(0, 0, 0);
      scene.add(character);

      // eslint-disable-next-line no-unused-vars
      const animLoader = new FBXLoader().load("models/animation.fbx", (fbx) => {
        animationMixerRef.current = new THREE.AnimationMixer(character);

        const animationClip = fbx.animations[0];
        animationActionRef.current =
          animationMixerRef.current.clipAction(animationClip);

        animationActionRef.current.play();

        someValue.current = scrollTo;
        scrollYValRef.current = scrollDown;
        const animate = () => {
          requestAnimationFrame(animate);
          animationMixerRef.current.update(0.001 * scrollYValRef.current);

          if (someValue.current === "transition") {
            animationActionRef.current.paused = false;
          }
          if (!animationActionRef.current.paused) {
            animationActionRef.current.time = elapsedTime.current;
            elapsedTime.current += 0.001 * scrollYValRef.current;
          } else {
            elapsedTime.current = animationActionRef.current.time;
          }

          if (
            someValue.current === "landing" &&
            animationActionRef.current.time >= 0 &&
            animationActionRef.current.time <= 0.05
          ) {
            animationActionRef.current.paused = true;
          }
          if (
            someValue.current === "skills" &&
            animationActionRef.current.time >= 1.5 &&
            animationActionRef.current.time <= 1.55
          ) {
            animationActionRef.current.paused = true;
          }
          if (
            someValue.current === "projects" &&
            animationActionRef.current.time >= 2.5 &&
            animationActionRef.current.time <= 2.55
          ) {
            animationActionRef.current.paused = true;
          }
          if (
            someValue.current === "experience" &&
            animationActionRef.current.time >= 4.25 &&
            animationActionRef.current.time <= 4.3
          ) {
            animationActionRef.current.paused = true;
          }
          if (
            someValue.current === "education" &&
            animationActionRef.current.time >= 5.5 &&
            animationActionRef.current.time <= 5.55
          ) {
            animationActionRef.current.paused = true;
          }
          if (
            someValue.current === "hobby" &&
            animationActionRef.current.time >= 6.5 &&
            animationActionRef.current.time <= 6.55
          ) {
            animationActionRef.current.paused = true;
          }
          if (
            someValue.current === "contact" &&
            animationActionRef.current.time >= 8.45 &&
            animationActionRef.current.time <= 8.5
          ) {
            animationActionRef.current.paused = true;
          }

          render();
        };

        animate();
      });
    });

    render();
  }, [scrollTo]);

  return (
    <>
      <canvas className="webgl fixed top-0" />
    </>
  );
};

export default ThreeDModel;
