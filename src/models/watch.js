import { Box, Text, Scene, MarkerCamera } from "react-aframe-ar";
import watch from './gltf/watch.glb';

function Watch() {
  return (
    <div className="App">
    <div>
    <a-scene>
          <a-marker preset="hiro">
            <a-entity
                rotation="0 180 -10"
                position="0 -10 0"
                scale="0.8 0.8 0.8"
                material="shader: flat"
                gltf-model={watch}
            >
                </a-entity> 
          </a-marker>
          <a-entity camera>
            <a-cursor></a-cursor>
          </a-entity>
        </a-scene>
    </div>
  </div>
  );
}
export default Watch;
