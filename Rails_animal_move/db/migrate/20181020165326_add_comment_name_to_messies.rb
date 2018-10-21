class AddCommentNameToMessies < ActiveRecord::Migration[5.2]
  def change
    add_column :messies, :dust, :string
    add_column :messies, :comment_name, :string
  end
end
