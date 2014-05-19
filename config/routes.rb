Rails.application.routes.draw do
  root to: 'static_pages#root'
  get 'welcome' => 'welcome#welcome'
  devise_for :users
  namespace :api, defaults: { format: :json } do
    resources :movies
    resources :ratings
  end
end
