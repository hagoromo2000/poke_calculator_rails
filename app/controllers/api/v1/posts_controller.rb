class Api::V1::PostsController < ApplicationController
  skip_before_action :authenticate_token, only: %i[index]
  before_action :set_post, only: %i[destroy]

  def index
    posts = Post.all.order(created_at: :desc)
    json_string = PostSerializer.new(posts).serializable_hash.to_json
    render json: json_string
  end

  def mypage
    posts = current_user.posts.order(created_at: :desc)
    json_string = PostSerializer.new(posts).serializable_hash.to_json
    render json: json_string
  end

  def create
    post = current_user.posts.build(post_params)
    if post.save
      json_string = PostSerializer.new(post).serializable_hash.to_json
      render json: json_string
    else
      render json: post.errors
    end
  end

  def destroy
    if @post.destroy
      head :no_content
    else
      render json: { error: "Failed to destroy" }, status: 422
    end
  end

  def likes
    posts = current_user.like_posts.order(created_at: :desc)
    json_string = PostSerializer.new(posts).serializable_hash.to_json
    render json: json_string
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :body, :pokemon, :tera_type, :move1, :move2, :move3, :move4, :ability, :item, :nature, :ev_hp, :ev_attack, :ev_defense, :ev_special_attack, :ev_special_defense, :ev_speed)
  end

end
