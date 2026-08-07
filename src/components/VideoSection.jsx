import SectionShell from './SectionShell';

function VideoSection({ src, title = 'Video Introduction' }) {
  return (
    <SectionShell id="video" title={title}>
      <div className="video-wrapper">
        <video controls playsInline style={{ width: '100%', borderRadius: 12 }}>
          <source src={src || '/intro.mp4'} type="video/mp4" />
          <track kind="captions" src="/captions.vtt" srcLang="en" label="English captions" />
          Your browser does not support the video tag.
        </video>
      </div>
    </SectionShell>
  );
}

export default VideoSection;
