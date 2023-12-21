:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-storage-plugin-zenodo'
.. highlight: bash

snakemake-storage-plugin-zenodo
===============================

.. conda:recipe:: snakemake-storage-plugin-zenodo
   :replaces_section_title:
   :noindex:

   A Snakemake storage plugin for reading from and writing to zenodo.org

   :homepage: https://github.com/snakemake/snakemake-storage-plugin-zenodo
   :license: MIT
   :recipe: /`snakemake-storage-plugin-zenodo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-zenodo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-zenodo/meta.yaml>`_

   


.. conda:package:: snakemake-storage-plugin-zenodo

   |downloads_snakemake-storage-plugin-zenodo| |docker_snakemake-storage-plugin-zenodo|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends python: ``>=3.11.0,<4.0.0``
   :depends requests: ``>=2.31.0,<3.0.0``
   :depends snakemake-interface-common: ``>=1.14.4,<2.0.0``
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

      mamba install snakemake-storage-plugin-zenodo

   and update with::

      mamba update snakemake-storage-plugin-zenodo

  To create a new environment, run::

      mamba create --name myenvname snakemake-storage-plugin-zenodo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-storage-plugin-zenodo:<tag>

   (see `snakemake-storage-plugin-zenodo/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-storage-plugin-zenodo| image:: https://img.shields.io/conda/dn/bioconda/snakemake-storage-plugin-zenodo.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-storage-plugin-zenodo
   :alt:   (downloads)
.. |docker_snakemake-storage-plugin-zenodo| image:: https://quay.io/repository/biocontainers/snakemake-storage-plugin-zenodo/status
   :target: https://quay.io/repository/biocontainers/snakemake-storage-plugin-zenodo
.. _`snakemake-storage-plugin-zenodo/tags`: https://quay.io/repository/biocontainers/snakemake-storage-plugin-zenodo?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-storage-plugin-zenodo";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-storage-plugin-zenodo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-storage-plugin-zenodo/README.html