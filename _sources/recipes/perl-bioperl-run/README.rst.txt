.. title:: Package Recipe 'perl-bioperl-run'
.. highlight: bash


perl-bioperl-run
================

.. conda:recipe:: perl-bioperl-run
   :replaces_section_title:

   BioPerl\-Run \- wrapper toolkit

   :homepage: http://metacpan.org/pod/BioPerl-Run
   :license: perl_5
   :recipe: /`perl-bioperl-run <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl-run>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl-run/meta.yaml>`_

   


.. conda:package:: perl-bioperl-run

   |downloads_perl-bioperl-run| |docker_perl-bioperl-run|

   :versions: 1.007002, 1.006900

   :depends: :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-bio-samtools`  :conda:package:`perl-bioperl-core`  :conda:package:`perl-file-sort`  

   :required~by: |required_by_perl-bioperl-run|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bioperl-run

   and update with::

      conda update perl-bioperl-run

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-bioperl-run


.. |required_by_perl-bioperl-run| conda:required_by:: perl-bioperl-run
.. |downloads_perl-bioperl-run| image:: https://img.shields.io/conda/dn/bioconda/perl-bioperl-run.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-bioperl-run| image:: https://quay.io/repository/biocontainers/perl-bioperl-run/status
   :target: https://quay.io/repository/biocontainers/perl-bioperl-run







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bioperl-run/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bioperl-run/README.html

