import "./App.css";
import {
  ClassCounter,
  FunctionalCounter,
  FunctionalCounterWithRefs,
  // FunctionalCounterWithForwardRefs,
  Triangle,
  Square,
} from "./components";
import SimpleTimeline from "./components/SimpleTimeline";
import Trapezoid from "./components/Trapezoid";
import {
  Shape,
  withTriangleMods,
  withSquareMods,
  ShapeWithRefs,
  withSquareModsRefs,
}
  from "./componentsx";

// NAA.
// 1. ClassCounter is a React Class Component.
// 2. FunctionalCounter is a React Functional Component (RFC) (with basic useState hook)
// 3. FunctionalCounterWithRefs (with both useState and useRef hooks)
// 4. Triangle, Square are RFC that violate DRY principles and have duplicated implementation.
// 5. Shape, withTriangleMods, withSquareModes show Higher Order Component (HOC) to address #4.
// 6. HOC with forward refs.
function App() {
  const Triangle2 = withTriangleMods(Shape);
  const Square2 = withSquareMods(Shape);
  const Square3 = withSquareModsRefs(ShapeWithRefs);

  const element = document.getElementById("square2")
  if (element !== null) {
    element.style.display = "square2-changed"
  } else {
    console.log("element is", element)
  }
  // TODO: NA, NLA.
  // - forwardRefs?
  const side = 5
  const base = 5
  const height = 4
  const base2 = 10

  return (
    <div>
      <p id="paragraph1">
        I am a paragraph element.
      </p>
      <ClassCounter />
      <hr />
      <FunctionalCounter />
      <hr />
      <FunctionalCounterWithRefs />
      <hr />
      <Triangle name="triangle" base={base} height={height} />
      <hr />
      <Square name="square" side={side} />
      <hr />
      <Triangle2 name="triangle 2" base={base} height={height} />
      <hr />
      <Square2 name="square 2" side={side} />
      <hr />
      <Square2 name="square 2" side={side} id="square3" />
      <hr />
      <Square3 displayName="square3" name="square 3" side={side} />
      <hr />
      <Trapezoid name="Trapezoid" base1={base} base2={base2} height={height} />
      <hr />
      <SimpleTimeline />
    </div>
  );
}

export default App;
