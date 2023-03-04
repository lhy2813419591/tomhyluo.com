# frozen_string_literal: true

source "http://rubygems.org"

gem "jekyll"
gem "minimal-mistakes-jekyll"

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
# gem "rails"
