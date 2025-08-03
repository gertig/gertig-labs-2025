class Gertig::PagesController < ApplicationController
  def index
    render inertia: 'Index', props: {
      name: params.fetch(:name, 'Gertig'),
    }
  end
end