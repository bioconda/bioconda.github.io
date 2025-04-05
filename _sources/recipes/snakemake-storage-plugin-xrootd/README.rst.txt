:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakemake-storage-plugin-xrootd'
.. highlight: bash

snakemake-storage-plugin-xrootd
===============================

.. conda:recipe:: snakemake-storage-plugin-xrootd
   :replaces_section_title:
   :noindex:

   A Snakemake storage plugin for XRootD storage

   :homepage: https://github.com/snakemake/snakemake-storage-plugin-xrootd
   :license: MIT / MIT
   :recipe: /`snakemake-storage-plugin-xrootd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-xrootd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakemake-storage-plugin-xrootd/meta.yaml>`_

   


.. conda:package:: snakemake-storage-plugin-xrootd

   |downloads_snakemake-storage-plugin-xrootd| |docker_snakemake-storage-plugin-xrootd|

   :versions:
      
      

      ``0.4.1-0``,  ``0.4.0-0``

      

   
   :depends python: ``>=3.11``
   :depends snakemake-interface-common: ``>=1.15.0,<2``
   :depends snakemake-interface-storage-plugins: ``>=4.1.0,<5``
   :depends xrootd: ``>=5.6,<6``
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

      mamba install snakemake-storage-plugin-xrootd

   and update with::

      mamba update snakemake-storage-plugin-xrootd

  To create a new environment, run::

      mamba create --name myenvname snakemake-storage-plugin-xrootd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakemake-storage-plugin-xrootd:<tag>

   (see `snakemake-storage-plugin-xrootd/tags`_ for valid values for ``<tag>``)


.. |downloads_snakemake-storage-plugin-xrootd| image:: https://img.shields.io/conda/dn/bioconda/snakemake-storage-plugin-xrootd.svg?style=flat
   :target: https://anaconda.org/bioconda/snakemake-storage-plugin-xrootd
   :alt:   (downloads)
.. |docker_snakemake-storage-plugin-xrootd| image:: https://quay.io/repository/biocontainers/snakemake-storage-plugin-xrootd/status
   :target: https://quay.io/repository/biocontainers/snakemake-storage-plugin-xrootd
.. _`snakemake-storage-plugin-xrootd/tags`: https://quay.io/repository/biocontainers/snakemake-storage-plugin-xrootd?tab=tags


.. raw:: html

    <script>
        var package = "snakemake-storage-plugin-xrootd";
        var versions = ["0.4.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakemake-storage-plugin-xrootd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakemake-storage-plugin-xrootd/README.html