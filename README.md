# 📈 IPO Saham IDX


## 💎 Overview

Projek ini bertujuan untuk menyediakan sebuah dataset untuk para researcher yang ingin belajar/meneliti lebih lanjut terutama mengenai time series analysis. Dataset ini diharapkan agar dapat digunakan untuk tujuan penelitian sekaligus agar dapat meningkatkan pemahaman akan data yang bersifat time series.

## 🛠️ Tech Stack Used

<p align="center">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="122.5" height="28" role="img" aria-label="EXPRESS.JS"><title>EXPRESS.JS</title><g shape-rendering="crispEdges"><rect width="122.5" height="28" fill="#404d59"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNjFkYWZiIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RXhwcmVzczwvdGl0bGU+PHBhdGggZD0iTTI0IDE4LjU4OGExLjUyOSAxLjUyOSAwIDAxLTEuODk1LS43MmwtMy40NS00Ljc3MS0uNS0uNjY3LTQuMDAzIDUuNDQ0YTEuNDY2IDEuNDY2IDAgMDEtMS44MDIuNzA4bDUuMTU4LTYuOTItNC43OTgtNi4yNTFhMS41OTUgMS41OTUgMCAwMTEuOS42NjZsMy41NzYgNC44MyAzLjU5Ni00LjgxYTEuNDM1IDEuNDM1IDAgMDExLjc4OC0uNjY4TDIxLjcwOCA3LjlsLTIuNTIyIDMuMjgzYS42NjYuNjY2IDAgMDAwIC45OTRsNC44MDQgNi40MTJ6TS4wMDIgMTEuNTc2bC40Mi0yLjA3NWMxLjE1NC00LjEwMyA1Ljg1OC01LjgxIDkuMDk0LTMuMjcgMS44OTUgMS40ODkgMi4zNjggMy41OTcgMi4yNzUgNS45NzNIMS4xMTZDLjk0MyAxNi40NDcgNC4wMDUgMTkuMDA5IDcuOTIgMTcuN2E0LjA3OCA0LjA3OCAwIDAwMi41ODItMi44NzZjLjIwNy0uNjY2LjU0OC0uNzggMS4xNzQtLjU4OGE1LjQxNyA1LjQxNyAwIDAxLTIuNTg5IDMuOTU3IDYuMjcyIDYuMjcyIDAgMDEtNy4zMDYtLjkzMyA2LjU3NSA2LjU3NSAwIDAxLTEuNjQtMy44NThjMC0uMjM1LS4wOC0uNDU1LS4xMzQtLjY2NkE4OC4zMyA4OC4zMyAwIDAxMCAxMS41Nzd6bTEuMTI3LS4yODZoOS42NTRjLS4wNi0zLjA3Ni0yLjAwMS01LjI1OC00LjU5LTUuMjc4LTIuODgyLS4wNC00Ljk0NCAyLjA5NC01LjA3MSA1LjI2NHoiLz48L3N2Zz4="/><text transform="scale(.1)" x="712.5" y="175" textLength="785" fill="#fff" font-weight="bold">EXPRESS.JS</text></g></svg>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="126.5" height="28" role="img" aria-label="JAVASCRIPT"><title>JAVASCRIPT</title><g shape-rendering="crispEdges"><rect width="126.5" height="28" fill="#323330"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZjdkZjFlIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+SmF2YVNjcmlwdDwvdGl0bGU+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6bTIyLjAzNCAxOC4yNzZjLS4xNzUtMS4wOTUtLjg4OC0yLjAxNS0zLjAwMy0yLjg3My0uNzM2LS4zNDUtMS41NTQtLjU4NS0xLjc5Ny0xLjE0LS4wOTEtLjMzLS4xMDUtLjUxLS4wNDYtLjcwNS4xNS0uNjQ2LjkxNS0uODQgMS41MTUtLjY2LjM5LjEyLjc1LjQyLjk3Ni45IDEuMDM0LS42NzYgMS4wMzQtLjY3NiAxLjc1NS0xLjEyNS0uMjctLjQyLS40MDQtLjYwMS0uNTg2LS43OC0uNjMtLjcwNS0xLjQ2OS0xLjA2NS0yLjgzNC0xLjAzNGwtLjcwNS4wODljLS42NzYuMTY1LTEuMzIuNTI1LTEuNzEgMS4wMDUtMS4xNCAxLjI5MS0uODExIDMuNTQxLjU2OSA0LjQ3MSAxLjM2NSAxLjAyIDMuMzYxIDEuMjQ0IDMuNjE2IDIuMjA1LjI0IDEuMTctLjg3IDEuNTQ1LTEuOTY2IDEuNDEtLjgxMS0uMTgtMS4yNi0uNTg2LTEuNzU1LTEuMzM2bC0xLjgzIDEuMDUxYy4yMS40OC40NS42ODkuODEgMS4xMDkgMS43NCAxLjc1NiA2LjA5IDEuNjY2IDYuODcxLTEuMDA0LjAyOS0uMDkuMjQtLjcwNS4wNzQtMS42NWwuMDQ2LjA2N3ptLTguOTgzLTcuMjQ1aC0yLjI0OGMwIDEuOTM4LS4wMDkgMy44NjQtLjAwOSA1LjgwNSAwIDEuMjMyLjA2MyAyLjM2My0uMTM4IDIuNzExLS4zMy42ODktMS4xOC42MDEtMS41NjYuNDgtLjM5Ni0uMTk2LS41OTctLjQ2Ni0uODMtLjg1NS0uMDYzLS4xMDUtLjExLS4xOTYtLjEyNy0uMTk2bC0xLjgyNSAxLjEyNWMuMzA1LjYzLjc1IDEuMTcyIDEuMzI0IDEuNTE3Ljg1NS41MSAyLjAwNC42NzUgMy4yMDcuNDA1Ljc4My0uMjI2IDEuNDU4LS42OTEgMS44MTEtMS40MTEuNTEtLjkzLjQwMi0yLjA3LjM5Ny0zLjM0Ni4wMTItMi4wNTQgMC00LjEwOSAwLTYuMTc5bC4wMDQtLjA1NnoiLz48L3N2Zz4="/><text transform="scale(.1)" x="732.5" y="175" textLength="825" fill="#fff" font-weight="bold">JAVASCRIPT</text></g></svg>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100.75" height="28" role="img" aria-label="NODE.JS"><title>NODE.JS</title><g shape-rendering="crispEdges"><rect width="100.75" height="28" fill="#6da55f"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100"><image x="9" y="7" width="14" height="14" xlink:href="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPk5vZGUuanM8L3RpdGxlPjxwYXRoIGQ9Ik0xMS45OTgsMjRjLTAuMzIxLDAtMC42NDEtMC4wODQtMC45MjItMC4yNDdsLTIuOTM2LTEuNzM3Yy0wLjQzOC0wLjI0NS0wLjIyNC0wLjMzMi0wLjA4LTAuMzgzIGMwLjU4NS0wLjIwMywwLjcwMy0wLjI1LDEuMzI4LTAuNjA0YzAuMDY1LTAuMDM3LDAuMTUxLTAuMDIzLDAuMjE4LDAuMDE3bDIuMjU2LDEuMzM5YzAuMDgyLDAuMDQ1LDAuMTk3LDAuMDQ1LDAuMjcyLDBsOC43OTUtNS4wNzYgYzAuMDgyLTAuMDQ3LDAuMTM0LTAuMTQxLDAuMTM0LTAuMjM4VjYuOTIxYzAtMC4wOTktMC4wNTMtMC4xOTItMC4xMzctMC4yNDJsLTguNzkxLTUuMDcyYy0wLjA4MS0wLjA0Ny0wLjE4OS0wLjA0Ny0wLjI3MSwwIEwzLjA3NSw2LjY4QzIuOTksNi43MjksMi45MzYsNi44MjUsMi45MzYsNi45MjF2MTAuMTVjMCwwLjA5NywwLjA1NCwwLjE4OSwwLjEzOSwwLjIzNWwyLjQwOSwxLjM5MiBjMS4zMDcsMC42NTQsMi4xMDgtMC4xMTYsMi4xMDgtMC44OVY3Ljc4N2MwLTAuMTQyLDAuMTE0LTAuMjUzLDAuMjU2LTAuMjUzaDEuMTE1YzAuMTM5LDAsMC4yNTUsMC4xMTIsMC4yNTUsMC4yNTN2MTAuMDIxIGMwLDEuNzQ1LTAuOTUsMi43NDUtMi42MDQsMi43NDVjLTAuNTA4LDAtMC45MDksMC0yLjAyNi0wLjU1MUwyLjI4LDE4LjY3NWMtMC41Ny0wLjMyOS0wLjkyMi0wLjk0NS0wLjkyMi0xLjYwNFY2LjkyMSBjMC0wLjY1OSwwLjM1My0xLjI3NSwwLjkyMi0xLjYwM2w4Ljc5NS01LjA4MmMwLjU1Ny0wLjMxNSwxLjI5Ni0wLjMxNSwxLjg0OCwwbDguNzk0LDUuMDgyYzAuNTcsMC4zMjksMC45MjQsMC45NDQsMC45MjQsMS42MDMgdjEwLjE1YzAsMC42NTktMC4zNTQsMS4yNzMtMC45MjQsMS42MDRsLTguNzk0LDUuMDc4QzEyLjY0MywyMy45MTYsMTIuMzI0LDI0LDExLjk5OCwyNHogTTE5LjA5OSwxMy45OTMgYzAtMS45LTEuMjg0LTIuNDA2LTMuOTg3LTIuNzYzYy0yLjczMS0wLjM2MS0zLjAwOS0wLjU0OC0zLjAwOS0xLjE4N2MwLTAuNTI4LDAuMjM1LTEuMjMzLDIuMjU4LTEuMjMzIGMxLjgwNywwLDIuNDczLDAuMzg5LDIuNzQ3LDEuNjA3YzAuMDI0LDAuMTE1LDAuMTI5LDAuMTk5LDAuMjQ3LDAuMTk5aDEuMTQxYzAuMDcxLDAsMC4xMzgtMC4wMzEsMC4xODYtMC4wODEgYzAuMDQ4LTAuMDU0LDAuMDc0LTAuMTIzLDAuMDY3LTAuMTk2Yy0wLjE3Ny0yLjA5OC0xLjU3MS0zLjA3Ni00LjM4OC0zLjA3NmMtMi41MDgsMC00LjAwNCwxLjA1OC00LjAwNCwyLjgzMyBjMCwxLjkyNSwxLjQ4OCwyLjQ1NywzLjg5NSwyLjY5NWMyLjg4LDAuMjgyLDMuMTAzLDAuNzAzLDMuMTAzLDEuMjY5YzAsMC45ODMtMC43ODksMS40MDItMi42NDIsMS40MDIgYy0yLjMyNywwLTIuODM5LTAuNTg0LTMuMDExLTEuNzQyYy0wLjAyLTAuMTI0LTAuMTI2LTAuMjE1LTAuMjUzLTAuMjE1aC0xLjEzN2MtMC4xNDEsMC0wLjI1NCwwLjExMi0wLjI1NCwwLjI1MyBjMCwxLjQ4MiwwLjgwNiwzLjI0OCw0LjY1NSwzLjI0OEMxNy41MDEsMTcuMDA3LDE5LjA5OSwxNS45MSwxOS4wOTksMTMuOTkzeiIvPjwvc3ZnPg=="/><text transform="scale(.1)" x="603.75" y="175" textLength="567.5" fill="#fff" font-weight="bold">NODE.JS</text></g></svg>


| ExpressJS                                                                              | JavaScript                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/5658226?s=200&v=4" width="150"> | <img src="https://avatars.githubusercontent.com/u/6993497?s=200&v=4" width="150"> |

## 🔐 Kepemilikan Data

Dataset ini diambil dan diolah dari website [PT Bursa Efek Indonesia](https://idx.co.id). Semua data yang ada dalam dataset adalah milik PT Bursa Efek Indonesia. Silakan mengacu pada [Syarat Penggunaan](https://idx.co.id/id/syarat-penggunaan/) yang dimiliki oleh PT Bursa Efek Indonesia.


## 📝 Conventional Commit

‎In this project, I endeavoured to follow the [commit convention](https://www.conventionalcommits.org/en/v1.0.0/) so that the commit messages are cleaner and more readable. I think it's awesome and makes it practically easy for me to be able to backtrack through each commit deployment.

## 📄 Don't forget to add .env

‎Set file .env from .env.example by typing `cp env.example .env`
