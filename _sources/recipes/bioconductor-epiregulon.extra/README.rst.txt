:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epiregulon.extra'
.. highlight: bash

bioconductor-epiregulon.extra
=============================

.. conda:recipe:: bioconductor-epiregulon.extra
   :replaces_section_title:
   :noindex:

   Companion package to epiregulon with additional plotting\, differential and graph functions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/epiregulon.extra.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epiregulon.extra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epiregulon.extra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epiregulon.extra/meta.yaml>`_

   Gene regulatory networks model the underlying gene regulation hierarchies that drive gene expression and observed phenotypes. Epiregulon infers TF activity in single cells by constructing a gene regulatory network \(regulons\). This is achieved through integration of scATAC\-seq and scRNA\-seq data and incorporation of public bulk TF ChIP\-seq data. Links between regulatory elements and their target genes are established by computing correlations between chromatin accessibility and gene expressions.


.. conda:package:: bioconductor-epiregulon.extra

   |downloads_bioconductor-epiregulon.extra| |docker_bioconductor-epiregulon.extra|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-clusterprofiler: ``>=4.14.0,<4.15.0``
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends bioconductor-scater: ``>=1.34.0,<1.35.0``
   :depends bioconductor-scran: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-checkmate: 
   :depends r-circlize: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-igraph: 
   :depends r-lifecycle: 
   :depends r-matrix: 
   :depends r-patchwork: 
   :depends r-reshape2: 
   :depends r-scales: 
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

      mamba install bioconductor-epiregulon.extra

   and update with::

      mamba update bioconductor-epiregulon.extra

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epiregulon.extra

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epiregulon.extra:<tag>

   (see `bioconductor-epiregulon.extra/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epiregulon.extra| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epiregulon.extra.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epiregulon.extra
   :alt:   (downloads)
.. |docker_bioconductor-epiregulon.extra| image:: https://quay.io/repository/biocontainers/bioconductor-epiregulon.extra/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epiregulon.extra
.. _`bioconductor-epiregulon.extra/tags`: https://quay.io/repository/biocontainers/bioconductor-epiregulon.extra?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epiregulon.extra";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epiregulon.extra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epiregulon.extra/README.html