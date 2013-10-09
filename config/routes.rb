JournalApp::Application.routes.draw do

  namespace :api do
    resources :posts, only: [:index, :create, :update, :destroy]
  end

  root to: 'api/posts#index'
end
