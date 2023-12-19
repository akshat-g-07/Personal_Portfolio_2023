import LaunchIcon from "@mui/icons-material/Launch";

const TechWrite = () => {
  return (
    <div className="bg-[url('/images/techImage.png')] w-32 h-32 bg-no-repeat bg-cover flex items-center justify-center animate-spinSlow mt-6 cursor-pointer">
      <div className="animate-spinRev">
        <LaunchIcon className="text-[#9c27b0] hover:text-[#7b1fa2]" />
      </div>
    </div>
  );
};

export default TechWrite;
