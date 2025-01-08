:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sctreeviz'
.. highlight: bash

bioconductor-sctreeviz
======================

.. conda:recipe:: bioconductor-sctreeviz
   :replaces_section_title:
   :noindex:

   R\/Bioconductor package to interactively explore and visualize single cell RNA\-seq datasets with hierarhical annotations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scTreeViz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sctreeviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sctreeviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sctreeviz/meta.yaml>`_

   scTreeViz provides classes to support interactive data aggregation and visualization of single cell RNA\-seq datasets with hierarchies for e.g. cell clusters at different resolutions. The \`TreeIndex\` class provides methods to manage hierarchy and split the tree at a given resolution or across resolutions. The \`TreeViz\` class extends \`SummarizedExperiment\` and can performs quick aggregations on the count matrix defined by clusters.


.. conda:package:: bioconductor-sctreeviz

   |downloads_bioconductor-sctreeviz| |docker_bioconductor-sctreeviz|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-epivizr: ``>=2.36.0,<2.37.0``
   :depends bioconductor-epivizrdata: ``>=1.34.0,<1.35.0``
   :depends bioconductor-epivizrserver: ``>=1.34.0,<1.35.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-scater: ``>=1.34.0,<1.35.0``
   :depends bioconductor-scran: ``>=1.34.0,<1.35.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-clustree: 
   :depends r-data.table: 
   :depends r-digest: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-httr: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-rtsne: 
   :depends r-seurat: 
   :depends r-sys: 
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

      mamba install bioconductor-sctreeviz

   and update with::

      mamba update bioconductor-sctreeviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sctreeviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sctreeviz:<tag>

   (see `bioconductor-sctreeviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sctreeviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sctreeviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sctreeviz
   :alt:   (downloads)
.. |docker_bioconductor-sctreeviz| image:: https://quay.io/repository/biocontainers/bioconductor-sctreeviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sctreeviz
.. _`bioconductor-sctreeviz/tags`: https://quay.io/repository/biocontainers/bioconductor-sctreeviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sctreeviz";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sctreeviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sctreeviz/README.html