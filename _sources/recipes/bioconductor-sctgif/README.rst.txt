:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sctgif'
.. highlight: bash

bioconductor-sctgif
===================

.. conda:recipe:: bioconductor-sctgif
   :replaces_section_title:
   :noindex:

   Cell type annotation for unannotated single\-cell RNA\-Seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/scTGIF.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sctgif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sctgif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sctgif/meta.yaml>`_

   scTGIF connects the cells and the related gene functions without cell type label.


.. conda:package:: bioconductor-sctgif

   |downloads_bioconductor-sctgif| |docker_bioconductor-sctgif|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocstyle: ``>=2.30.0,<2.31.0``
   :depends bioconductor-biocstyle: ``>=2.30.0,<2.31.0a0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-schex: ``>=1.16.0,<1.17.0``
   :depends bioconductor-schex: ``>=1.16.0,<1.17.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-knitr: 
   :depends r-msigdbr: 
   :depends r-nntensor: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-tagcloud: 
   :depends r-tibble: 
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

      mamba install bioconductor-sctgif

   and update with::

      mamba update bioconductor-sctgif

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sctgif

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sctgif:<tag>

   (see `bioconductor-sctgif/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sctgif| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sctgif.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sctgif
   :alt:   (downloads)
.. |docker_bioconductor-sctgif| image:: https://quay.io/repository/biocontainers/bioconductor-sctgif/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sctgif
.. _`bioconductor-sctgif/tags`: https://quay.io/repository/biocontainers/bioconductor-sctgif?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sctgif";
        var versions = ["1.16.0","1.14.0","1.14.0","1.12.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sctgif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sctgif/README.html