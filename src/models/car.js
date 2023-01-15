import { Box, Text, Scene, MarkerCamera } from "react-aframe-ar";
import car from './gltf/mercedes.glb';

function Car() {
  return (
    <div className="App">
    <div>
        <a-scene arjs='detectionMode: mono_and_matrix; matrixCodeType: 3x3;'>
            <a-marker type='barcode' value='5'>
                <a-entity
                    rotation="90 180 0"
                    position="0 -10 0"
                    scale="2.5 2 2"
                    light="type: ambient; color: #FFF; intensity: 10"
                    material="shader: flat"
                    gltf-model={car}
                ></a-entity>
            </a-marker>
        </a-scene>
    </div>
  </div>
  );
}
export default Car;
