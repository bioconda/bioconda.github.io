.. title:: Package Recipe 'perl-common-sense'
.. highlight: bash


perl-common-sense
=================

.. conda:recipe:: perl-common-sense
   :replaces_section_title:

   Sane defaults for Perl programs

   :homepage: http://search.cpan.org/~mlehmann/common-sense-3.74/
   :license: perl_5
   :recipe: /`perl-common-sense <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-common-sense>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-common-sense/meta.yaml>`_

   


.. conda:package:: perl-common-sense

   |downloads_perl-common-sense| |docker_perl-common-sense|

   :versions: 3.74

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-common-sense|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-common-sense

   and update with::

      conda update perl-common-sense

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-common-sense


.. |required_by_perl-common-sense| conda:required_by:: perl-common-sense
.. |downloads_perl-common-sense| image:: https://img.shields.io/conda/dn/bioconda/perl-common-sense.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-common-sense| image:: https://quay.io/repository/biocontainers/perl-common-sense/status
   :target: https://quay.io/repository/biocontainers/perl-common-sense







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-common-sense/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-common-sense/README.html

