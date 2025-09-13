import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-b from-card to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-foreground mb-6">Contact Us</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Ready to secure your perfect domain? Get in touch with our team for personalized assistance.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                        <Input placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                      <Input placeholder="Domain inquiry or general question" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                      <Textarea
                        placeholder="Tell us about your domain needs or ask any questions..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full">Send Message</Button>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <div>
                          <h3 className="font-semibold text-foreground">Email</h3>
                          <p className="text-muted-foreground">domains@domainhub.com</p>
                          <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <MessageCircle className="h-6 w-6 text-primary" />
                        <div>
                          <h3 className="font-semibold text-foreground">WhatsApp</h3>
                          <p className="text-muted-foreground">+1 (555) 123-4567</p>
                          <p className="text-sm text-muted-foreground">Quick responses during business hours</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <Phone className="h-6 w-6 text-primary" />
                        <div>
                          <h3 className="font-semibold text-foreground">Phone</h3>
                          <p className="text-muted-foreground">+1 (555) 123-4567</p>
                          <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2">Secure Transactions</h3>
                      <p className="text-sm opacity-90">
                        All domain purchases are protected through Escrow.com or PayPal for secure, worry-free
                        transactions.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
