import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "CheapestWayTo cost comparison guides";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#09090b",
          padding: "72px",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: 34, fontWeight: 700 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#ff385c",
              color: "#ffffff"
            }}
          >
            $
          </div>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#ff385c", fontSize: 28, fontWeight: 700 }}>Cost comparisons with real tradeoffs</div>
          <div style={{ maxWidth: 920, marginTop: 22, fontSize: 74, lineHeight: 1.02, fontWeight: 800 }}>
            Find the cheapest way to handle everyday costs.
          </div>
        </div>
        <div style={{ color: "#52525b", fontSize: 28 }}>
          Shipping, travel, repairs, money, legal admin, career, and business guides.
        </div>
      </div>
    ),
    size
  );
}
