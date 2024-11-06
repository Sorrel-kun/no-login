set -e

tag=$(python -c "import json; print(json.load(open('manifest.json'))['version'])")
tagged=$(git tag -l $tag)
if [ -z "$tagged" ]; then
  sudo apt install npm
  npm install --global web-ext
  ./sign.sh

  git tag -a "$tag" -m "Release $tag"
  git push origin "$tag"
  echo "Tagged release $tag"

  gh release create "$tag" web-ext-artifacts/no_login-$tag.xpi \
      --repo="$GITHUB_REPOSITORY" \
      --title="$tag" \
      --generate-notes
  echo "Created release"
else
  echo "Tag $tag already exists"
fi