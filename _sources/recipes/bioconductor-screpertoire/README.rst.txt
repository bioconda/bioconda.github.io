:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-screpertoire'
.. highlight: bash

bioconductor-screpertoire
=========================

.. conda:recipe:: bioconductor-screpertoire
   :replaces_section_title:
   :noindex:

   A toolkit for single\-cell immune receptor profiling

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scRepertoire.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-screpertoire <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-screpertoire>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-screpertoire/meta.yaml>`_

   scRepertoire is a toolkit for processing and analyzing single\-cell T\-cell receptor \(TCR\) and immunoglobulin \(Ig\). The scRepertoire framework supports use of 10x\, AIRR\, BD\, MiXCR\, Omniscope\, TRUST4\, and WAT3R single\-cell formats. The functionality includes basic clonal analyses\, repertoire summaries\, distance\-based clustering and interaction with the popular Seurat and SingleCellExperiment\/Bioconductor R workflows.


.. conda:package:: bioconductor-screpertoire

   |downloads_bioconductor-screpertoire| |docker_bioconductor-screpertoire|

   :versions:
      
      

      ``2.2.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cubature: 
   :depends r-dplyr: 
   :depends r-evmix: 
   :depends r-ggalluvial: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-hash: 
   :depends r-igraph: 
   :depends r-inext: 
   :depends r-plyr: 
   :depends r-quantreg: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :depends r-rjson: 
   :depends r-rlang: 
   :depends r-seuratobject: 
   :depends r-stringdist: 
   :depends r-stringr: 
   :depends r-tidygraph: 
   :depends r-truncdist: 
   :depends r-vgam: 
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

      mamba install bioconductor-screpertoire

   and update with::

      mamba update bioconductor-screpertoire

  To create a new environment, run::

      mamba create --name myenvname bioconductor-screpertoire

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-screpertoire:<tag>

   (see `bioconductor-screpertoire/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-screpertoire| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-screpertoire.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-screpertoire
   :alt:   (downloads)
.. |docker_bioconductor-screpertoire| image:: https://quay.io/repository/biocontainers/bioconductor-screpertoire/status
   :target: https://quay.io/repository/biocontainers/bioconductor-screpertoire
.. _`bioconductor-screpertoire/tags`: https://quay.io/repository/biocontainers/bioconductor-screpertoire?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-screpertoire";
        var versions = ["2.2.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-screpertoire/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-screpertoire/README.html