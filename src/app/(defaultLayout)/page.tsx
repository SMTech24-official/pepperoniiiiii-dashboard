import LatestOrders from "@/components/modules/Dashboard/LatestOrders";
import OverView from "@/components/modules/Dashboard/OverView";
import WaveChart from "@/components/modules/Dashboard/WaveChart";

const CommonLayoutHomePage = () => {
  return (
    <div>
      <OverView />
      <WaveChart />
      <LatestOrders />
    </div>
  );
};

export default CommonLayoutHomePage;
