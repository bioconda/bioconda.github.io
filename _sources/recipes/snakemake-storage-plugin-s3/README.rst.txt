:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-storage-plugin-s3'
.. highlight: bash

snakemake-storage-plugin-s3
===========================

.. conda:recipe:: snakemake-storage-plugin-s3
   :replaces_section_title:
   :noindex:

   A Snakemake storage plugin for S3 API storage \(AWS S3\, MinIO\, etc.\)

   :homepage: https://github.com/snakemake/snakemake-storage-plugin-s3
   :license: MIT
   :recipe: /`snakemake-storage-plugin-s3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-s3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-s3/meta.yaml>`_

   


.. conda:package:: snakemake-storage-plugin-s3

   |downloads_snakemake-storage-plugin-s3| |docker_snakemake-storage-plugin-s3|

   :versions:
      
      

      ``0.2.8-1``,  ``0.2.8-0``

      

   
   :depends boto3: ``>=1.28.55,<2.0.0``
   :depends botocore: ``>=1.31.55,<2.0.0``
   :depends python: ``>=3.11.0,<4.0.0``
   :depends snakemake-interface-common: ``>=1.14.0,<2.0.0``
   :depends snakemake-interface-storage-plugins: ``>=3.0.0,<4.0.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install snakemake-storage-plugin-s3

   and update with::

      mamba update snakemake-storage-plugin-s3

  To create a new environment, run::

      mamba create --name myenvname snakemake-storage-plugin-s3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-storage-plugin-s3:<tag>

   (see `snakemake-storage-plugin-s3/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-storage-plugin-s3| image:: https://img.shields.io/conda/dn/bioconda/snakemake-storage-plugin-s3.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-storage-plugin-s3
   :alt:   (downloads)
.. |docker_snakemake-storage-plugin-s3| image:: https://quay.io/repository/biocontainers/snakemake-storage-plugin-s3/status
   :target: https://quay.io/repository/biocontainers/snakemake-storage-plugin-s3
.. _`snakemake-storage-plugin-s3/tags`: https://quay.io/repository/biocontainers/snakemake-storage-plugin-s3?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-storage-plugin-s3";
        var versions = ["0.2.8","0.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-storage-plugin-s3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-storage-plugin-s3/README.html