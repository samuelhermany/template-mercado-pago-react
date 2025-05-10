type QRCodeViewerProps = {
  src?: string
}

export default function QRCodeViewer({ src }: QRCodeViewerProps) {
  if (!src) return null

  return (
    <>
      <iframe
        src={src}
        title="QRCode"
        style={{ width: '100%', height: '500px', border: 'none' }}
        sandbox="allow-scripts allow-same-origin"
      />
    </>
  )
}
