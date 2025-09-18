import { ReactuneVideo } from "reactune";

export const ReactuneComponent = () => (
  <ReactuneVideo
    src={`${import.meta.env.BASE_URL}videos/demo.mp4`}
    muted={false}
  />
);
