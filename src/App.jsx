import { useState } from "react";
import {
  Cube,
  Joystick,
  Model,
  Mouse,
  OrbitCamera,
  Skybox,
  ThirdPersonCamera,
  useKeyboard,
  useLoop,
  useMouse,
  World,
} from "lingo3d-react";
import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  const [walking, setWalking] = useState(false);
  const narutoRef = useRef();
  const [joystick, setJoystick] = useState({ x: 0, y: 0, angle: 0 });
  const key = useKeyboard();

  const action =
    key === "w" || key === "a" || key === "d" || key === "s" || joystick.y < 0
      ? "walking"
      : "idle";

  const handleIntersect = () => {
    setWalking(false);
  };
  let model = narutoRef.current;

  useLoop(() => {
    model.moveForward(-10);
  }, key === "w");

  useLoop(() => {
    model.moveRight(10);
  }, key === "a");
  useLoop(() => {
    model.moveRight(-10);
  }, key === "d");
  useLoop(() => {
    model.moveForward(5);
  }, key === "s");

  useLoop(() => {
    narutoRef.current.moveForward(-6);
  }, joystick.y < 0);

  return (
    <>
      <World>
        <Skybox
          texture={[
            "Left.png",
            "Right.png",
            "Up.png",
            "Down.png",
            "Front.png",
            "Back.png",
          ]}
        />

        {/* <Model
        src="yile.fbx"
        scale={6}
        x={-1300}
        z={200}
        y={-900}
        physics={"map"}
      /> */}
        <Model
          src="ichigoskin.fbx"
          // scale={1}
          physics={"character"}
          scale={2}
          y={-30}
          z={-30}
          x={60}
        />
        <Model src="ship.glb" scale={30} y={-10} physics={"map"} />

        <ThirdPersonCamera active mouseControl innerZ={100}>
          <Model
            ref={narutoRef}
            src="Naruto.fbx"
            animations={{ idle: "Idle.fbx", walking: "Running.fbx" }}
            animation={action}
            intersectIDs={["orangeBox"]}
            onIntersect={handleIntersect}
            scale={1}
            physics={"character"}
          />
        </ThirdPersonCamera>
      </World>
      <Joystick
        onMove={(e) => setJoystick({ x: e.x, y: e.y, angle: e.angle })}
      />
    </>
  );
}

export default App;
