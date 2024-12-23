:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlecellsignalr'
.. highlight: bash

bioconductor-singlecellsignalr
==============================

.. conda:recipe:: bioconductor-singlecellsignalr
   :replaces_section_title:
   :noindex:

   Cell Signalling Using Single Cell RNAseq Data Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SingleCellSignalR.html
   :license: GPL-3
   :recipe: /`bioconductor-singlecellsignalr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellsignalr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellsignalr/meta.yaml>`_

   Allows single cell RNA seq data analysis\, clustering\, creates internal network and infers cell\-cell interactions.


.. conda:package:: bioconductor-singlecellsignalr

   |downloads_bioconductor-singlecellsignalr| |docker_bioconductor-singlecellsignalr|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-multtest: ``>=2.62.0,<2.63.0``
   :depends bioconductor-scran: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-biocmanager: 
   :depends r-circlize: 
   :depends r-data.table: 
   :depends r-foreach: 
   :depends r-gplots: 
   :depends r-igraph: 
   :depends r-pheatmap: 
   :depends r-rtsne: 
   :depends r-stringr: 
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

      mamba install bioconductor-singlecellsignalr

   and update with::

      mamba update bioconductor-singlecellsignalr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-singlecellsignalr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-singlecellsignalr:<tag>

   (see `bioconductor-singlecellsignalr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-singlecellsignalr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singlecellsignalr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-singlecellsignalr
   :alt:   (downloads)
.. |docker_bioconductor-singlecellsignalr| image:: https://quay.io/repository/biocontainers/bioconductor-singlecellsignalr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singlecellsignalr
.. _`bioconductor-singlecellsignalr/tags`: https://quay.io/repository/biocontainers/bioconductor-singlecellsignalr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-singlecellsignalr";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlecellsignalr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlecellsignalr/README.html