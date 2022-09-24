import re
import sys,re
from pytube import Playlist

def finish(stream,file_path):
    print(f"finish downloading "+stream.title)
    print(file_path)
    return file_path

def download(url,quality="360p",on_finish_callback=finish):
    if len(re.findall("list",url))>0 and len(re.findall("youtube",url))>0:
        playlist = Playlist(url)
        for video in playlist.videos:
            print(f"start downloading "+video.title)
            video.register_on_complete_callback(on_finish_callback)
            video.streams.get_by_resolution(quality).download(f"./videos/")

if __name__ == "__main__":
    if sys.argv[1]:
        download(url=sys.argv[1],quality=sys.argv[2]);