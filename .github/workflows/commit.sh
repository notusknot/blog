git checkout gh-pages

COMMIT=$(git rev-parse --short HEAD)
PREV=$(git rev-parse --short HEAD^)
URL="https://github.com/notusknot/notusknot.gihub.io/commit/$COMMIT"
MESSAGE="Powered by git commit $COMMIT"

sed -i "s/$PREV/$COMMIT/g" ./index.html
