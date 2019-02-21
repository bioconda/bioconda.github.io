:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-statistics-distributions'
.. highlight: bash

perl-statistics-distributions
=============================

.. conda:recipe:: perl-statistics-distributions
   :replaces_section_title:

   Perl module for calculating critical values and upper probabilities of common statistical distributions

   :homepage: http://metacpan.org/pod/Statistics-Distributions
   :license: perl_5
   :recipe: /`perl-statistics-distributions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-distributions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-statistics-distributions/meta.yaml>`_

   


.. conda:package:: perl-statistics-distributions

   |downloads_perl-statistics-distributions| |docker_perl-statistics-distributions|

   :versions: 1.02-1, 1.02-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-statistics-distributions

   and update with::

      conda update perl-statistics-distributions

   or use the docker container::

      docker pull quay.io/biocontainers/perl-statistics-distributions:<tag>

   (see `perl-statistics-distributions/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-statistics-distributions| image:: https://img.shields.io/conda/dn/bioconda/perl-statistics-distributions.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-statistics-distributions| image:: https://quay.io/repository/biocontainers/perl-statistics-distributions/status
   :target: https://quay.io/repository/biocontainers/perl-statistics-distributions
.. _`perl-statistics-distributions/tags`: https://quay.io/repository/biocontainers/perl-statistics-distributions?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-statistics-distributions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-statistics-distributions/README.html