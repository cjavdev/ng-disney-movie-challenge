Rails.application.routes.draw do
  root to: 'static_pages#root'
  get 'welcome' => 'welcome#welcome'
  devise_for :users, controllers: { omniauth_callbacks: 'omniauth_callbacks' }

  namespace :api, defaults: { format: :json } do
    resource :leader_board
    resources :movies
    resources :ratings
    resources :stats, only: [:index, :show]
  end
end
