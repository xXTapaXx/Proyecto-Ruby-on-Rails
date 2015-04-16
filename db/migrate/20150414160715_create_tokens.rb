class CreateTokens < ActiveRecord::Migration
  def change
    create_table :tokens do |t|
      t.integer :id_user
      t.string :token
      t.datetime :date_login
      t.datetime :expired

      t.timestamps null: false
    end
  end
end
