:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf-pg-loader'
.. highlight: bash

vcf-pg-loader
=============

.. conda:recipe:: vcf-pg-loader
   :replaces_section_title:
   :noindex:

   High\-performance VCF to PostgreSQL loader with clinical\-grade compliance

   :homepage: https://github.com/Zacharyr41/vcf-pg-loader
   :documentation: https://github.com/Zacharyr41/vcf-pg-loader/tree/main/docs
   
   :license: MIT / MIT
   :recipe: /`vcf-pg-loader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf-pg-loader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf-pg-loader/meta.yaml>`_

   vcf\-pg\-loader is a command\-line tool for efficiently loading VCF variant data
   into PostgreSQL databases. It features streaming VCF parsing with cyvcf2\,
   variant normalization using the vt algorithm\, proper Number\=A\/R\/G field handling
   during multi\-allelic decomposition\, and binary COPY protocol via asyncpg for
   maximum insert performance.



.. conda:package:: vcf-pg-loader

   |downloads_vcf-pg-loader| |docker_vcf-pg-loader|

   :versions:
      
      

      ``0.5.1-0``

      

   
   :depends anyio: ``>=4.3.0``
   :depends asyncpg: ``>=0.29.0``
   :depends cyvcf2: ``>=0.31.0``
   :depends docker-py: ``>=7.0.0``
   :depends pydantic: ``>=2.6.0``
   :depends python: ``>=3.9``
   :depends rich: ``>=13.7.0``
   :depends typer: ``>=0.12.0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install vcf-pg-loader

   and update with::

      mamba update vcf-pg-loader

  To create a new environment, run::

      mamba create --name myenvname vcf-pg-loader

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcf-pg-loader:<tag>

   (see `vcf-pg-loader/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf-pg-loader| image:: https://img.shields.io/conda/dn/bioconda/vcf-pg-loader.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf-pg-loader
   :alt:   (downloads)
.. |docker_vcf-pg-loader| image:: https://quay.io/repository/biocontainers/vcf-pg-loader/status
   :target: https://quay.io/repository/biocontainers/vcf-pg-loader
.. _`vcf-pg-loader/tags`: https://quay.io/repository/biocontainers/vcf-pg-loader?tab=tags


.. raw:: html

    <script>
        var package = "vcf-pg-loader";
        var versions = ["0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf-pg-loader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf-pg-loader/README.html