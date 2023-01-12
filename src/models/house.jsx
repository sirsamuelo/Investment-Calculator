import { Box, Text, Scene, MarkerCamera } from "react-aframe-ar";
import home from './gltf/Cottage.gltf';

function House() {
  return (
    <div className="App">
    <div>
    <a-scene>
          <a-marker preset="hiro">
          {/* <a-light type="directional" position="0 0 0" rotation="-90 0 0" target="#directionaltarget"> */}
          <a-entity
            rotation="110 270 90"
            position="0 -10 0"
            scale="0.8 0.6 0.6"
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
