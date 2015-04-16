class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.string :userName
      t.string :token
      t.datetime :date_login
      t.datetime :expired

      t.timestamps null: false
    end
  end
end
