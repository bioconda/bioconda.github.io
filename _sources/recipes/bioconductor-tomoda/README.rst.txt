:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tomoda'
.. highlight: bash

bioconductor-tomoda
===================

.. conda:recipe:: bioconductor-tomoda
   :replaces_section_title:
   :noindex:

   Tomo\-seq data analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/tomoda.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tomoda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tomoda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tomoda/meta.yaml>`_

   This package provides many easy\-to\-use methods to analyze and visualize tomo\-seq data. The tomo\-seq technique is based on cryosectioning of tissue and performing RNA\-seq on consecutive sections. \(Reference\: Kruse F\, Junker JP\, van Oudenaarden A\, Bakkers J. Tomo\-seq\: A method to obtain genome\-wide expression data with spatial resolution. Methods Cell Biol. 2016\;135\:299\-307. doi\:10.1016\/bs.mcb.2016.01.006\) The main purpose of the package is to find zones with similar transcriptional profiles and spatially expressed genes in a tomo\-seq sample. Several visulization functions are available to create easy\-to\-modify plots.


.. conda:package:: bioconductor-tomoda

   |downloads_bioconductor-tomoda| |docker_bioconductor-tomoda|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rtsne: 
   :depends r-umap: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tomoda

   and update with::

      conda update bioconductor-tomoda

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tomoda:<tag>

   (see `bioconductor-tomoda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tomoda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tomoda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tomoda
   :alt:   (downloads)
.. |docker_bioconductor-tomoda| image:: https://quay.io/repository/biocontainers/bioconductor-tomoda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tomoda
.. _`bioconductor-tomoda/tags`: https://quay.io/repository/biocontainers/bioconductor-tomoda?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tomoda";
        var versions = ["1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tomoda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tomoda/README.html