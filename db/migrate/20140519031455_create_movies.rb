class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.string :name
      t.datetime :released_at
      t.integer :duration
      t.string :imdb_link

      t.timestamps
    end
  end
end
