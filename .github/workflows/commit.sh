COMMIT=$(git rev-parse --short HEAD)
PREV=$(git rev-parse --short HEAD^)
URL="https://github.com/notusknot/notusknot.gihub.io/commit/$COMMIT"
MESSAGE="Powered by git commit $COMMIT.</a>"

sed -i "s#Powered by git commit.*.</a>#$MESSAGE#g" ./index.html
sed -i "s#commit/.*/>#commit/$COMMIT/>#g" ./index.html
