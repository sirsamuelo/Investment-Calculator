import { Box, Text, Scene, MarkerCamera } from "react-aframe-ar";
import home from './gltf/home.glb';

function House() {
  return (
    <div className="App">
    <div>
    <a-scene>
          <a-marker preset="hiro">
          {/* <a-light type="directional" position="0 0 0" rotation="-90 0 0" target="#directionaltarget"> */}
          <a-entity
            rotation="90 270 90"
            position="3 0 0"
            scale="0.5 0.3 0.3"
            id="directionaltarget"
            gltf-model={home}
            ></a-entity>
            {/* </a-light> */}
          </a-marker>
          <a-entity camera>
            <a-cursor></a-cursor>
          </a-entity>
        </a-scene>
    </div>
  </div>
  );
}
export default House;
