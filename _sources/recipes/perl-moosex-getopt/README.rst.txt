.. title:: Package Recipe 'perl-moosex-getopt'
.. highlight: bash


perl-moosex-getopt
==================

.. conda:recipe:: perl-moosex-getopt
   :replaces_section_title:

   A Moose role for processing command line options

   :homepage: https://github.com/moose/MooseX-Getopt
   :license: perl_5
   :recipe: /`perl-moosex-getopt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-getopt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-getopt/meta.yaml>`_

   


.. conda:package:: perl-moosex-getopt

   |downloads_perl-moosex-getopt| |docker_perl-moosex-getopt|

   :versions: 0.74, 0.72, 0.71

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-getopt-long`  :conda:package:`perl-getopt-long-descriptive`  :conda:package:`perl-moose`  :conda:package:`perl-moosex-role-parameterized`  :conda:package:`perl-namespace-autoclean`  :conda:package:`perl-try-tiny`  

   :required~by: |required_by_perl-moosex-getopt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-moosex-getopt

   and update with::

      conda update perl-moosex-getopt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-moosex-getopt


.. |required_by_perl-moosex-getopt| conda:required_by:: perl-moosex-getopt
.. |downloads_perl-moosex-getopt| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-getopt.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-moosex-getopt| image:: https://quay.io/repository/biocontainers/perl-moosex-getopt/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-getopt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-getopt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-getopt/README.html

