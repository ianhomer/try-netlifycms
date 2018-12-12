# Bootstrap

Create try-netlifycms in Github (with initialising content) then use gatsby-starter-netlify-cms
to bootstrap project :

    yarn global add gatsby-cli
    gatsby new try-netlifycms https://github.com/netlify-templates/gatsby-starter-netlify-cms
    cd  try-netlifycms

Edit backend to use git direct :

    vi static/admin/config.yml

    backend:
      name: github
      repo: ianhomer/try-netlifycms
      branch: master

Initialise Github repository :

    git init
    git add .
    git commit -am "First Commit"
    git remote add origin git@github.com:ianhomer/try-netlifycms.git
    git push -u origin master

# Add extensions

Lunr search 

    yarn add lunr @andrew-codes/gatsby-plugin-elasticlunr-search