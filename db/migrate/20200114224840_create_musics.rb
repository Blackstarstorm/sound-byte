class CreateMusics < ActiveRecord::Migration[6.0]
  def change
    create_table :musics do |t|
      t.string :title
      t.text :img_url
      t.text :song
      t.string :text_link
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
