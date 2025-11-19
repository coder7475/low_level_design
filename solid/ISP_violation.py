from abc import ABC, abstractmethod


class MediaPlayer(ABC):
    @abstractmethod
    def play_audio(self, audio_file):
        pass

    @abstractmethod
    def stop_audio(self):
        pass

    @abstractmethod
    def adjust_audio_volume(self, volume):
        pass

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

class AudioOnlyPlayer(MediaPlayer):
    def play_audio(self, audio_file):
        print(f"Playing audio file: {audio_file}")

    def stop_audio(self):
        print("Audio stopped.")

    def adjust_audio_volume(self, volume):
        print(f"Audio volume set to: {volume}")

    # 👎 Unwanted methods
    def play_video(self, video_file):
        raise NotImplementedError("Not supported.")

    def stop_video(self):
        raise NotImplementedError("Not supported.")

    def adjust_video_brightness(self, brightness):
        raise NotImplementedError("Not supported.")

    def display_subtitles(self, subtitle_file):
        raise NotImplementedError("Not supported.")
    

