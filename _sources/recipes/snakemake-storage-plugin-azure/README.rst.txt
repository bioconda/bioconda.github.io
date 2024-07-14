:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-storage-plugin-azure'
.. highlight: bash

snakemake-storage-plugin-azure
==============================

.. conda:recipe:: snakemake-storage-plugin-azure
   :replaces_section_title:
   :noindex:

   A Snakemake storage plugin to read and write from Azure Blob Storage

   :homepage: https://github.com/snakemake/snakemake-storage-plugin-azure
   :license: MIT
   :recipe: /`snakemake-storage-plugin-azure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-azure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-azure/meta.yaml>`_

   


.. conda:package:: snakemake-storage-plugin-azure

   |downloads_snakemake-storage-plugin-azure| |docker_snakemake-storage-plugin-azure|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``

      

   
   :depends azure-core: ``>=1.29.5,<2.0.0``
   :depends azure-identity: ``>=1.15.0,<2.0.0``
   :depends azure-storage-blob: ``>=12.19.0,<13.0.0``
   :depends python: ``>=3.11.0,<4.0.0``
   :depends snakemake-interface-common: ``>=1.15.0,<2.0.0``
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

      mamba install snakemake-storage-plugin-azure

   and update with::

      mamba update snakemake-storage-plugin-azure

  To create a new environment, run::

      mamba create --name myenvname snakemake-storage-plugin-azure

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-storage-plugin-azure:<tag>

   (see `snakemake-storage-plugin-azure/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-storage-plugin-azure| image:: https://img.shields.io/conda/dn/bioconda/snakemake-storage-plugin-azure.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-storage-plugin-azure
   :alt:   (downloads)
.. |docker_snakemake-storage-plugin-azure| image:: https://quay.io/repository/biocontainers/snakemake-storage-plugin-azure/status
   :target: https://quay.io/repository/biocontainers/snakemake-storage-plugin-azure
.. _`snakemake-storage-plugin-azure/tags`: https://quay.io/repository/biocontainers/snakemake-storage-plugin-azure?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-storage-plugin-azure";
        var versions = ["0.1.6","0.1.5","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-storage-plugin-azure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-storage-plugin-azure/README.html