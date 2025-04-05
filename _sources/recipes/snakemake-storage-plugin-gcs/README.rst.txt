:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-storage-plugin-gcs'
.. highlight: bash

snakemake-storage-plugin-gcs
============================

.. conda:recipe:: snakemake-storage-plugin-gcs
   :replaces_section_title:
   :noindex:

   A Snakemake storage plugin for Google Cloud Storage

   :homepage: https://github.com/snakemake/snakemake-storage-plugin-gcs
   :license: MIT / MIT
   :recipe: /`snakemake-storage-plugin-gcs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-gcs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-gcs/meta.yaml>`_

   


.. conda:package:: snakemake-storage-plugin-gcs

   |downloads_snakemake-storage-plugin-gcs| |docker_snakemake-storage-plugin-gcs|

   :versions:
      
      

      ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends google-cloud-storage: ``>=2.12.0,<3.0.0``
   :depends google-crc32c: ``>=1.1.2,<2.0.0``
   :depends python: ``>=3.11.0,<4.0.0``
   :depends snakemake-interface-common: ``>=1.14.2,<2.0.0``
   :depends snakemake-interface-storage-plugins: ``>=4.1.0,<5.0.0``
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

      mamba install snakemake-storage-plugin-gcs

   and update with::

      mamba update snakemake-storage-plugin-gcs

  To create a new environment, run::

      mamba create --name myenvname snakemake-storage-plugin-gcs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-storage-plugin-gcs:<tag>

   (see `snakemake-storage-plugin-gcs/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-storage-plugin-gcs| image:: https://img.shields.io/conda/dn/bioconda/snakemake-storage-plugin-gcs.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-storage-plugin-gcs
   :alt:   (downloads)
.. |docker_snakemake-storage-plugin-gcs| image:: https://quay.io/repository/biocontainers/snakemake-storage-plugin-gcs/status
   :target: https://quay.io/repository/biocontainers/snakemake-storage-plugin-gcs
.. _`snakemake-storage-plugin-gcs/tags`: https://quay.io/repository/biocontainers/snakemake-storage-plugin-gcs?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-storage-plugin-gcs";
        var versions = ["1.1.4","1.1.3","1.1.2","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-storage-plugin-gcs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-storage-plugin-gcs/README.html