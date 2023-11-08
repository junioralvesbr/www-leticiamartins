export default function Video() {
  return (
    <div className="w-full h-full relative pb-[56.25%] rounded-lg">
      <iframe
        className="w-full h-full max-w-4xl absolute inset-0 rounded-lg md:mx-auto"
        src="https://streamable.com/e/w80woi?autoplay=1&nocontrols=1"
        width="100%"
        height="100%"
        allowFullScreen
        allow="autoplay"
      >
      </iframe>
    </div>
  )
}