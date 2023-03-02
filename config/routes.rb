Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post "/auth", to: "authentications#create"
      resources :posts, only: %i[index show create update destroy]
    end
  end
end
