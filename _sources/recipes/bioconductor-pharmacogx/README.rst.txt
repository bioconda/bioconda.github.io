:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pharmacogx'
.. highlight: bash

bioconductor-pharmacogx
=======================

.. conda:recipe:: bioconductor-pharmacogx
   :replaces_section_title:
   :noindex:

   Analysis of Large\-Scale Pharmacogenomic Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/PharmacoGx.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-pharmacogx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pharmacogx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pharmacogx/meta.yaml>`_

   Contains a set of functions to perform large\-scale analysis of pharmaco\-genomic data. These include the PharmacoSet object for storing the results of pharmacogenomic experiments\, as well as a number of functions for computing common summaries of drug\-dose response and correlating them with the molecular features in a cancer cell\-line.


.. conda:package:: bioconductor-pharmacogx

   |downloads_bioconductor-pharmacogx| |docker_bioconductor-pharmacogx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.10.0-0</code>,  <code>3.6.0-0</code>,  <code>3.4.0-0</code>,  <code>3.2.0-1</code>,  <code>3.2.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.4-0</code>,  <code>2.2.0-0</code>,  </span></summary>
      

      ``3.10.0-0``,  ``3.6.0-0``,  ``3.4.0-0``,  ``3.2.0-1``,  ``3.2.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.4-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-coregx: ``>=2.10.0,<2.11.0``
   :depends bioconductor-coregx: ``>=2.10.0,<2.11.0a0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-boot: 
   :depends r-catools: 
   :depends r-checkmate: 
   :depends r-coop: 
   :depends r-data.table: 
   :depends r-downloader: 
   :depends r-ggplot2: 
   :depends r-jsonlite: 
   :depends r-magicaxis: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-reshape2: 
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

      mamba install bioconductor-pharmacogx

   and update with::

      mamba update bioconductor-pharmacogx

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pharmacogx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pharmacogx:<tag>

   (see `bioconductor-pharmacogx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pharmacogx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pharmacogx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pharmacogx
   :alt:   (downloads)
.. |docker_bioconductor-pharmacogx| image:: https://quay.io/repository/biocontainers/bioconductor-pharmacogx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pharmacogx
.. _`bioconductor-pharmacogx/tags`: https://quay.io/repository/biocontainers/bioconductor-pharmacogx?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pharmacogx";
        var versions = ["3.10.0","3.6.0","3.4.0","3.2.0","3.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pharmacogx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pharmacogx/README.html