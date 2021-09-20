import { SemanticLoader } from "../components/SemanticLoader";
import { SemanticLoadError } from "../components/SemanticLoadError";
import useAxiosOnMount from "../hooks/useAxiosOnMount";

export default function ThingsWithAxiosHook() {
  //{data:things} destructuring data here and renaming it to things
  // const { data: things, loading, error } = useAxiosOnMount("/api/things");

  // const renderThings = () => {
  //   if (loading) return <SemanticLoader />;
  //   if (error)
  //     return (
  //       <SemanticLoadError
  //         header={"Error occurred getting things"}
  //         error={error}
  //       />
  //     );
  //   if (things.length === 0) {
  //     return <p>no things</p>;
  //   }
  //   return things.map((t) => {
  //     return (
  //       <div key={t.id}>
  //         <p>
  //           Name: {t.name}
  //         </p>
  //       </div>
  //     );
  //   });
  // };

  return (
    <div>
      <h1>Things</h1>
      {/* {renderThings()} */}
    </div>
  );
};