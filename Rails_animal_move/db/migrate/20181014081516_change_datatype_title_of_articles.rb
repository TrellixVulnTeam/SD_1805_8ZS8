class ChangeDatatypeTitleOfArticles < ActiveRecord::Migration[5.2]
  def change
    change_column :messies, :total_score, :string
    change_column :messies, :mess, :string
    change_column :messies, :smell, :string
    change_column :messies, :user_id, :string
  end
end
