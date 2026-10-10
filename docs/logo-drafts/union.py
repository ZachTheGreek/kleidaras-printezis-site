"""Union all filled paths of a picosvg output into one compound path.

usage: python union.py in.svg out.svg [fill]
"""
import re
import sys

import picosvg.svg_pathops as sp
from picosvg.svg_types import SVGPath

src, dst = sys.argv[1], sys.argv[2]
fill = sys.argv[3] if len(sys.argv) > 3 else "#111"
text = open(src, encoding="utf-8").read()
viewbox = re.search(r'viewBox="([^"]+)"', text).group(1)
paths = [SVGPath(d=d) for d in re.findall(r'<path[^>]* d="([^"]+)"', text)]
cmds = sp.union([p.as_cmd_seq() for p in paths], ["nonzero"] * len(paths))
d = SVGPath.from_commands(cmds).round_floats(2).d
open(dst, "w", encoding="utf-8").write(
    f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{viewbox}">\n'
    f'  <path fill="{fill}" d="{d}"/>\n'
    f"</svg>\n"
)
print(dst, len(paths), "paths ->", 1)
