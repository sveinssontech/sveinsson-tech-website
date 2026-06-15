import PageBody from "../PageBody/PageBody";
import LazyScene3D from "../Scene3D/LazyScene3D";
import FacePicture from "../../images/Face.jpg";
import * as THREE from "three";

export default function HomeBody() {
  const texture = new THREE.TextureLoader().load(FacePicture);

  return (
    <PageBody>
      <LazyScene3D>
        <mesh>
          <boxGeometry args={[6, 6, 6]} />
          <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
      </LazyScene3D>
      <h1>Hello! My name is Magni</h1>
      <p>
        I run the tech studio Sveinsson Tech. I like experimenting with new and
        exiting tech, making games and playing games as well. Hope those that
        find their way here will enjoy whatever I have been working on!
      </p>
      <h2>Projects I have been a part of</h2>
      <div>
        <p>Waltz of the Wizard</p>
        <p>Capeesh Language Learning</p>
        <p>Optoscale Customer portal</p>
        <p>Virtur Driving Simulator</p>
      </div>
    </PageBody>
  );
}
