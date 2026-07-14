#!/usr/bin/env python3
"""Build a lecture HTML: {{CODE:name}} -> highlighted code from <codedir>/name.ts,
   {{IMG:chap/nn}} -> inlined data URI from docs/images/chap/nn.jpg.
Usage: build_lecture.py template.html out.html [codedir]"""
import sys, re, html, base64, pathlib

tpl, out = sys.argv[1], sys.argv[2]
cdir = pathlib.Path(sys.argv[3]) if len(sys.argv) > 3 else None
imgbase = pathlib.Path('docs/images')

KEYWORDS = {'export','default','class','constructor','this','return','private','public',
    'protected','readonly','new','const','let','var','type','function','if','else','for',
    'while','import','from','extends','implements','abstract','override','super','interface',
    'typeof','as','void','true','false','null','undefined','get','set',
    'try','catch','finally','throw','instanceof'}
TYPES = {'string','number','boolean','void','any','unknown','never','object'}

tok = re.compile(r'(//[^\n]*)|(`(?:[^`\\]|\\.)*`)|("(?:[^"\\]|\\.)*"|\'(?:[^\'\\]|\\.)*\')|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][A-Za-z0-9_$]*)|(\s+)|([^\sA-Za-z0-9_$])', re.S)

def hl(code):
    code = code.rstrip('\n')
    parts = []
    for m in tok.finditer(code):
        cm, tmpl, st, num, word, ws, other = m.groups()
        if cm is not None: parts.append(f'<span class="c">{html.escape(cm)}</span>')
        elif tmpl is not None: parts.append(f'<span class="s">{html.escape(tmpl)}</span>')
        elif st is not None: parts.append(f'<span class="s">{html.escape(st)}</span>')
        elif num is not None: parts.append(f'<span class="n">{num}</span>')
        elif word is not None:
            if word in KEYWORDS: parts.append(f'<span class="k">{word}</span>')
            elif word in TYPES: parts.append(f'<span class="t">{word}</span>')
            else:
                rest = code[m.end():]
                if rest[:1] == '(' or rest.lstrip()[:1] == '(':
                    parts.append(f'<span class="f">{word}</span>')
                else: parts.append(html.escape(word))
        elif ws is not None: parts.append(ws)
        else: parts.append(html.escape(other))
    return ''.join(parts)

doc = pathlib.Path(tpl).read_text(encoding='utf-8')

def code_repl(m):
    return hl((cdir/f'{m.group(1)}.ts').read_text(encoding='utf-8'))
def img_repl(m):
    f = imgbase/f'{m.group(1)}.jpg'
    return 'data:image/jpeg;base64,'+base64.b64encode(f.read_bytes()).decode()

n_code = n_img = 0
if cdir:
    doc, n_code = re.subn(r'\{\{CODE:([a-z0-9\-]+)\}\}', code_repl, doc)
doc, n_img = re.subn(r'\{\{IMG:([0-9a-z\-]+/\d+)\}\}', img_repl, doc)
missing = re.findall(r'\{\{[^}]+\}\}', doc)
pathlib.Path(out).write_text(doc, encoding='utf-8')
print(f'code={n_code} img={n_img} size={len(doc)/1024:.0f}KB unresolved={missing}')
