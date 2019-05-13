:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ampliqueso'
.. highlight: bash

bioconductor-ampliqueso
=======================

.. conda:recipe:: bioconductor-ampliqueso
   :replaces_section_title:

   The package provides tools and reports for the analysis of amplicon sequencing panels\, such as AmpliSeq

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ampliQueso.html
   :license: GPL-2
   :recipe: /`bioconductor-ampliqueso <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ampliqueso>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ampliqueso/meta.yaml>`_

   


.. conda:package:: bioconductor-ampliqueso

   |downloads_bioconductor-ampliqueso| |docker_bioconductor-ampliqueso|

   :versions: 1.20.0-0
   
   :depends bioconductor-deseq: >=1.34.0,<1.35.0
   :depends bioconductor-edger: >=3.24.0,<3.25.0
   :depends bioconductor-genefilter: >=1.64.0,<1.65.0
   :depends bioconductor-rnaseqmap: >=2.40.0,<2.41.0
   :depends bioconductor-variantannotation: >=1.28.0,<1.29.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-knitr: 
   :depends r-rgl: 
   :depends r-samr: 
   :depends r-statmod: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ampliqueso

   and update with::

      conda update bioconductor-ampliqueso

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ampliqueso:<tag>

   (see `bioconductor-ampliqueso/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ampliqueso| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ampliqueso.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ampliqueso
   :alt:   (downloads)
.. |docker_bioconductor-ampliqueso| image:: https://quay.io/repository/biocontainers/bioconductor-ampliqueso/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ampliqueso
.. _`bioconductor-ampliqueso/tags`: https://quay.io/repository/biocontainers/bioconductor-ampliqueso?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ampliqueso/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ampliqueso/README.html