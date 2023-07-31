import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import styles from './styles';
import {Episode} from '../../../types';

import VideoPlayer from 'react-native-video-player';

interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayerAV = (props: VideoPlayerProps) => {
  const {episode} = props;
  const [videoURL, setVideoURL] = useState('');

  const [status, setStatus] = useState({});
  const videoPlayerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (episode.video.startsWith('http')) {
      setVideoURL(episode.video);
      return;
    }
    // Storage.get(episode.video).then(setVideoURL);
  }, [episode]);

  useEffect(() => {
    if (!videoPlayerRef) {
      return;
    }
    (async () => {})();
  }, [videoURL]);

  console.log('videoURL => ', videoURL);

  if (videoURL === '') {
    return null;
  }

  return (
    <VideoPlayer
      ref={videoPlayerRef}
      style={styles.video}
      video={{
        uri: videoURL,
      }}
      thumbnail={{
        uri: episode.poster,
      }}
      endThumbnail={{
        uri: episode.poster,
      }}
      onPlay={() => setIsPlaying(true)}
      onPause={() => setIsPlaying(false)}
      useNativeControls
      showDuration={true}
      autoplay={false}
      controlsTimeout={2000}
      disableControlsAutoHide={false}
      defaultMuted={true}
      disableSeek={true}
      pauseOnPress={true}
      onPlaybackStatusUpdate={status => setStatus(() => status)}
    />
  );
};

export default VideoPlayerAV;
