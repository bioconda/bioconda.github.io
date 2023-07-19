:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sctreeviz'
.. highlight: bash

bioconductor-sctreeviz
======================

.. conda:recipe:: bioconductor-sctreeviz
   :replaces_section_title:
   :noindex:

   R\/Bioconductor package to interactively explore and visualize single cell RNA\-seq datasets with hierarhical annotations

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/scTreeViz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sctreeviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sctreeviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sctreeviz/meta.yaml>`_

   scTreeViz provides classes to support interactive data aggregation and visualization of single cell RNA\-seq datasets with hierarchies for e.g. cell clusters at different resolutions. The \`TreeIndex\` class provides methods to manage hierarchy and split the tree at a given resolution or across resolutions. The \`TreeViz\` class extends \`SummarizedExperiment\` and can performs quick aggregations on the count matrix defined by clusters.


.. conda:package:: bioconductor-sctreeviz

   |downloads_bioconductor-sctreeviz| |docker_bioconductor-sctreeviz|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-epivizr: ``>=2.30.0,<2.31.0``
   :depends bioconductor-epivizrdata: ``>=1.28.0,<1.29.0``
   :depends bioconductor-epivizrserver: ``>=1.28.0,<1.29.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-scater: ``>=1.28.0,<1.29.0``
   :depends bioconductor-scran: ``>=1.28.0,<1.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sctreeviz

   and update with::

      conda update bioconductor-sctreeviz

   or use the docker container::

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
        var versions = ["1.6.0","1.4.0","1.0.0"];
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