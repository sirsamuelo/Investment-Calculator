import { Box, Text, Scene, MarkerCamera } from "react-aframe-ar";
import home from './gltf/home.glb';

function House() {
  return (
    <div className="App">
    <div>
        <a-scene arjs='detectionMode: mono_and_matrix; matrixCodeType: 3x3;'>
            <a-marker type='barcode' value='5'>
                <a-entity
                    rotation="90 270 90"
                    position="3 0 0"
                    scale="0.5 0.3 0.3"
                    gltf-model={home}
                ></a-entity>
          </a-marker>
        </a-scene>
    </div>
  </div>
  );
}
export default House;
