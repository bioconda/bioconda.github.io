:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-proteoqc'
.. highlight: bash

bioconductor-proteoqc
=====================

.. conda:recipe:: bioconductor-proteoqc
   :replaces_section_title:

   This package creates an HTML format QC report for MS\/MS\-based proteomics data. The report is intended to allow the user to quickly assess the quality of proteomics data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/proteoQC.html
   :license: LGPL-2
   :recipe: /`bioconductor-proteoqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteoqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteoqc/meta.yaml>`_

   


.. conda:package:: bioconductor-proteoqc

   |downloads_bioconductor-proteoqc| |docker_bioconductor-proteoqc|

   :versions: 1.18.1-0
   
   :depends bioconductor-msnbase: >=2.8.0,<2.9.0
   
   :depends bioconductor-rpx: >=1.18.0,<1.19.0
   
   :depends bioconductor-rtandem: >=1.22.0,<1.23.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-dplyr: 
   
   :depends r-ggplot2: 
   
   :depends r-nozzle.r1: 
   
   :depends r-plotly: 
   
   :depends r-plyr: 
   
   :depends r-reshape2: 
   
   :depends r-rmarkdown: 
   
   :depends r-seqinr: 
   
   :depends r-tidyr: 
   
   :depends r-venndiagram: 
   
   :depends r-xml: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-proteoqc

   and update with::

      conda update bioconductor-proteoqc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-proteoqc:<tag>

   (see `bioconductor-proteoqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-proteoqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-proteoqc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-proteoqc| image:: https://quay.io/repository/biocontainers/bioconductor-proteoqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-proteoqc
.. _`bioconductor-proteoqc/tags`: https://quay.io/repository/biocontainers/bioconductor-proteoqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-proteoqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-proteoqc/README.html