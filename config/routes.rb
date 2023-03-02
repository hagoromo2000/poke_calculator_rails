Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post "/auth", to: "authentications#create"
      resources :posts
    end
  end
end
