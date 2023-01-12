import { Box, Text, Scene, MarkerCamera } from "react-aframe-ar";
import money from './gltf/money.glb';

function Money() {
  return (
    <div className="App">
    <div>
    <a-scene>
          <a-marker preset="hiro">
          {/* <a-light type="directional" position="0 0 0" rotation="-90 0 0" target="#directionaltarget"> */}
          <a-entity
            rotation="-45 270 70"
            position="0 -10 0"
            scale="0.8 0.8 1.8"
            id="directionaltarget"
            gltf-model={money}
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
export default Money;
