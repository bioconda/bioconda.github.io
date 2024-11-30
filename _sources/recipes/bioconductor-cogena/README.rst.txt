:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cogena'
.. highlight: bash

bioconductor-cogena
===================

.. conda:recipe:: bioconductor-cogena
   :replaces_section_title:
   :noindex:

   co\-expressed gene\-set enrichment analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/cogena.html
   :license: LGPL-3
   :recipe: /`bioconductor-cogena <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogena>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogena/meta.yaml>`_
   :links: biotools: :biotools:`cogena`, doi: :doi:`10.1186/s12864-016-2737-8`

   cogena is a workflow for co\-expressed gene\-set enrichment analysis. It aims to discovery smaller scale\, but highly correlated cellular events that may be of great biological relevance. A novel pipeline for drug discovery and drug repositioning based on the cogena workflow is proposed. Particularly\, candidate drugs can be predicted based on the gene expression of disease\-related data\, or other similar drugs can be identified based on the gene expression of drug\-related data. Moreover\, the drug mode of action can be disclosed by the associated pathway analysis. In summary\, cogena is a flexible workflow for various gene set enrichment analysis for co\-expressed genes\, with a focus on pathway\/GO analysis and drug repositioning.


.. conda:package:: bioconductor-cogena

   |downloads_bioconductor-cogena| |docker_bioconductor-cogena|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends r-amap: 
   :depends r-apcluster: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biwt: 
   :depends r-class: 
   :depends r-cluster: 
   :depends r-corrplot: 
   :depends r-devtools: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-fastcluster: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-kohonen: 
   :depends r-mclust: 
   :depends r-reshape2: 
   :depends r-stringr: 
   :depends r-tibble: 
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

      mamba install bioconductor-cogena

   and update with::

      mamba update bioconductor-cogena

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cogena

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cogena:<tag>

   (see `bioconductor-cogena/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cogena| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cogena.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cogena
   :alt:   (downloads)
.. |docker_bioconductor-cogena| image:: https://quay.io/repository/biocontainers/bioconductor-cogena/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cogena
.. _`bioconductor-cogena/tags`: https://quay.io/repository/biocontainers/bioconductor-cogena?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cogena";
        var versions = ["1.36.0","1.34.0","1.32.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cogena/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cogena/README.html