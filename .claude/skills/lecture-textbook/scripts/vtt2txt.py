#!/usr/bin/env python3
import sys, re

def ts_to_sec(ts):
    h, m, s = ts.split(':')
    return int(h)*3600 + int(m)*60 + float(s)

def sec_to_mmss(sec):
    m = int(sec)//60
    s = int(sec)%60
    return f"{m:02d}:{s:02d}"

path = sys.argv[1]
with open(path, encoding='utf-8') as f:
    lines = f.read().splitlines()

cues = []  # (start_sec, text)
i = 0
tsre = re.compile(r'(\d\d:\d\d:\d\d\.\d+)\s+-->')
tagre = re.compile(r'<[^>]*>')
for idx, line in enumerate(lines):
    m = tsre.match(line)
    if not m:
        continue
    start = ts_to_sec(m.group(1))
    # collect text lines until blank
    j = idx+1
    texts = []
    while j < len(lines) and lines[j].strip() != '':
        t = tagre.sub('', lines[j]).strip()
        if t:
            texts.append(t)
        j += 1
    if texts:
        # last text line is the fully-settled caption for this cue
        cues.append((start, texts[-1]))

# YouTube auto-caption: consecutive cues repeat the previous settled line
# then append. Keep only lines that are "new" (not identical to previous kept).
settled = []
prev = None
for start, text in cues:
    if text == prev:
        continue
    settled.append((start, text))
    prev = text

# Reconstruct rolling text into sentences: the settled lines are the 2-line
# rolling window; take the *second* (newest) line each time to approximate flow.
# Simpler: join unique tails. We just print settled lines with timestamps,
# collapsing the rolling duplication by keeping the newest full line per ~window.
out = []
for start, text in settled:
    out.append(f"[{sec_to_mmss(start)}] {text}")

print('\n'.join(out))
