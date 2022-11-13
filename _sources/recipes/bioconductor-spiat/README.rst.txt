:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spiat'
.. highlight: bash

bioconductor-spiat
==================

.. conda:recipe:: bioconductor-spiat
   :replaces_section_title:
   :noindex:

   Spatial Image Analysis of Tissues

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/SPIAT.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spiat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spiat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spiat/meta.yaml>`_

   SPIAT \(\*\*Sp\*\*atial \*\*I\*\*mage \*\*A\*\*nalysis of \*\*T\*\*issues\) is an R package with a suite of data processing\, quality control\, visualization and data analysis tools. SPIAT is compatible with data generated from single\-cell spatial proteomics platforms \(e.g. OPAL\, CODEX\, MIBI\, cellprofiler\). SPIAT reads spatial data in the form of X and Y coordinates of cells\, marker intensities and cell phenotypes. SPIAT includes six analysis modules that allow visualization\, calculation of cell colocalization\, categorization of the immune microenvironment relative to tumor areas\, analysis of cellular neighborhoods\, and the quantification of spatial heterogeneity\, providing a comprehensive toolkit for spatial data analysis.


.. conda:package:: bioconductor-spiat

   |downloads_bioconductor-spiat| |docker_bioconductor-spiat|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.14.0,<2.15.0``
   :depends bioconductor-dittoseq: ``>=1.10.0,<1.11.0``
   :depends bioconductor-spatialexperiment: ``>=1.8.0,<1.9.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-alphahull: 
   :depends r-apcluster: ``>=1.4.7``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dbscan: ``>=1.1-5``
   :depends r-dplyr: ``>=0.8.3``
   :depends r-elsa: 
   :depends r-ggplot2: ``>=3.2.1``
   :depends r-gridextra: ``>=2.3``
   :depends r-gtools: ``>=3.8.1``
   :depends r-mmand: ``>=1.5.4``
   :depends r-plotly: ``>=4.9.0``
   :depends r-pracma: ``>=2.2.5``
   :depends r-rann: ``>=2.6.1``
   :depends r-raster: 
   :depends r-reshape2: ``>=1.4.3``
   :depends r-rlang: 
   :depends r-rtsne: 
   :depends r-sp: 
   :depends r-spatstat.core: 
   :depends r-spatstat.geom: 
   :depends r-tibble: ``>=2.1.3``
   :depends r-umap: 
   :depends r-vroom: 
   :depends r-xroi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-spiat

   and update with::

      conda update bioconductor-spiat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spiat:<tag>

   (see `bioconductor-spiat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spiat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spiat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spiat
   :alt:   (downloads)
.. |docker_bioconductor-spiat| image:: https://quay.io/repository/biocontainers/bioconductor-spiat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spiat
.. _`bioconductor-spiat/tags`: https://quay.io/repository/biocontainers/bioconductor-spiat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spiat";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spiat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spiat/README.html