import LatestOrders from "@/components/modules/Dashboard/LatestOrders";
import WaveChart from "@/components/modules/Dashboard/WaveChart";
import PageHeader from "@/components/shared/PageHeader";

const CommonLayoutHomePage = () => {
  return (
    <div>
      <PageHeader title="Dashboard"/>
      <WaveChart />
      <LatestOrders />
    </div>
  );
};

export default CommonLayoutHomePage;
