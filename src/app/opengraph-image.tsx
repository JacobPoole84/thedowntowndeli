import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "The Downtown Deli - Florence";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          color: "#1c1a17",
          background:
            "radial-gradient(circle at 0% 0%, #c9d8e8 0%, #f3f4f1 40%), radial-gradient(circle at 100% 80%, #b8c6ad 0%, #f3f4f1 42%)",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Florence, SC
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "900px" }}>
          <div
            style={{
              fontSize: 86,
              lineHeight: 0.95,
              fontWeight: 700,
            }}
          >
            The Downtown Deli - Florence
          </div>
          <div style={{ fontSize: 36, opacity: 0.88 }}>
            Take-Out and Delivery Only
          </div>
        </div>
        <div
          style={{
            display: "inline-flex",
            width: "fit-content",
            fontSize: 26,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            border: "2px solid #1c1a17",
            borderRadius: "999px",
            padding: "14px 28px",
          }}
        >
          Quality and Excellent Service
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
