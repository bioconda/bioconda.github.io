.. title:: Package Recipe 'perl-authen-sasl-saslprep'
.. highlight: bash


perl-authen-sasl-saslprep
=========================

.. conda:recipe:: perl-authen-sasl-saslprep
   :replaces_section_title:

   A Stringprep Profile for User Names and Passwords \(RFC 4013\)

   :homepage: http://metacpan.org/pod/Authen-SASL-SASLprep
   :license: perl_5
   :recipe: /`perl-authen-sasl-saslprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-authen-sasl-saslprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-authen-sasl-saslprep/meta.yaml>`_

   


.. conda:package:: perl-authen-sasl-saslprep

   |downloads_perl-authen-sasl-saslprep| |docker_perl-authen-sasl-saslprep|

   :versions: 1.100, 1.011

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-unicode-stringprep`  

   :required~by: |required_by_perl-authen-sasl-saslprep|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-authen-sasl-saslprep

   and update with::

      conda update perl-authen-sasl-saslprep

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-authen-sasl-saslprep


.. |required_by_perl-authen-sasl-saslprep| conda:required_by:: perl-authen-sasl-saslprep
.. |downloads_perl-authen-sasl-saslprep| image:: https://img.shields.io/conda/dn/bioconda/perl-authen-sasl-saslprep.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-authen-sasl-saslprep| image:: https://quay.io/repository/biocontainers/perl-authen-sasl-saslprep/status
   :target: https://quay.io/repository/biocontainers/perl-authen-sasl-saslprep







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-authen-sasl-saslprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-authen-sasl-saslprep/README.html

