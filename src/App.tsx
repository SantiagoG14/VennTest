import "./App.css";
import { chartVega } from "venn-helper";
import embed from "vega-embed";

const sets = [
  { sets: ["A"], size: 12 },
  { sets: ["B"], size: 12 },
  { sets: ["C"], size: 12 },
  { sets: ["A", "B"], size: 4 },
  { sets: ["A", "C"], size: 4 },
  { sets: ["B", "C"], size: 4 },
  { sets: ["A", "B", "C"], size: 2 },
];

function App() {
  function renderChart(ref: HTMLDivElement | null) {
    if (!ref) return;

    const chart = chartVega(sets, {
      width: 600,
      height: 350,
      padding: 16,
      orientation: -Math.PI / 2,
      normalize: true,
    });

    embed(ref, chart.schema).then((res) => console.log(res));
  }

  return <div ref={renderChart} />
}

export default App;
