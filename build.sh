#!/usr/bin/bash 

echo "Initializing basic set up, please wait..."
echo "===== ===== ===== ===== ===== ===== ====="

cd

# Add dependencies in this list, then update how they are handled in below case.
# Should probably use a dictionary here, but there's no guarantee the env is Bash 4.
for i in brew node npm git coreutils moreutils
do
  if which $i > /dev/null
  then
    echo "$i is installed, skipping..."
  else
    case $i in
      brew)
        /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
      ;;
      node)
        brew install node
      ;;
      npm)
        brew install npm
      ;;
      git)
        brew install git
      ;;
    esac
  fi
done

echo "Running some housework, please wait..."
echo "===== ===== ===== ===== ===== ===== ====="

brew update
brew upgrade
brew cleanup
brew doctor

echo "All done! $(eval scutil --get LocalHostName) is ready for lift-off!"
echo "===== ===== ===== ===== ===== ===== ====="