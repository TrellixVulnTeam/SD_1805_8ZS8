class RemoveColumnsFromComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :m_mess, :integer
    remove_column :comments, :m_smell, :integer
  end
end
