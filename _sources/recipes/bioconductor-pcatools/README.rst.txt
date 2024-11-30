:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pcatools'
.. highlight: bash

bioconductor-pcatools
=====================

.. conda:recipe:: bioconductor-pcatools
   :replaces_section_title:
   :noindex:

   PCAtools\: Everything Principal Components Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/PCAtools.html
   :license: GPL-3
   :recipe: /`bioconductor-pcatools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcatools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcatools/meta.yaml>`_

   Principal Component Analysis \(PCA\) is a very powerful technique that has wide applicability in data science\, bioinformatics\, and further afield. It was initially developed to analyse large volumes of data in order to tease out the differences\/relationships between the logical entities being analysed. It extracts the fundamental structure of the data without the need to build any model to represent it. This \'summary\' of the data is arrived at through a process of reduction that can transform the large number of variables into a lesser number that are uncorrelated \(i.e. the \'principal components\'\)\, while at the same time being capable of easy interpretation on the original data. PCAtools provides functions for data exploration via PCA\, and allows the user to generate publication\-ready figures. PCA is performed via BiocSingular \- users can also identify optimal number of principal components via different metrics\, such as elbow method and Horn\'s parallel analysis\, which has relevance for data reduction in single\-cell RNA\-seq \(scRNA\-seq\) and high dimensional mass cytometry data.


.. conda:package:: bioconductor-pcatools

   |downloads_bioconductor-pcatools| |docker_bioconductor-pcatools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  <code>2.6.0-2</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-1</code>,  </span></summary>
      

      ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-beachmat: ``>=2.18.0,<2.19.0``
   :depends bioconductor-beachmat: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-biocsingular: ``>=1.18.0,<1.19.0``
   :depends bioconductor-biocsingular: ``>=1.18.0,<1.19.0a0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0``
   :depends bioconductor-delayedarray: ``>=0.28.0,<0.29.0a0``
   :depends bioconductor-delayedmatrixstats: ``>=1.24.0,<1.25.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.24.0,<1.25.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bh: 
   :depends r-cowplot: 
   :depends r-dqrng: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-lattice: 
   :depends r-matrix: 
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

      mamba install bioconductor-pcatools

   and update with::

      mamba update bioconductor-pcatools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pcatools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pcatools:<tag>

   (see `bioconductor-pcatools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pcatools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pcatools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pcatools
   :alt:   (downloads)
.. |docker_bioconductor-pcatools| image:: https://quay.io/repository/biocontainers/bioconductor-pcatools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pcatools
.. _`bioconductor-pcatools/tags`: https://quay.io/repository/biocontainers/bioconductor-pcatools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pcatools";
        var versions = ["2.14.0","2.12.0","2.10.0","2.10.0","2.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pcatools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pcatools/README.html