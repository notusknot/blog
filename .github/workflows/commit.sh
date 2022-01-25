COMMIT=$(git rev-parse --short HEAD)
PREV=$(git rev-parse --short HEAD^)
URL="https://github.com/notusknot/notusknot.gihub.io/commit/$COMMIT"
MESSAGE="Powered by git commit $COMMIT.</a>"
sed -i "s#<a href=https://github.com/notusknot/notusknot.github.io/commit/.*/ target=_blank>#
<a href=https://github.com/notusknot/notusknot.github.io/commit/a1b2c3/ target=_blank>#g" ./index.html
sed -i "s#Powered by git commit.*.</a>#Powered by git commit $COMMIT.</a>#g" ./index.html
