:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-breakpointr'
.. highlight: bash

bioconductor-breakpointr
========================

.. conda:recipe:: bioconductor-breakpointr
   :replaces_section_title:

   This package implements functions for finding breakpoints\, plotting and export of Strand\-seq data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/breakpointR.html
   :license: file LICENSE
   :recipe: /`bioconductor-breakpointr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breakpointr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breakpointr/meta.yaml>`_

   


.. conda:package:: bioconductor-breakpointr

   |downloads_bioconductor-breakpointr| |docker_bioconductor-breakpointr|

   :versions: 1.0.0-1, 1.0.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-breakpointrdata: >=1.0.0,<1.1.0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-cowplot: 
   
   :depends r-doparallel: 
   
   :depends r-foreach: 
   
   :depends r-ggplot2: 
   
   :depends r-gtools: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-breakpointr

   and update with::

      conda update bioconductor-breakpointr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-breakpointr:<tag>

   (see `bioconductor-breakpointr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-breakpointr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-breakpointr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-breakpointr| image:: https://quay.io/repository/biocontainers/bioconductor-breakpointr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-breakpointr
.. _`bioconductor-breakpointr/tags`: https://quay.io/repository/biocontainers/bioconductor-breakpointr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-breakpointr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-breakpointr/README.html