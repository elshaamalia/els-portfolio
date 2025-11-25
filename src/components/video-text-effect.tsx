"use client"
import { useState } from "react"
import Image from "next/image"

interface VideoTextEffectProps {
  text: string
  videoSrc?: string
  imageSrc?: string
  fontSize?: string
  className?: string
}

export default function VideoTextEffect({
  text,
  videoSrc,
  imageSrc,
  fontSize = "text-9xl",
  className = "",
}: VideoTextEffectProps) {
  const [elementId] = useState(() => `video-text-${Math.random().toString(36).substr(2, 9)}`)

  return (
    <>
      <style>{`
        #${elementId} {
          position: relative;
          font-weight: 900;
          font-size: 12rem;
          line-height: 1;
          margin: 0;
          padding: 0;
          font-family: 'Arial', sans-serif;
        }

        #${elementId}-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          -webkit-mask-image: url(#${elementId}-mask);
          mask-image: url(#${elementId}-mask);
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
        }

        #${elementId}-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        #${elementId}-text {
          color: rgba(0, 0, 0, 0);
          background: transparent;
        }
      `}</style>

      <div className={`relative inline-block ${className}`} style={{ isolation: "isolate" }}>
        <svg width="0" height="0" style={{ position: "absolute", visibility: "hidden" }}>
          <defs>
            <mask id={`${elementId}-mask`}>
              <rect width="100%" height="100%" fill="white" />
              <text
                id={`${elementId}-text`}
                x="0"
                y="0.8em"
                textAnchor="start"
                dominantBaseline="hanging"
                style={{
                  fontSize: "12rem",
                  fontWeight: 900,
                  fontFamily: "Arial, sans-serif",
                  fill: "black",
                }}
              >
                {text}
              </text>
            </mask>
          </defs>
        </svg>

        <h1 id={elementId} className={fontSize}>
          {videoSrc && (
            <video
              id={`${elementId}-video`}
              autoPlay
              muted
              loop
              playsInline
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
          {imageSrc && !videoSrc && (
            <Image
              id={`${elementId}-image`}
              src={imageSrc}
              alt={text}
              fill
              style={{
                objectFit: "cover",
              }}
            />
          )}
          <span style={{ position: "relative", zIndex: 10 }}>{text}</span>
        </h1>
      </div>
    </>
  )
}