import { DNA } from "react-loader-spinner";
export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <DNA
        visible={true}
        height="80" 
        width="80"  
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
        color={["#000", "#FFF"]} 
      />
    </div>
  );
}

