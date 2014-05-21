class AddImageToUser2 < ActiveRecord::Migration
  def change
    remove_column :users, :image
    add_column :authorizations, :image, :string
  end
end
