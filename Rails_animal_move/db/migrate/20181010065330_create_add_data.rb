class CreateAddData < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :data1, :integer
    add_column :users, :data2, :integer
  end
end
