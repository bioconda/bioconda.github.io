:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-precisiontrialdrawer'
.. highlight: bash

bioconductor-precisiontrialdrawer
=================================

.. conda:recipe:: bioconductor-precisiontrialdrawer
   :replaces_section_title:
   :noindex:

   A Tool to Analyze and Design NGS Based Custom Gene Panels

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/PrecisionTrialDrawer.html
   :license: GPL-3
   :recipe: /`bioconductor-precisiontrialdrawer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-precisiontrialdrawer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-precisiontrialdrawer/meta.yaml>`_

   A suite of methods to design umbrella and basket trials for precision oncology.


.. conda:package:: bioconductor-precisiontrialdrawer

   |downloads_bioconductor-precisiontrialdrawer| |docker_bioconductor-precisiontrialdrawer|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-biomart: ``>=2.48.0,<2.49.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-lowmacaannotation: ``>=0.99.0,<0.100.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-brglm: 
   :depends r-cgdsr: 
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-googlevis: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-stringr: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-precisiontrialdrawer

   and update with::

      conda update bioconductor-precisiontrialdrawer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-precisiontrialdrawer:<tag>

   (see `bioconductor-precisiontrialdrawer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-precisiontrialdrawer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-precisiontrialdrawer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-precisiontrialdrawer
   :alt:   (downloads)
.. |docker_bioconductor-precisiontrialdrawer| image:: https://quay.io/repository/biocontainers/bioconductor-precisiontrialdrawer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-precisiontrialdrawer
.. _`bioconductor-precisiontrialdrawer/tags`: https://quay.io/repository/biocontainers/bioconductor-precisiontrialdrawer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-precisiontrialdrawer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-precisiontrialdrawer/README.html