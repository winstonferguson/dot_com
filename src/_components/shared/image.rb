class Shared::Image < Bridgetown::Component
  def initialize(alt: '', src: nil)
    @alt = alt
    @src = src
  end
end
