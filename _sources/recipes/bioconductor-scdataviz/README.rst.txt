:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scdataviz'
.. highlight: bash

bioconductor-scdataviz
======================

.. conda:recipe:: bioconductor-scdataviz
   :replaces_section_title:
   :noindex:

   scDataviz\: single cell dataviz and downstream analyses

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/scDataviz.html
   :license: GPL-3
   :recipe: /`bioconductor-scdataviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdataviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdataviz/meta.yaml>`_

   In the single cell World\, which includes flow cytometry\, mass cytometry\, single\-cell RNA\-seq \(scRNA\-seq\)\, and others\, there is a need to improve data visualisation and to bring analysis capabilities to researchers even from non\-technical backgrounds. scDataviz attempts to fit into this space\, while also catering for advanced users. Additonally\, due to the way that scDataviz is designed\, which is based on SingleCellExperiment\, it has a \'plug and play\' feel\, and immediately lends itself as flexibile and compatibile with studies that go beyond scDataviz. Finally\, the graphics in scDataviz are generated via the ggplot engine\, which means that users can \'add on\' features to these with ease.


.. conda:package:: bioconductor-scdataviz

   |downloads_bioconductor-scdataviz| |docker_bioconductor-scdataviz|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-flowcore: ``>=2.12.0,<2.13.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corrplot: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-mass: 
   :depends r-matrixstats: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-seurat: 
   :depends r-umap: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scdataviz

   and update with::

      conda update bioconductor-scdataviz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scdataviz:<tag>

   (see `bioconductor-scdataviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scdataviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scdataviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scdataviz
   :alt:   (downloads)
.. |docker_bioconductor-scdataviz| image:: https://quay.io/repository/biocontainers/bioconductor-scdataviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scdataviz
.. _`bioconductor-scdataviz/tags`: https://quay.io/repository/biocontainers/bioconductor-scdataviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scdataviz";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scdataviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scdataviz/README.html