class ChartSampleController < ApplicationController

  def index
    gon.data1 = []
    gon.data2 = []
    gon.data3 = []
    gon.data4 = []

    @today = Date.today
    @day = @today - 6
    7.times do
      @messes = Messy.where(created_at: @day.all_day)
      @count = @messes.count
      if @count == 0 then
        data1 = 0
        data2 = 0
        data3 = 0
        data4 = 0
      else
        @sum_mess = 0
        @sum_smell = 0
        @sum_dust = 0
        @sum_total_score = 0
        @messes.each do |m|
          @add_mess = m.mess.to_i
          @sum_mess += @add_mess
          @add_smell = m.smell.to_i
          @sum_smell += @add_smell
          @add_dust = m.dust.to_i
          @sum_dust += @add_dust
          @add_total_score = m.total_score.to_i
          @sum_total_score += @add_total_score
        end
        data1 = @sum_mess / @count
        data2 = @sum_smell / @count
        data3 = @sum_dust / @count
        data4 = @sum_total_score / @count
        end
      gon.data1 << data1
      gon.data2 << data2
      gon.data3 << data3
      gon.data4 << data4
      @day += 1
    end
  end
end