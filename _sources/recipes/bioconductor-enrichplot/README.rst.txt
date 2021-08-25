:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-enrichplot'
.. highlight: bash

bioconductor-enrichplot
=======================

.. conda:recipe:: bioconductor-enrichplot
   :replaces_section_title:
   :noindex:

   Visualization of Functional Enrichment Result

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/enrichplot.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-enrichplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-enrichplot/meta.yaml>`_

   The \'enrichplot\' package implements several visualization methods for interpreting functional enrichment results obtained from ORA or GSEA analysis. All the visualization methods are developed based on \'ggplot2\' graphics.


.. conda:package:: bioconductor-enrichplot

   |downloads_bioconductor-enrichplot| |docker_bioconductor-enrichplot|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.2-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-dose: ``>=3.18.0,<3.19.0``
   :depends bioconductor-ggtree: ``>=3.0.0,<3.1.0``
   :depends bioconductor-gosemsim: ``>=2.18.0,<2.19.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cowplot: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scatterpie: 
   :depends r-shadowtext: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-enrichplot

   and update with::

      conda update bioconductor-enrichplot

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-enrichplot:<tag>

   (see `bioconductor-enrichplot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-enrichplot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-enrichplot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-enrichplot
   :alt:   (downloads)
.. |docker_bioconductor-enrichplot| image:: https://quay.io/repository/biocontainers/bioconductor-enrichplot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-enrichplot
.. _`bioconductor-enrichplot/tags`: https://quay.io/repository/biocontainers/bioconductor-enrichplot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-enrichplot";
        var versions = ["1.12.0","1.10.2","1.10.0","1.8.1","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-enrichplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-enrichplot/README.html