.. title:: Package Recipe 'perl-dbi'
.. highlight: bash


perl-dbi
========

.. conda:recipe:: perl-dbi
   :replaces_section_title:

   Database independent interface for Perl

   :homepage: http://dbi.perl.org/
   :license: perl_5
   :recipe: /`perl-dbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-dbi/meta.yaml>`_

   


.. conda:package:: perl-dbi

   |downloads_perl-dbi| |docker_perl-dbi|

   :versions: 1.642, 1.641, 1.640, 1.636, 1.634

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-dbi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-dbi

   and update with::

      conda update perl-dbi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-dbi


.. |required_by_perl-dbi| conda:required_by:: perl-dbi
.. |downloads_perl-dbi| image:: https://img.shields.io/conda/dn/bioconda/perl-dbi.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-dbi| image:: https://quay.io/repository/biocontainers/perl-dbi/status
   :target: https://quay.io/repository/biocontainers/perl-dbi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-dbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-dbi/README.html

