class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :brand
      t.string :model
      t.string :sku
      t.decimal :price
      t.string :desc

      t.timestamps
    end
  end
end
