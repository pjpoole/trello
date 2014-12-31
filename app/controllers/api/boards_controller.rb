class Api::BoardsController < ApplicationController
  wrap_parameters false
  # respond_to :json

  def create
    @board = Board.new(board_params)

    if @board.save
      render json: @board
    else
      render json: @board.errors.full_messages
    end
  end

  def index
  end

  def show
  end

  def update
  end

  def destroy
  end

  private
  def board_params
    params.require(:board).permit(:name)
  end

end
