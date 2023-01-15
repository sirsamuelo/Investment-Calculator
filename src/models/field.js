import { Box, Text, Scene, MarkerCamera } from "react-aframe-ar";
import parcel from './gltf/teren.glb';

function Field() {
  return (
    <div className="App">
    <div>
        <a-scene arjs='detectionMode: mono_and_matrix; matrixCodeType: 3x3;'>
            <a-marker type='barcode' value='5'>
                <a-entity
                    rotation="90 0 180"
                    position="0 -3 0"
                    scale="0.2 0.2 0.2"
                    // light="type: ambient; color: #FFF; intensity: 10"
                    // material="shader: flat"
                    gltf-model={parcel}
                ></a-entity>
          </a-marker>
        </a-scene>
    </div>
  </div>
  );
}
export default Field;
