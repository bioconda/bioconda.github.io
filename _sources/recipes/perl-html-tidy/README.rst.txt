.. title:: Package Recipe 'perl-html-tidy'
.. highlight: bash


perl-html-tidy
==============

.. conda:recipe:: perl-html-tidy
   :replaces_section_title:

   \(X\)HTML validation in a Perl object

   :homepage: http://github.com/petdance/html-tidy
   :license: artistic_2
   :recipe: /`perl-html-tidy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tidy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-tidy/meta.yaml>`_

   


.. conda:package:: perl-html-tidy

   |downloads_perl-html-tidy| |docker_perl-html-tidy|

   :versions: 1.60, 1.56

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-carp`  :conda:package:`perl-constant`  :conda:package:`perl-encode`  :conda:package:`perl-exporter`  :conda:package:`perl-getopt-long`  :conda:package:`tidyp`  

   :required~by: |required_by_perl-html-tidy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-html-tidy

   and update with::

      conda update perl-html-tidy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-html-tidy


.. |required_by_perl-html-tidy| conda:required_by:: perl-html-tidy
.. |downloads_perl-html-tidy| image:: https://img.shields.io/conda/dn/bioconda/perl-html-tidy.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-html-tidy| image:: https://quay.io/repository/biocontainers/perl-html-tidy/status
   :target: https://quay.io/repository/biocontainers/perl-html-tidy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-tidy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-tidy/README.html

