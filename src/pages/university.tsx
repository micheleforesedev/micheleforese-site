import React from 'react'
import Layout from '../components/Layout'
import YouTubeEmbed from '../components/YouTubeEmbed'

function UniversityPage() {
  const youtube_class: string = "w-full mx-auto aspect-video";
  return (
    <Layout>
      <main className='mx-auto prose prose-neutral'>
        <h1>Linear Algebra</h1>

        <h2>Youtube Playlist</h2>
        <div className='flex flex-col gap-4'>
          <YouTubeEmbed className={youtube_class} src="https://www.youtube.com/embed/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" />
          <YouTubeEmbed className={youtube_class} src="https://www.youtube.com/embed/playlist?list=PLTd6ceoshprfZs1VIzGHDt-MYgVewC5tc" />
          <YouTubeEmbed className={youtube_class} src="https://www.youtube.com/embed/playlist?list=PLwF3A0R8OzMoMlE1-SaEh8h9VqUlO-r52" />
          <YouTubeEmbed className={youtube_class} src="https://www.youtube.com/embed/playlist?list=PLwyehgeeicL-rr6KpcUeaqqqY4NMLTOhG" />
          <YouTubeEmbed className={youtube_class} src="https://www.youtube.com/embed/playlist?list=PLMrJAkhIeNNRjxJ_sMtJ02geqw_-vuB7O" />
          <YouTubeEmbed className={youtube_class} src="https://www.youtube.com/embed/4csuTO7UTMo" />
        </div>
      </main>
    </Layout>
  )
}

export default UniversityPage