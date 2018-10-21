class CreateMessies < ActiveRecord::Migration[5.2]
  def change
    create_table :messies do |t|

      t.timestamps
    end
  end
end
