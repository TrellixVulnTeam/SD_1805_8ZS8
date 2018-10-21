class AddColToMessy < ActiveRecord::Migration[5.2]
  def change
    add_column :messies, :total_score, :integer
    add_column :messies, :mess, :integer
    add_column :messies, :smell, :integer
    add_column :messies, :user_id, :integer
  end
end
