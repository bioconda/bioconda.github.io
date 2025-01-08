:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scatac.explorer'
.. highlight: bash

bioconductor-scatac.explorer
============================

.. conda:recipe:: bioconductor-scatac.explorer
   :replaces_section_title:
   :noindex:

   A Collection of Single\-cell ATAC Sequencing Datasets and Corresponding Metadata

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/scATAC.Explorer.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-scatac.explorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scatac.explorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scatac.explorer/meta.yaml>`_

   This package provides a tool to search and download a collection of publicly available single cell ATAC\-seq datasets and their metadata. scATAC\-Explorer aims to act as a single point of entry for users looking to study single cell ATAC\-seq data. Users can quickly search available datasets using the metadata table and download datasets of interest for immediate analysis within R.


.. conda:package:: bioconductor-scatac.explorer

   |downloads_bioconductor-scatac.explorer| |docker_bioconductor-scatac.explorer|

   :versions:
      
      

      ``1.12.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.1-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.14.0,<2.15.0``
   :depends bioconductor-data-packages: ``>=20250104``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-zellkonverter: ``>=1.16.0,<1.17.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-matrix: 
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

      mamba install bioconductor-scatac.explorer

   and update with::

      mamba update bioconductor-scatac.explorer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scatac.explorer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scatac.explorer:<tag>

   (see `bioconductor-scatac.explorer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scatac.explorer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scatac.explorer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scatac.explorer
   :alt:   (downloads)
.. |docker_bioconductor-scatac.explorer| image:: https://quay.io/repository/biocontainers/bioconductor-scatac.explorer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scatac.explorer
.. _`bioconductor-scatac.explorer/tags`: https://quay.io/repository/biocontainers/bioconductor-scatac.explorer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scatac.explorer";
        var versions = ["1.12.1","1.8.0","1.6.0","1.4.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scatac.explorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scatac.explorer/README.html