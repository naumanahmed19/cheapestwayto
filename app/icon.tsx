import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ff385c",
          color: "#ffffff",
          fontSize: 260,
          fontWeight: 800,
          fontFamily: "Arial, sans-serif"
        }}
      >
        $
      </div>
    ),
    size
  );
}
