:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-executor-plugin-cluster-sync'
.. highlight: bash

snakemake-executor-plugin-cluster-sync
======================================

.. conda:recipe:: snakemake-executor-plugin-cluster-sync
   :replaces_section_title:
   :noindex:

   A Snakemake executor plugin for cluster jobs that are executed synchronously.

   :homepage: https://github.com/snakemake/snakemake-executor-plugin-cluster-sync
   :license: MIT
   :recipe: /`snakemake-executor-plugin-cluster-sync <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-cluster-sync>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-executor-plugin-cluster-sync/meta.yaml>`_

   


.. conda:package:: snakemake-executor-plugin-cluster-sync

   |downloads_snakemake-executor-plugin-cluster-sync| |docker_snakemake-executor-plugin-cluster-sync|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends python: ``>=3.11.0,<4.0.0``
   :depends snakemake-interface-common: ``>=1.14.0,<2.0.0``
   :depends snakemake-interface-executor-plugins: ``>=9.0.0,<10.0.0``
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

      mamba install snakemake-executor-plugin-cluster-sync

   and update with::

      mamba update snakemake-executor-plugin-cluster-sync

  To create a new environment, run::

      mamba create --name myenvname snakemake-executor-plugin-cluster-sync

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-executor-plugin-cluster-sync:<tag>

   (see `snakemake-executor-plugin-cluster-sync/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-executor-plugin-cluster-sync| image:: https://img.shields.io/conda/dn/bioconda/snakemake-executor-plugin-cluster-sync.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-executor-plugin-cluster-sync
   :alt:   (downloads)
.. |docker_snakemake-executor-plugin-cluster-sync| image:: https://quay.io/repository/biocontainers/snakemake-executor-plugin-cluster-sync/status
   :target: https://quay.io/repository/biocontainers/snakemake-executor-plugin-cluster-sync
.. _`snakemake-executor-plugin-cluster-sync/tags`: https://quay.io/repository/biocontainers/snakemake-executor-plugin-cluster-sync?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-executor-plugin-cluster-sync";
        var versions = ["0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-executor-plugin-cluster-sync/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-executor-plugin-cluster-sync/README.html