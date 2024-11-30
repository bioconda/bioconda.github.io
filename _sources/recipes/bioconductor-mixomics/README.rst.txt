:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mixomics'
.. highlight: bash

bioconductor-mixomics
=====================

.. conda:recipe:: bioconductor-mixomics
   :replaces_section_title:
   :noindex:

   Omics Data Integration Project

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/mixOmics.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mixomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mixomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mixomics/meta.yaml>`_

   Multivariate methods are well suited to large omics data sets where the number of variables \(e.g. genes\, proteins\, metabolites\) is much larger than the number of samples \(patients\, cells\, mice\). They have the appealing properties of reducing the dimension of the data by using instrumental variables \(components\)\, which are defined as combinations of all variables. Those components are then used to produce useful graphical outputs that enable better understanding of the relationships and correlation structures between the different data sets that are integrated. mixOmics offers a wide range of multivariate methods for the exploration and integration of biological datasets with a particular focus on variable selection. The package proposes several sparse multivariate models we have developed to identify the key variables that are highly correlated\, and\/or explain the biological outcome of interest. The data that can be analysed with mixOmics may come from high throughput sequencing technologies\, such as omics data \(transcriptomics\, metabolomics\, proteomics\, metagenomics etc\) but also beyond the realm of omics \(e.g. spectral imaging\). The methods implemented in mixOmics can also handle missing values without having to delete entire rows with missing data. A non exhaustive list of methods include variants of generalised Canonical Correlation Analysis\, sparse Partial Least Squares and sparse Discriminant Analysis. Recently we implemented integrative methods to combine multiple data sets\: N\-integration with variants of Generalised Canonical Correlation Analysis and P\-integration with variants of multi\-group Partial Least Squares.


.. conda:package:: bioconductor-mixomics

   |downloads_bioconductor-mixomics| |docker_bioconductor-mixomics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.26.0-0</code>,  <code>6.24.0-0</code>,  <code>6.22.0-0</code>,  <code>6.17.26-0</code>,  <code>6.16.0-0</code>,  <code>6.14.0-1</code>,  <code>6.14.0-0</code>,  <code>6.12.0-0</code>,  <code>6.10.1-0</code>,  </span></summary>
      

      ``6.26.0-0``,  ``6.24.0-0``,  ``6.22.0-0``,  ``6.17.26-0``,  ``6.16.0-0``,  ``6.14.0-1``,  ``6.14.0-0``,  ``6.12.0-0``,  ``6.10.1-0``,  ``6.8.0-1``,  ``6.8.0-0``,  ``6.6.2-0``,  ``6.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corpcor: 
   :depends r-dplyr: 
   :depends r-ellipse: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-lattice: 
   :depends r-mass: 
   :depends r-matrixstats: 
   :depends r-rarpack: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-tidyr: 
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

      mamba install bioconductor-mixomics

   and update with::

      mamba update bioconductor-mixomics

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mixomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mixomics:<tag>

   (see `bioconductor-mixomics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mixomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mixomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mixomics
   :alt:   (downloads)
.. |docker_bioconductor-mixomics| image:: https://quay.io/repository/biocontainers/bioconductor-mixomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mixomics
.. _`bioconductor-mixomics/tags`: https://quay.io/repository/biocontainers/bioconductor-mixomics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mixomics";
        var versions = ["6.26.0","6.24.0","6.22.0","6.17.26","6.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mixomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mixomics/README.html