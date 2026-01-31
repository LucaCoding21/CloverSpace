import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'CloverSpace - Vancouver Realtor Website Agency'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #0f172a 50%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative gradient orb */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            marginBottom: '32px',
          }}
        >
          <span
            style={{
              color: '#22d3ee',
              fontSize: '28px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
            }}
          >
            Clover
          </span>
          <span style={{ color: '#22d3ee', fontSize: '40px' }}>☘︎</span>
          <span
            style={{
              color: '#22d3ee',
              fontSize: '28px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
            }}
          >
            Space
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            color: '#ffffff',
            fontSize: '52px',
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: '800px',
            marginBottom: '20px',
            display: 'flex',
          }}
        >
          Websites Built for Vancouver Realtors
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: '#9ca3af',
            fontSize: '24px',
            textAlign: 'center',
            maxWidth: '700px',
            lineHeight: 1.5,
            display: 'flex',
          }}
        >
          Generate more leads. Rank higher on Google. Close deals faster.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              color: '#22d3ee',
              fontSize: '18px',
              fontWeight: 600,
              display: 'flex',
            }}
          >
            cloverspace.studio
          </div>
          <div
            style={{
              width: '1px',
              height: '20px',
              background: '#374151',
              display: 'flex',
            }}
          />
          <div
            style={{
              color: '#6b7280',
              fontSize: '16px',
              display: 'flex',
            }}
          >
            Vancouver, BC
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
