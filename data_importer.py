import urllib.request
from bs4 import BeautifulSoup

page = urllib.request.urlopen("http://www.extraskater.com/players/standard?team=nyr&season=2013&sit=all").read()

soup = BeautifulSoup(page)

stat_skip_count=0
stats = []
for th in soup.table.thead.find_all('th'):
  abbr = th.abbr
  if (abbr):
    stats.append({'description':abbr['title'], 'stat':abbr.contents[0]})
  else:
    stat_skip_count+=1

print(stats)
print("Skipping " + str(stat_skip_count) + " stats")

PLAYER_NAME_COL = 1
players = {}
for tr in soup.table.tbody.find_all('tr'):
  col_counter = 0
  stat_counter = 0
  player = ''
  for td in tr.find_all('td'):
    if col_counter == PLAYER_NAME_COL:
      player = td.a.contents[0]
      players[player] = {}
      print("Finding stats for: " + player)
    if col_counter >= stat_skip_count:
      this_stat = td.contents[0]
      players[player][stats[stat_counter]['stat']] = this_stat
      stat_counter +=1
    col_counter +=1

print(players)
