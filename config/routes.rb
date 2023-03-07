Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post "/auth", to: "authentications#create"
      get "/mypage", to: "posts#mypage"
      resources :posts, only: %i[index create destroy]
    end
  end
end
