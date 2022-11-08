:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tadcompare'
.. highlight: bash

bioconductor-tadcompare
=======================

.. conda:recipe:: bioconductor-tadcompare
   :replaces_section_title:
   :noindex:

   TADCompare\: Identification and characterization of differential TADs

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/TADCompare.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tadcompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tadcompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tadcompare/meta.yaml>`_

   TADCompare is an R package designed to identify and characterize differential Topologically Associated Domains \(TADs\) between multiple Hi\-C contact matrices. It contains functions for finding differential TADs between two datasets\, finding differential TADs over time and identifying consensus TADs across multiple matrices. It takes all of the main types of HiC input and returns simple\, comprehensive\, easy to analyze results.


.. conda:package:: bioconductor-tadcompare

   |downloads_bioconductor-tadcompare| |docker_bioconductor-tadcompare|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-hiccompare: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-cluster: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-primme: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tadcompare

   and update with::

      conda update bioconductor-tadcompare

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tadcompare:<tag>

   (see `bioconductor-tadcompare/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tadcompare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tadcompare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tadcompare
   :alt:   (downloads)
.. |docker_bioconductor-tadcompare| image:: https://quay.io/repository/biocontainers/bioconductor-tadcompare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tadcompare
.. _`bioconductor-tadcompare/tags`: https://quay.io/repository/biocontainers/bioconductor-tadcompare?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tadcompare";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tadcompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tadcompare/README.html