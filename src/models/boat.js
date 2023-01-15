import { Box, Text, Scene, MarkerCamera } from "react-aframe-ar";
import yacht from './gltf/yacht.glb';

function Boat() {
  return (
    <div className="App">
    <div>
    <a-scene arjs='detectionMode: mono_and_matrix; matrixCodeType: 3x3;'>
          <a-marker type='barcode' value='5'>
          <a-entity
            rotation="90 180 0"
            position="0 -10 0"
            scale="0.002 0.001 0.001"
            light="type: ambient; color: #FFF; intensity: 10"
            material="shader: flat"
            gltf-model={yacht}
            ></a-entity>
          </a-marker>
        </a-scene>
    </div>
  </div>
  );
}
export default Boat;
