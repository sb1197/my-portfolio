import SectionShell from './SectionShell';
import '../styles/VideoSection.css';

function VideoSection({ src }) {
  return (
    <SectionShell id="video">
      <article>
        <h3>Video Introduction</h3>
        <div className="video-wrapper">
          <video controls playsInline style={{ width: '100%', borderRadius: 12 }}>
            <source src={src || '/intro.mp4'} type="video/mp4" />
            <track kind="captions" src="/captions.vtt" srcLang="en" label="English captions" />
            Your browser does not support the video tag.
          </video>
        </div>
      </article>
    </SectionShell>
  );
}

export default VideoSection;
