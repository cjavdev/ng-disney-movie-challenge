class SetDefaultImage < ActiveRecord::Migration
  def change
    change_column :authorizations, :image, :string, default: "https://24.media.tumblr.com/25db9eeb2bf50d913fe466b038355192/tumblr_n5xmqi39sv1soax2qo1_250.gif"
  end
end
