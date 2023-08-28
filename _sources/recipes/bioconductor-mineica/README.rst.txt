:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mineica'
.. highlight: bash

bioconductor-mineica
====================

.. conda:recipe:: bioconductor-mineica
   :replaces_section_title:
   :noindex:

   Analysis of an ICA decomposition obtained on genomics data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MineICA.html
   :license: GPL-2
   :recipe: /`bioconductor-mineica <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mineica>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mineica/meta.yaml>`_
   :links: biotools: :biotools:`mineica`, doi: :doi:`10.1155/2014/213656`

   The goal of MineICA is to perform Independent Component Analysis \(ICA\) on multiple transcriptome datasets\, integrating additional data \(e.g molecular\, clinical and pathological\). This Integrative ICA helps the biological interpretation of the components by studying their association with variables \(e.g sample annotations\) and gene sets\, and enables the comparison of components from different datasets using correlation\-based graph.


.. conda:package:: bioconductor-mineica

   |downloads_bioconductor-mineica| |docker_bioconductor-mineica|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.78.0,<1.79.0``
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-gostats: ``>=2.66.0,<2.67.0``
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends bioconductor-lumi: ``>=2.52.0,<2.53.0``
   :depends bioconductor-lumihumanall.db: ``>=1.22.0,<1.23.0``
   :depends bioconductor-marray: ``>=1.78.0,<1.79.0``
   :depends bioconductor-rgraphviz: ``>=2.44.0,<2.45.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-colorspace: 
   :depends r-fastica: 
   :depends r-foreach: 
   :depends r-fpc: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-hmisc: 
   :depends r-igraph: 
   :depends r-jade: 
   :depends r-mclust: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-mineica

   and update with::

      mamba update bioconductor-mineica

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mineica

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mineica:<tag>

   (see `bioconductor-mineica/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mineica| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mineica.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mineica
   :alt:   (downloads)
.. |docker_bioconductor-mineica| image:: https://quay.io/repository/biocontainers/bioconductor-mineica/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mineica
.. _`bioconductor-mineica/tags`: https://quay.io/repository/biocontainers/bioconductor-mineica?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mineica";
        var versions = ["1.40.0","1.38.0","1.34.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mineica/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mineica/README.html