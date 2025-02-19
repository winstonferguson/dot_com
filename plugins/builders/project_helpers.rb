# If you want to use a cryptographic digest, you can uncomment following:
#
# require "digest/sha2"

class Builders::ProjectHelpers < SiteBuilder
  def build
    helper :category_code do |categories: []|
      code = []

      code << "1" if categories.include? "development"
      code << "2" if categories.include? "design"

      code
    end
  end
end
