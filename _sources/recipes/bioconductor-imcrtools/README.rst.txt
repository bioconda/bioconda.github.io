:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-imcrtools'
.. highlight: bash

bioconductor-imcrtools
======================

.. conda:recipe:: bioconductor-imcrtools
   :replaces_section_title:
   :noindex:

   Methods for imaging mass cytometry data analysis

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/imcRtools.html
   :license: GPL-3
   :recipe: /`bioconductor-imcrtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imcrtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imcrtools/meta.yaml>`_

   This R package supports the handling and analysis of imaging mass cytometry and other highly multiplexed imaging data. The main functionality includes reading in single\-cell data after image segmentation and measurement\, data formatting to perform channel spillover correction and a number of spatial analysis approaches. First\, cell\-cell interactions are detected via spatial graph construction\; these graphs can be visualized with cells representing nodes and interactions representing edges. Furthermore\, per cell\, its direct neighbours are summarized to allow spatial clustering. Per image\/grouping level\, interactions between types of cells are counted\, averaged and compared against random permutations. In that way\, types of cells that interact more \(attraction\) or less \(avoidance\) frequently than expected by chance are detected.


.. conda:package:: bioconductor-imcrtools

   |downloads_bioconductor-imcrtools| |docker_bioconductor-imcrtools|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocneighbors: ``>=1.12.0,<1.13.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-cytomapper: ``>=1.6.0,<1.7.0``
   :depends bioconductor-ebimage: ``>=4.36.0,<4.37.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-scuttle: ``>=1.4.0,<1.5.0``
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-spatialexperiment: ``>=1.4.0,<1.5.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-abind: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-concaveman: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-pheatmap: 
   :depends r-readr: 
   :depends r-rtriangle: 
   :depends r-sf: 
   :depends r-stringr: 
   :depends r-tidygraph: 
   :depends r-viridis: 
   :depends r-vroom: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-imcrtools

   and update with::

      conda update bioconductor-imcrtools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-imcrtools:<tag>

   (see `bioconductor-imcrtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-imcrtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-imcrtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-imcrtools
   :alt:   (downloads)
.. |docker_bioconductor-imcrtools| image:: https://quay.io/repository/biocontainers/bioconductor-imcrtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-imcrtools
.. _`bioconductor-imcrtools/tags`: https://quay.io/repository/biocontainers/bioconductor-imcrtools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-imcrtools";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-imcrtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-imcrtools/README.html