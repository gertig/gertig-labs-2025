class WalkGoodDomainConstraints
  def self.matches?(request)
    # Debug logging
    Rails.logger.debug "Domain constraint check:"
    Rails.logger.debug "  Host: #{request.host}"
    Rails.logger.debug "  Domain: #{request.domain}"
    Rails.logger.debug "  Subdomain: #{request.subdomain}"
    Rails.logger.debug "  Environment: #{Rails.env}"

    result = if Rails.env.development?
      request.domain.present? && request.domain.start_with?('walkgoodtravel.localhost') || request.subdomain.present? && request.subdomain.start_with?('walkgoodtravel')
    else
      request.domain.present? && request.domain.start_with?('walkgoodtravel')
    end

    Rails.logger.debug "  Constraint matches: #{result}"
    result
  end
end