Rails.application.routes.draw do
  resources :standard_cards, only: [:index]
  resources :registration, only: [:create]
  resources :decks, only: [:index, :create, :update, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post 'authenticate', to: 'authentication#authenticate'
end
