Many times you want to have different features available for your jekyll site during development compared to when you build your site for production.

Jekyll has a [built-in method](https://jekyllrb.com/docs/configuration/environments/) for setting the `JEKYLL_ENV` value in order to facilitate this functionality, but many developers find it a bit difficult depending on your deployment method. Essentially you wrap any part of your site that you don't want running outside of production in an if statement like so:
```ruby
{% if jekyll.environment == "production" %}
   {% include production.html %}
{% endif %}
```

You then set `JEKYLL_ENV=production` before running `jekyll build` and that snippet will be included in the build. Some issues with this are that you then you need to reset the `JEKYLL_ENV` back to development at some point and you can also run into issues making it all work from the command line with your deployment method.

---

My preferred method is similar to this, but gets rid of the need to set any global variables! It relies on the fact that you can have a **_second config file_** and settings in the later files will override previous settings.

All you have to do is make your own sitewide variable and then declare it in `_config.yml` like this:
```yml
# Build in dev mode
environment: development

# Name of your site (displayed in the header)
name: My Blog

...
```
Then, in a similar fashion to before, you just bracket any part of your site with an if statement:
```ruby
{% if site.environment == "production" %}
   {% include production.html %}
{% endif %}
```
Notice the only difference here is that we use `site.enviroment` this time instead of `jekyll.environment`!

So how do we actually set the site to be production then? Well first you just need to create new file named something like `_config-prod.yml` and set the environment variable:
```yml
# Build in production mode
enviroment: production

...
```
This value will override the value from `_config.yml` if we build using the command:
```
jekyll build --config _config.yml,_config_prod.yml
```
And thats it! There is no need to worry about setting an environmental variable from the command line and there is also the ability to add more production-specific configuration options as well now that you have a second file that you can use.

For example I like to minify my css for production to save some weight on my webpage, but in development it is often helpful to have all the formatting. Well, not a problem with the second config file, because we can keep
```yml
sass:
  style: :expanded
```
in our standard `_config.yml`, and then in `_config-prod.yml` we just append
```yml
sass:
  style: :compressed
```
The possibilities are endless and can help make your life much simpler. Hope this helps you as much as it has helped me!
