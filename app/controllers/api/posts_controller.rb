class Api::PostsController < ApplicationController
  def index
  end

  def create
    post = Post.new(params[:post])

    if post.save
      render json: post, status: :ok
    else
      render json: post.errors, status: 422
    end
  end

  def update
    post = Post.find_by_id(params[:id])

    if post.update_attributes(params[:post])
      head :ok
    else
      render json: post.errors, status: 422
    end
  end

  def destroy
    post = Post.find_by_id(params[:id])

    if post.destroy
      head :ok
    else
      render json: post.errors, status: 422
    end
  end
end
