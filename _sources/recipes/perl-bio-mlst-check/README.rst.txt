.. title:: Package Recipe 'perl-bio-mlst-check'
.. highlight: bash


perl-bio-mlst-check
===================

.. conda:recipe:: perl-bio-mlst-check
   :replaces_section_title:

   Multilocus sequence type checking using blast

   :homepage: http://www.sanger.ac.uk/
   :license: gpl_3
   :recipe: /`perl-bio-mlst-check <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-mlst-check>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-mlst-check/meta.yaml>`_

   


.. conda:package:: perl-bio-mlst-check

   |downloads_perl-bio-mlst-check| |docker_perl-bio-mlst-check|

   :versions: 2.1.1706216

   :depends: :conda:package:`blast`  :conda:package:`perl` 5.22.0* :conda:package:`perl-bioperl`  :conda:package:`perl-data-dumper`  :conda:package:`perl-exporter`  :conda:package:`perl-file-path`  :conda:package:`perl-file-temp`  :conda:package:`perl-file-which`  :conda:package:`perl-getopt-long`  :conda:package:`perl-lib`  :conda:package:`perl-lwp-simple`  :conda:package:`perl-moose`  :conda:package:`perl-parallel-forkmanager`  :conda:package:`perl-regexp-common`  :conda:package:`perl-text-csv`  :conda:package:`perl-try-tiny`  :conda:package:`perl-xml-libxml`  

   :required~by: |required_by_perl-bio-mlst-check|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-mlst-check

   and update with::

      conda update perl-bio-mlst-check

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-bio-mlst-check


.. |required_by_perl-bio-mlst-check| conda:required_by:: perl-bio-mlst-check
.. |downloads_perl-bio-mlst-check| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-mlst-check.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bio-mlst-check| image:: https://quay.io/repository/biocontainers/perl-bio-mlst-check/status
   :target: https://quay.io/repository/biocontainers/perl-bio-mlst-check







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-mlst-check/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-mlst-check/README.html

