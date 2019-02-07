.. title:: Package Recipe 'perl-time-local'
.. highlight: bash


perl-time-local
===============

.. conda:recipe:: perl-time-local
   :replaces_section_title:

   Efficiently compute time from local and GMT time

   :homepage: http://metacpan.org/release/Time-Local
   :license: perl_5
   :recipe: /`perl-time-local <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-time-local>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-time-local/meta.yaml>`_

   


.. conda:package:: perl-time-local

   |downloads_perl-time-local| |docker_perl-time-local|

   :versions: 1.2300, 1.28

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-time-local|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-time-local

   and update with::

      conda update perl-time-local

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-time-local


.. |required_by_perl-time-local| conda:required_by:: perl-time-local
.. |downloads_perl-time-local| image:: https://img.shields.io/conda/dn/bioconda/perl-time-local.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-time-local| image:: https://quay.io/repository/biocontainers/perl-time-local/status
   :target: https://quay.io/repository/biocontainers/perl-time-local







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-time-local/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-time-local/README.html

