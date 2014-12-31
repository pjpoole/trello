json.board do
  json.name @board.name

  json.lists @board.lists, :name
end
