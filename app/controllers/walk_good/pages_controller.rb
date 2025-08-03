class WalkGood::PagesController < WalkGood::BaseController
  def index
    render inertia: "Index", props: {
      name: params.fetch(:name, "Walk Good"),
    }
  end
end