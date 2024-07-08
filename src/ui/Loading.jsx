import { ThreeDots } from "react-loader-spinner";

function Loading({ width = "70", height = "80" }) {
  return (
    <ThreeDots
      visible={true}
      height={height}
      width={width}
      color="rgb(var(--color-primary-900))"
      radius="9"
      ariaLabel="loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
}
export default Loading;
