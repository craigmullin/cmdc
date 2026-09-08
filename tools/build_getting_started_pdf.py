from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, KeepTogether
)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf" / "website_fast_iteration_starter_guide.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)

NAVY = colors.HexColor("#14213D")
BLUE = colors.HexColor("#2563EB")
SKY = colors.HexColor("#EAF2FF")
CORAL = colors.HexColor("#F97360")
INK = colors.HexColor("#1F2937")
MUTED = colors.HexColor("#5F6B7A")
LINE = colors.HexColor("#D9E1EC")
PAPER = colors.HexColor("#F8FAFC")
GREEN = colors.HexColor("#DCFCE7")

font_regular = "Helvetica"
font_bold = "Helvetica-Bold"
font_mono = "Courier"
font_paths = [
    ("Inter", Path("C:/Windows/Fonts/arial.ttf")),
    ("InterBold", Path("C:/Windows/Fonts/arialbd.ttf")),
]
if all(p.exists() for _, p in font_paths):
    for name, path in font_paths:
        pdfmetrics.registerFont(TTFont(name, str(path)))
    font_regular, font_bold = "Inter", "InterBold"
consolas = Path("C:/Windows/Fonts/consola.ttf")
if consolas.exists():
    pdfmetrics.registerFont(TTFont("Consolas", str(consolas)))
    font_mono = "Consolas"

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="TitleX", fontName=font_bold, fontSize=29, leading=33, textColor=NAVY, spaceAfter=13))
styles.add(ParagraphStyle(name="Deck", fontName=font_regular, fontSize=12.5, leading=18, textColor=MUTED, spaceAfter=16))
styles.add(ParagraphStyle(name="H1X", fontName=font_bold, fontSize=21, leading=25, textColor=NAVY, spaceAfter=10))
styles.add(ParagraphStyle(name="H2X", fontName=font_bold, fontSize=12.5, leading=16, textColor=NAVY, spaceBefore=7, spaceAfter=5))
styles.add(ParagraphStyle(name="BodyX", fontName=font_regular, fontSize=9.8, leading=14.2, textColor=INK, spaceAfter=5))
styles.add(ParagraphStyle(name="SmallX", fontName=font_regular, fontSize=8, leading=11.2, textColor=MUTED))
styles.add(ParagraphStyle(name="StepX", fontName=font_regular, fontSize=9.5, leading=13.8, textColor=INK))
styles.add(ParagraphStyle(name="CodeX", fontName=font_mono, fontSize=8.5, leading=11.5, textColor=NAVY, backColor=SKY, borderPadding=7, spaceBefore=4, spaceAfter=7))
styles.add(ParagraphStyle(name="CalloutX", fontName=font_regular, fontSize=9.2, leading=13.3, textColor=NAVY))
styles.add(ParagraphStyle(name="SourceX", fontName=font_regular, fontSize=7.5, leading=10.2, textColor=MUTED, spaceAfter=3))


def footer(canvas, doc):
    canvas.saveState()
    w, h = letter
    canvas.setStrokeColor(LINE)
    canvas.line(0.7 * inch, 0.48 * inch, w - 0.7 * inch, 0.48 * inch)
    canvas.setFont(font_regular, 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(0.7 * inch, 0.3 * inch, "A practical first-site roadmap")
    canvas.drawRightString(w - 0.7 * inch, 0.3 * inch, f"{doc.page}")
    canvas.restoreState()


doc = BaseDocTemplate(str(OUT), pagesize=letter, rightMargin=0.7*inch, leftMargin=0.7*inch,
                      topMargin=0.62*inch, bottomMargin=0.62*inch, title="Build, Iterate, Ship",
                      author="Craig Mullin")
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
doc.addPageTemplates(PageTemplate(id="all", frames=[frame], onPage=footer))
story = []


def p(text, style="BodyX"):
    story.append(Paragraph(text, styles[style]))


def step(num, title, body):
    n = Table([[Paragraph(str(num), ParagraphStyle(name=f"n{num}", fontName=font_bold, fontSize=9,
                                                   textColor=colors.white, alignment=TA_CENTER, leading=16))]],
              colWidths=[0.32*inch], rowHeights=[0.28*inch])
    n.setStyle(TableStyle([("BACKGROUND", (0,0), (-1,-1), BLUE), ("VALIGN", (0,0), (-1,-1), "MIDDLE")]))
    content = Paragraph(f"<b>{title}</b><br/>{body}", styles["StepX"])
    t = Table([[n, content]], colWidths=[0.4*inch, 6.55*inch], hAlign="LEFT")
    t.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("LEFTPADDING", (0,0), (-1,-1), 0),
                           ("RIGHTPADDING", (0,0), (-1,-1), 7), ("BOTTOMPADDING", (0,0), (-1,-1), 8)]))
    story.append(t)


def callout(title, body, color=SKY):
    box = Table([[Paragraph(f"<b>{title}</b><br/>{body}", styles["CalloutX"])]], colWidths=[doc.width])
    box.setStyle(TableStyle([("BACKGROUND", (0,0), (-1,-1), color), ("BOX", (0,0), (-1,-1), 0.6, LINE),
                             ("LEFTPADDING", (0,0), (-1,-1), 12), ("RIGHTPADDING", (0,0), (-1,-1), 12),
                             ("TOPPADDING", (0,0), (-1,-1), 10), ("BOTTOMPADDING", (0,0), (-1,-1), 10)]))
    story.append(box)
    story.append(Spacer(1, 10))


# Cover
story.append(Spacer(1, 0.55*inch))
p("BUILD / ITERATE / SHIP", "SmallX")
p("Your first website<br/>with GitHub, Firebase,<br/>ChatGPT &amp; Codex", "TitleX")
p("A friendly, practical roadmap for going from a blank computer to a real website - without needing to become a professional developer first.", "Deck")
callout("The basic loop", "Describe one small change. Let Codex work in the project. Review it locally. Run checks. Commit it to GitHub. Publish a preview. Repeat.", GREEN)
story.append(Spacer(1, 0.12*inch))
p("WHAT YOU WILL HAVE AT THE END", "H2X")
for item in [
    "A working website on your computer",
    "A private or public GitHub repository with version history",
    "A Firebase-hosted URL you can share",
    "A safe, repeatable process for making fast changes",
]:
    p(f"[ ] {item}")
story.append(Spacer(1, 0.18*inch))
p("Start small. A one-page personal site is the ideal first project. You can add databases, login, payments, and other complexity later.", "Deck")
p("Prepared September 2026", "SmallX")
story.append(PageBreak())

# Setup
p("1. Set up the foundation", "H1X")
p("Do these once. Keep the accounts personal, enable two-factor authentication, and save recovery codes in a password manager.", "Deck")
step(1, "Create the core accounts", "Create a <link href='https://github.com/'>GitHub</link> account, a Google account for <link href='https://firebase.google.com/'>Firebase</link>, and an OpenAI account with access to ChatGPT and Codex.")
step(2, "Install the essential tools", "Install Git, Node.js LTS, a modern browser, and Codex. An editor such as VS Code is useful, even if Codex does most of the editing.")
step(3, "Tell Git who you are", "Open Terminal (macOS) or PowerShell (Windows) and configure the name and email that will appear in your commits.")
p('git config --global user.name "Your Name"<br/>git config --global user.email "you@example.com"', "CodeX")
step(4, "Connect your machine to GitHub", "The simplest path is GitHub Desktop. If you prefer the command line, generate an SSH key, add it to the SSH agent, and add the public key to GitHub. Never share the private key.")
p("ssh-keygen -t ed25519 -C \"you@example.com\"", "CodeX")
step(5, "Create a workspace folder", "Keep projects in one easy-to-find place, such as <font name='Courier'>Projects</font> or <font name='Courier'>code</font>. Each website gets its own folder and GitHub repository.")
callout("Quick check", "In a new terminal, run <font name='Courier'>git --version</font>, <font name='Courier'>node --version</font>, and <font name='Courier'>npm --version</font>. Each should print a version number.")
p("If command-line setup feels awkward, ask Codex to inspect the installed tools and explain exactly what is missing. Do not paste passwords, recovery codes, private SSH keys, or secret API keys into a chat.", "SmallX")
story.append(PageBreak())

# First build
p("2. Build the first version", "H1X")
p("Use a simple stack for the first site: React + TypeScript + Vite is fast, common, and easy to host as static files.", "Deck")
step(6, "Create the project", "In your workspace folder, scaffold the site. Choose a short lowercase project name.")
p("npm create vite@latest my-site -- --template react-ts<br/>cd my-site<br/>npm install<br/>npm run dev", "CodeX")
step(7, "Open the folder in Codex", "Give Codex access only to this project folder. Start with a clear request: what the site is for, who it serves, the visual mood, and the one action visitors should take.")
callout("A good first prompt", "Build a polished one-page website for [purpose]. Use React and TypeScript. Keep it responsive and accessible. First inspect the project, then propose a short plan. After implementation, run lint and build. Do not deploy.")
step(8, "Work in small passes", "Ask for one coherent change at a time: page structure, typography, colors, a section, mobile layout, then polish. Review each pass in the browser before requesting the next.")
step(9, "Use ChatGPT as the thinking partner", "Use ChatGPT for audience, positioning, copy, page structure, names, and alternatives. Use Codex for changes that need to read files, edit code, run the site, and verify results.")
step(10, "Give Codex durable project rules", "Add an <font name='Courier'>AGENTS.md</font> file with the stack, commands, style principles, important boundaries, and the rule that production deployment requires explicit approval.")
callout("Keep control", "Before accepting a change, ask: What files changed? What did you verify? Are there any assumptions or remaining risks? Then look at the actual site yourself.", PAPER)
story.append(PageBreak())

# Git and deploy
p("3. Save it, preview it, publish it", "H1X")
step(11, "Create the GitHub repository", "Create an empty repository on GitHub. Make it private unless you intentionally want the code public. Never commit <font name='Courier'>.env</font> files, service-account files, private keys, or credentials.")
step(12, "Make the first commit", "Version history is your safety net. Commit a working state before major experiments.")
p("git init<br/>git add .<br/>git commit -m \"Create initial website\"<br/>git branch -M main<br/>git remote add origin git@github.com:YOUR-NAME/my-site.git<br/>git push -u origin main", "CodeX")
step(13, "Create a Firebase project", "In the Firebase console, create a new project with a unique project ID. Start with Hosting only. Turn on billing only when a feature actually requires it, and set budget alerts if billing is enabled.")
step(14, "Install and connect Firebase", "The Firebase CLI currently requires Node.js 18 or later. Log in, then initialize Hosting from the website folder. For a Vite site, the public directory is usually <font name='Courier'>dist</font>; configure it as a single-page app if you use client-side routing.")
p("npm install -g firebase-tools<br/>firebase login<br/>firebase init hosting", "CodeX")
step(15, "Build and test", "Run the checks before every publish. Fix errors rather than ignoring them.")
p("npm run lint<br/>npm run build<br/>firebase emulators:start", "CodeX")
step(16, "Publish a preview first", "Use a temporary preview channel so you can check the production build on a phone and share it for feedback without changing the live site.")
p("firebase hosting:channel:deploy preview", "CodeX")
step(17, "Deploy live deliberately", "Only after reviewing the preview, publish Hosting. Confirm the active Firebase project first if you manage more than one.")
p("firebase use<br/>firebase deploy --only hosting", "CodeX")
story.append(PageBreak())

# Loop and safety
p("4. Adopt the fast iteration loop", "H1X")
p("Speed comes from short, reversible cycles - not from making a giant request and hoping it works.", "Deck")
rows = [
    ["1", "Choose", "Pick one visible outcome."],
    ["2", "Describe", "Give context, constraints, and acceptance criteria."],
    ["3", "Implement", "Let Codex inspect and make the scoped change."],
    ["4", "Verify", "Run lint/build/tests and review desktop + mobile."],
    ["5", "Commit", "Save the known-good state with a clear message."],
    ["6", "Preview", "Share a Firebase preview when feedback is useful."],
    ["7", "Ship", "Deploy live only when you intentionally approve it."],
]
tbl = Table(rows, colWidths=[0.35*inch, 0.8*inch, 5.8*inch], repeatRows=0)
tbl.setStyle(TableStyle([
    ("FONTNAME", (0,0), (-1,-1), font_regular), ("FONTSIZE", (0,0), (-1,-1), 9.2),
    ("TEXTCOLOR", (0,0), (-1,-1), INK), ("FONTNAME", (1,0), (1,-1), font_bold),
    ("TEXTCOLOR", (0,0), (0,-1), BLUE), ("ALIGN", (0,0), (0,-1), "CENTER"),
    ("VALIGN", (0,0), (-1,-1), "MIDDLE"), ("ROWBACKGROUNDS", (0,0), (-1,-1), [colors.white, PAPER]),
    ("LINEBELOW", (0,0), (-1,-1), 0.35, LINE), ("TOPPADDING", (0,0), (-1,-1), 7),
    ("BOTTOMPADDING", (0,0), (-1,-1), 7),
]))
story.append(tbl)
story.append(Spacer(1, 12))
p("NON-NEGOTIABLE HABITS", "H2X")
for item in [
    "Read the diff before committing. A green build does not prove the design is right.",
    "Keep secrets out of Git. Put local secrets in .env files that are ignored by Git.",
    "Ask before destructive actions, dependency upgrades, database migrations, or live deployments.",
    "Use branches for risky experiments; keep main deployable.",
    "Test the real experience: links, forms, keyboard navigation, phone layout, and page speed.",
    "Commit frequently enough that you can comfortably undo a bad idea.",
]:
    p(f"[ ] {item}")
callout("When something breaks", "Stop adding features. Copy the exact error, say what you expected, and ask Codex to diagnose before fixing. After the fix, rerun the failed check and the full build.", colors.HexColor("#FFF3E8"))
p("A sensible next step", "H2X")
p("After the first static site is comfortable, learn branches and pull requests, connect a custom domain, add automated GitHub preview deployments, and only then explore Firebase Authentication, Firestore, Functions, analytics, or payments.")
story.append(PageBreak())

# Checklist and sources
p("First-week checklist", "H1X")
p("Aim for one small, finished site - not a grand platform.", "Deck")
for day, goal in [
    ("DAY 1", "Create accounts; install Git, Node.js, Codex, and an editor; confirm the commands work."),
    ("DAY 2", "Create a one-page Vite site; write the first useful copy; view it locally."),
    ("DAY 3", "Use Codex for layout and responsive styling; review every change."),
    ("DAY 4", "Create the GitHub repository; commit and push a clean working version."),
    ("DAY 5", "Create the Firebase project; configure Hosting; publish a preview."),
    ("DAY 6", "Test on phone and desktop; fix accessibility, copy, and broken links."),
    ("DAY 7", "Deploy live, share it with three people, and collect specific feedback."),
]:
    block = Table([[Paragraph(day, styles["H2X"]), Paragraph(goal, styles["BodyX"])]], colWidths=[0.8*inch, 6.15*inch])
    block.setStyle(TableStyle([("VALIGN", (0,0), (-1,-1), "TOP"), ("LINEBELOW", (0,0), (-1,-1), 0.4, LINE),
                               ("TOPPADDING", (0,0), (-1,-1), 5), ("BOTTOMPADDING", (0,0), (-1,-1), 7)]))
    story.append(block)
story.append(Spacer(1, 11))
callout("Definition of done", "The site loads from its Firebase URL, looks good on a phone, has no obvious broken links, passes lint and build, contains no secrets, and the live version matches a committed Git revision.", GREEN)
p("OFFICIAL REFERENCES", "H2X")
refs = [
    ("Git installation", "https://git-scm.com/install/"),
    ("GitHub SSH key setup", "https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"),
    ("Node.js downloads", "https://nodejs.org/en/download"),
    ("Firebase Hosting quickstart", "https://firebase.google.com/docs/hosting/quickstart"),
    ("Firebase local testing and preview channels", "https://firebase.google.com/docs/hosting/test-preview-deploy"),
    ("OpenAI Codex resources", "https://developers.openai.com/codex/"),
]
for label, url in refs:
    p(f"<link href='{url}' color='#2563EB'>{label}</link>  -  {url}", "SourceX")
p("Commands and product details can change. Use the linked official documentation if a screen or command differs from this guide.", "SmallX")

doc.build(story)
print(OUT)
