
class MessiesController < ApiController
  before_action :set_messy, only: [:show, :update, :destroy]


  # GET /messies/latest
  def latest
    @comment_all = Comment.all
    @latest_messy = Messy.last
    @score = @latest_messy.total_score.to_i / 20
    @comments = @comment_all.where(m_total_score: @score)
    @latest_messy.comment_name = @comments.sample.comment
    @latest_messy.save
    render json: @latest_messy
  end

  def top
    @all_data = Messy.all

    @data  = Messy.last
    @user_id  = @data.id
    # User.find_by(id: params[:id])
  end

  # GET /messies
  # GET /messies.json
  def index
    @messies = Messy.all

    render json: @messies
  end

  # GET /messies/1
  # GET /messies/1.json
  def show
    render json: @messy
  end

  # POST /messies
  # POST /messies.json
  def create
    logger.debug("Hello, world!")
    logger.debug(messy_params)
    logger.debug(params)

    # @messy = Messy.new(params)
    @messy = Messy.new(messy_params)

    if @messy.save
      render :show, status: :created, location: @messy
    else
      render json: @messy.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /messies/1
  # PATCH/PUT /messies/1.json
  def update
    if @messy.update(messy_params)
      render :show, status: :ok, location: @messy
    else
      render json: @messy.errors, status: :unprocessable_entity
    end
  end

  # DELETE /messies/1
  # DELETE /messies/1.json
  def destroy
    @messy.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_messy
      @messy = Messy.find_by(id: params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def messy_params
      #params.permit(:total_score, :mess, :smell, :user_id)
      params.fetch(:messy, {}).permit(:total_score, :mess, :smell, :dust, :user_id)
    end
end
