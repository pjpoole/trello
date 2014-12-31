class ListOrder < ActiveRecord::Migration
  def change
    change_table :lists do |t|
      t.integer :ord
    end
  end
end
