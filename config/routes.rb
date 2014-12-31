Rails.application.routes.draw do
  namespace :api do
    resources :boards, only: [:create, :index, :show, :update, :destroy]
  end

  root to: "static_pages#index"
end
