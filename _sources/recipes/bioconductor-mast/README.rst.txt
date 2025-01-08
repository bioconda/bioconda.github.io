:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mast'
.. highlight: bash

bioconductor-mast
=================

.. conda:recipe:: bioconductor-mast
   :replaces_section_title:
   :noindex:

   Model\-based Analysis of Single Cell Transcriptomics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MAST.html
   :license: GPL(>= 2)
   :recipe: /`bioconductor-mast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mast/meta.yaml>`_
   :links: biotools: :biotools:`mast`, doi: :doi:`10.1186/s13059-015-0844-5`

   Methods and models for handling zero\-inflated single cell assay data.


.. conda:package:: bioconductor-mast

   |downloads_bioconductor-mast| |docker_bioconductor-mast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``,  ``1.6.1-0``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-abind: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-plyr: 
   :depends r-progress: 
   :depends r-reshape2: 
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

      mamba install bioconductor-mast

   and update with::

      mamba update bioconductor-mast

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mast:<tag>

   (see `bioconductor-mast/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mast| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mast.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mast
   :alt:   (downloads)
.. |docker_bioconductor-mast| image:: https://quay.io/repository/biocontainers/bioconductor-mast/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mast
.. _`bioconductor-mast/tags`: https://quay.io/repository/biocontainers/bioconductor-mast?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mast";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mast/README.html