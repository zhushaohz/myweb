import requests
r = requests.get(
    "http://music.163.com/song/media/outer/url?id=1407551413.mp3")
print(r.request.url)
print(r.status_code)
r.raise_for_status()
print(r.text)
print('a')
