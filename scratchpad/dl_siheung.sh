#!/bin/bash
cd /c/Projects/carsite/scratchpad/imgs_travel_g2
attempt=0
while [ $attempt -lt 8 ]; do
  attempt=$((attempt+1))
  all_ok=1
  while read -r name url; do
    [ -z "$name" ] && continue
    sz=$(stat -c%s "$name" 2>/dev/null || echo 0)
    if [ "$sz" -lt 10000 ]; then
      curl -sL -A "Mozilla/5.0 (compatible; CarPrismBot/1.0; +https://carprism.tmhub.co.kr)" -o "$name" "$url"
      newsz=$(stat -c%s "$name" 2>/dev/null || echo 0)
      echo "attempt $attempt: $name -> $newsz bytes"
      if [ "$newsz" -lt 10000 ]; then
        all_ok=0
      fi
    fi
  done < /tmp/dl_list.txt
  if [ "$all_ok" -eq 1 ]; then
    echo "ALL_DONE"
    break
  fi
  sleep 20
done
ls -la siheung_*.jpg
