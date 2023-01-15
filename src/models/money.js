import { Box, Text, Scene, MarkerCamera } from "react-aframe-ar";
import money from './gltf/money.glb';

function Money() {
  return (
    <div className="App">
    <div>
        <a-scene arjs='detectionMode: mono_and_matrix; matrixCodeType: 3x3;'>
            <a-marker type='barcode' value='5'>
                <a-entity
                    rotation="-45 270 70"
                    position="0 -10 0"
                    scale="0.8 0.8 1.8"
                    gltf-model={money}
                ></a-entity>
            </a-marker>
        </a-scene>
    </div>
  </div>
  );
}
export default Money;
