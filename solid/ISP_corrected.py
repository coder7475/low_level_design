from abc import ABC, abstractmethod

# Interfaces
class AudioPlayerControls(ABC):
    @abstractmethod
    def play_audio(self, audio_file):
        pass

    @abstractmethod
    def stop_audio(self):
        pass

    @abstractmethod
    def adjust_audio_volume(self, volume):
        pass


# Video-only capabilities
class VideoPlayerControls(ABC):
    @abstractmethod
    def play_video(self, video_file):
        pass

    @abstractmethod
    def stop_video(self):
        pass

    @abstractmethod
    def adjust_video_brightness(self, brightness):
        pass

    @abstractmethod
    def display_subtitles(self, subtitle_file):
        pass


class ModernAudioPlayer(AudioPlayerControls):
    def play_audio(self, audio_file):
        print(f"ModernAudioPlayer: Playing audio - {audio_file}")

    def stop_audio(self):
        print("ModernAudioPlayer: Audio stopped.")

    def adjust_audio_volume(self, volume):
        print(f"ModernAudioPlayer: Volume set to {volume}")


class SilentVideoPlayer(VideoPlayerControls):
    def play_video(self, video_file):
        print(f"SilentVideoPlayer: Playing video - {video_file}")

    def stop_video(self):
        print("SilentVideoPlayer: Video stopped.")

    def adjust_video_brightness(self, brightness):
        print(f"SilentVideoPlayer: Brightness set to {brightness}")

    def display_subtitles(self, subtitle_file):
        print(f"SilentVideoPlayer: Subtitles from {subtitle_file}")


class ComprehensiveMediaPlayer(AudioPlayerControls, VideoPlayerControls):
    def play_audio(self, audio_file):
        print(f"ComprehensiveMediaPlayer: Playing audio - {audio_file}")

    def stop_audio(self):
        print("ComprehensiveMediaPlayer: Audio stopped.")

    def adjust_audio_volume(self, volume):
        print(f"ComprehensiveMediaPlayer: Audio volume set to {volume}")

    def play_video(self, video_file):
        print(f"ComprehensiveMediaPlayer: Playing video - {video_file}")

    def stop_video(self):
        print("ComprehensiveMediaPlayer: Video stopped.")

    def adjust_video_brightness(self, brightness):
        print(f"ComprehensiveMediaPlayer: Brightness set to {brightness}")

    def display_subtitles(self, subtitle_file):
        print(f"ComprehensiveMediaPlayer: Subtitles from {subtitle_file}")