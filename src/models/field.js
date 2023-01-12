import { Box, Text, Scene, MarkerCamera } from "react-aframe-ar";
import parcel from './gltf/teren.glb';

function Field() {
  return (
    <div className="App">
    <div>
    <a-scene> 
          <a-marker preset="hiro">
          <a-entity
            rotation="90 0 180"
            position="0 -10 0" 
            scale="20 20 20"
            // light="type: ambient; color: #FFF; intensity: 10"
            // material="shader: flat"
            gltf-model={parcel}
            ></a-entity>
          </a-marker>
          <a-entity camera>
            <a-cursor></a-cursor>
          </a-entity>
          <a-asset-item src={msg}></a-asset-item>
        </a-scene>
    </div>
  </div>
  );
}
export default Field;
