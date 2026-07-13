import UploadCard from "../components/dashboard/UploadCard";
import StatsCards from "../components/dashboard/StatsCards";
import Timeline from "../components/dashboard/Timeline";
import IssuesTable from "../components/dashboard/IssuesTable";
import DownloadCard from "../components/dashboard/DownloadCard";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">

        <h1 className="text-5xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-4 text-lg text-slate-400">
          Upload your presentation and let AI analyze formatting consistency.
        </p>

       <div className="mt-12">
         <UploadCard />
        </div>

        <div className="mt-10">
          <StatsCards />
        </div>
        <div className="mt-12">
            <Timeline />
        </div>
        <div className="mt-10">
  <IssuesTable />
  <div className="mt-10">
  <DownloadCard />
</div>
</div>
        

      </div>
    </div>
  );
}

export default Dashboard;