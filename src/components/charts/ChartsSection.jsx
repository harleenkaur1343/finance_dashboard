import LineChartComponent from "./LineChartComponent";
import DonutChartComponent from "./DonutChartComponent";

export default function ChartsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <LineChartComponent />
      <DonutChartComponent />
    </div>
  );
}
