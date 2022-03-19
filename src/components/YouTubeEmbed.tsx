import React from 'react'

type YouTubeProps = {
  className: string;
  src: string;
}

function YouTubeEmbed(props: YouTubeProps) {
  return (
    <iframe
      className={props.className}
      src={props.src}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

export default YouTubeEmbed