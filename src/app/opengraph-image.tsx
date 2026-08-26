import { ImageResponse } from 'next/og'

export const alt = 'Amit Das — Product Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const dynamic = 'force-static'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f4efe6',
          padding: '72px 80px',
          borderTop: '14px solid #00838a',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 6, color: '#00838a' }}>
          AMIT-DAS.COM
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 86, fontWeight: 700, color: '#1a1814' }}>
            Amit Das
          </div>
          <div style={{ display: 'flex', fontSize: 40, color: '#3d3a32', marginTop: 12 }}>
            Product Engineer — Gen AI and distributed systems
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, color: '#6b6658' }}>
          Platforms that scale to 1.5M messages per minute
        </div>
      </div>
    ),
    size,
  )
}
