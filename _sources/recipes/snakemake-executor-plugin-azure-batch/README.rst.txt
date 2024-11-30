:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-executor-plugin-azure-batch'
.. highlight: bash

snakemake-executor-plugin-azure-batch
=====================================

.. conda:recipe:: snakemake-executor-plugin-azure-batch
   :replaces_section_title:
   :noindex:

   A Snakemake executor plugin for submitting jobs to Microsoft Azure Batch.

   :homepage: https://github.com/snakemake/snakemake-executor-plugin-azure-batch
   :license: MIT
   :recipe: /`snakemake-executor-plugin-azure-batch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-azure-batch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-azure-batch/meta.yaml>`_

   


.. conda:package:: snakemake-executor-plugin-azure-batch

   |downloads_snakemake-executor-plugin-azure-batch| |docker_snakemake-executor-plugin-azure-batch|

   :versions:
      
      

      ``0.1.3-0``

      

   
   :depends azure-batch: ``>=14.0.0,<15.0.0``
   :depends azure-identity: ``>=1.14.0,<2.0.0``
   :depends azure-mgmt-batch: ``>=17.0.0,<18.0.0``
   :depends azure-storage-blob: ``>=12.17.0,<13.0.0``
   :depends msrest: ``>=0.7.1,<0.8.0``
   :depends python: ``>=3.11.0,<4.0.0``
   :depends snakemake-interface-common: ``>=1.15.0,<2.0.0``
   :depends snakemake-interface-executor-plugins: ``>=8.1.1,<9.0.0``
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

      mamba install snakemake-executor-plugin-azure-batch

   and update with::

      mamba update snakemake-executor-plugin-azure-batch

  To create a new environment, run::

      mamba create --name myenvname snakemake-executor-plugin-azure-batch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-executor-plugin-azure-batch:<tag>

   (see `snakemake-executor-plugin-azure-batch/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-executor-plugin-azure-batch| image:: https://img.shields.io/conda/dn/bioconda/snakemake-executor-plugin-azure-batch.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-executor-plugin-azure-batch
   :alt:   (downloads)
.. |docker_snakemake-executor-plugin-azure-batch| image:: https://quay.io/repository/biocontainers/snakemake-executor-plugin-azure-batch/status
   :target: https://quay.io/repository/biocontainers/snakemake-executor-plugin-azure-batch
.. _`snakemake-executor-plugin-azure-batch/tags`: https://quay.io/repository/biocontainers/snakemake-executor-plugin-azure-batch?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-executor-plugin-azure-batch";
        var versions = ["0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-executor-plugin-azure-batch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-executor-plugin-azure-batch/README.html