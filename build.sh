#!/usr/bin/bash 

# Constants here.
BrewList=("node npm git python scala typescript")
CaskList=("r java visual-studio-code")
MiscList=("prettyping speedtest-cli youtube-dl")
QolList=("coreutils findutils moreutils openssl postgresql jq tree thefuck")

function bootstrap {
  brew update
  brew upgrade
  brew cleanup
  brew doctor
}

printf "\n"
echo "Initializing basic set up, please wait..."
echo "===== ===== ===== ===== ===== ===== ====="

cd

# Ensure that Homebrew is installed.
if which "brew" > /dev/null
then
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
  brew tap caskroom/cask
else
  bootstrap
fi

# Ensure all other dependencies are installed. Unfortunately, associative arrays are not supported in Bash 3, and eval() is almost always a bad idea.
for i in $BrewList
do
  if which $i > /dev/null
  then
    echo "$i is installed, skipping..."
  else
    brew install $i
  fi
done

for i in $CaskList
do
  if which $i > /dev/null
  then
    echo "$i is installed, skipping..."
  else
    brew cask install $i
  fi
done

printf "\n"
echo "Here are some QoL packages:"
echo "===== ===== ===== ===== ===== ===== ====="

echo $QolList

read -p "Install them all? [Y/n]" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
  for i in $QolList
  do
    if which $i > /dev/null
    then
      echo "$i is installed, skipping..."
    else
      brew install $i
    fi
  done
fi

printf "\n"
echo "Here are some miscellaneous packages:"
echo "===== ===== ===== ===== ===== ===== ====="

echo $MiscList

read -p "Install them all? [Y/n]" -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
  for i in $MiscList
  do
    if which $i > /dev/null
    then
      echo "$i is installed, skipping..."
    else
      brew install $i
    fi
  done
fi

printf "\n"
echo "Running some housework, please wait..."
echo "===== ===== ===== ===== ===== ===== ====="

bootstrap

printf "\n"
echo "All done! $(eval scutil --get LocalHostName) is ready for lift-off!"
echo "===== ===== ===== ===== ===== ===== ====="