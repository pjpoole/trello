class List < ActiveRecord::Base
  validates :name, :ord, presence: true
  validates :ord, uniqueness: { scope: :name }

  belongs_to :board
end
