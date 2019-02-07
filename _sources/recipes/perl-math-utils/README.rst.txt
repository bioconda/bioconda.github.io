.. title:: Package Recipe 'perl-math-utils'
.. highlight: bash


perl-math-utils
===============

.. conda:recipe:: perl-math-utils
   :replaces_section_title:

   Useful mathematical functions not in Perl

   :homepage: http://metacpan.org/pod/Math::Utils
   :license: perl_5
   :recipe: /`perl-math-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-utils/meta.yaml>`_

   


.. conda:package:: perl-math-utils

   |downloads_perl-math-utils| |docker_perl-math-utils|

   :versions: 1.13

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 

   :required~by: |required_by_perl-math-utils|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-math-utils

   and update with::

      conda update perl-math-utils

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-math-utils


.. |required_by_perl-math-utils| conda:required_by:: perl-math-utils
.. |downloads_perl-math-utils| image:: https://img.shields.io/conda/dn/bioconda/perl-math-utils.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-math-utils| image:: https://quay.io/repository/biocontainers/perl-math-utils/status
   :target: https://quay.io/repository/biocontainers/perl-math-utils







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-utils/README.html

