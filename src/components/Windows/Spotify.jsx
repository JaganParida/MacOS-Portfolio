import React, { useState, useRef, useEffect } from "react";
import MacWindow from "./MacWindow";
import { Search, Play, Pause, SkipBack, SkipForward, Volume2, Music, Loader2 } from "lucide-react";
import "./spotify.scss";

const Spotify = ({
  windowName,
  windowState,
  setwindowState,
  activeWindow,
  setActiveWindow,
}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const audioRef = useRef(null);

  // Default tracks to show initially (Top hits)
  useEffect(() => {
    fetchSongs("top hits");
  }, []);

  const fetchSongs = async (searchQuery) => {
    if (!searchQuery) return;
    setLoading(true);
    try {
      const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(searchQuery)}&entity=song&limit=20`);
      const data = await res.json();
      setResults(data.results);
    } catch (err) {
      console.error("Error fetching songs:", err);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchSongs(query);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const playTrack = (track) => {
    if (currentTrack?.trackId === track.trackId) {
      // Toggle play/pause if clicking same track
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = track.previewUrl;
        audioRef.current.play();
      }
    }
  };

  const togglePlay = () => {
    if (!currentTrack) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((current / duration) * 100);
  };

  const handleProgressClick = (e) => {
    if (!audioRef.current || !currentTrack) return;
    const bar = e.currentTarget;
    const clickX = e.clientX - bar.getBoundingClientRect().left;
    const newTime = (clickX / bar.offsetWidth) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
  };

  return (
    <MacWindow
      windowName={windowName}
      windowState={windowState}
      setwindowState={setwindowState}
      activeWindow={activeWindow}
      setActiveWindow={setActiveWindow}
      width="850px"
    >
      <div className="spotify-clone">
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />
        
        <div className="spotify-main">
          {/* Main Content Area */}
          <div className="spotify-content">
            <div className="spotify-header">
              <form onSubmit={handleSearch} className="search-bar">
                <Search size={20} className="search-icon" />
                <input
                  type="text"
                  placeholder="What do you want to listen to?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </form>
            </div>

            <div className="tracks-container">
              {loading ? (
                <div className="loading-state">
                  <Loader2 size={40} className="spinner" />
                  <p>Searching for tracks...</p>
                </div>
              ) : (
                <div className="tracks-list">
                  <div className="tracks-header">
                    <span className="col-hash">#</span>
                    <span className="col-title">Title</span>
                    <span className="col-album">Album</span>
                    <span className="col-time">Time</span>
                  </div>
                  
                  {results.map((track, index) => {
                    const isCurrent = currentTrack?.trackId === track.trackId;
                    return (
                      <div
                        key={track.trackId}
                        className={`track-row ${isCurrent ? "active" : ""}`}
                        onClick={() => playTrack(track)}
                      >
                        <div className="col-hash">
                          {isCurrent && isPlaying ? (
                            <Music size={14} className="playing-icon" />
                          ) : (
                            <span>{index + 1}</span>
                          )}
                        </div>
                        <div className="col-title">
                          <img src={track.artworkUrl60} alt={track.trackName} />
                          <div className="track-info">
                            <h4 className={isCurrent ? "text-green" : ""}>{track.trackName}</h4>
                            <p>{track.artistName}</p>
                          </div>
                        </div>
                        <div className="col-album">{track.collectionName}</div>
                        <div className="col-time">
                          {formatTime(track.trackTimeMillis / 1000)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Playback Bar */}
        <div className="playback-bar">
          <div className="now-playing">
            {currentTrack ? (
              <>
                <img src={currentTrack.artworkUrl60} alt="cover" />
                <div className="track-details">
                  <h4>{currentTrack.trackName}</h4>
                  <p>{currentTrack.artistName}</p>
                </div>
              </>
            ) : (
              <div className="empty-playing">
                <p>Select a track to play</p>
              </div>
            )}
          </div>

          <div className="player-controls">
            <div className="buttons">
              <SkipBack size={20} className="control-btn" />
              <button className="play-btn" onClick={togglePlay} disabled={!currentTrack}>
                {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" className="play-icon" />}
              </button>
              <SkipForward size={20} className="control-btn" />
            </div>
            
            <div className="progress-container">
              <span className="time">{audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}</span>
              <div className="progress-bar" onClick={handleProgressClick}>
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
              <span className="time">0:30</span> {/* iTunes previews are always 30s */}
            </div>
          </div>

          <div className="volume-controls">
            <Volume2 size={20} className="vol-icon" />
            <div className="vol-bar">
              <div className="vol-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </MacWindow>
  );
};

export default Spotify;
