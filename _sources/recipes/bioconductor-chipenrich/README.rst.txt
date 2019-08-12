:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chipenrich'
.. highlight: bash

bioconductor-chipenrich
=======================

.. conda:recipe:: bioconductor-chipenrich
   :replaces_section_title:

   ChIP\-Enrich performs gene set enrichment testing using peaks called from a ChIP\-seq experiment. The method empirically corrects for confounding factors such as the length of genes\, and the mappability of the sequence surrounding genes.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/chipenrich.html
   :license: GPL-3
   :recipe: /`bioconductor-chipenrich <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipenrich>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipenrich/meta.yaml>`_

   


.. conda:package:: bioconductor-chipenrich

   |downloads_bioconductor-chipenrich| |docker_bioconductor-chipenrich|

   :versions: 2.8.0-1, 2.6.0-0
   
   :depends bioconductor-annotationdbi: >=1.46.0,<1.47.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-chipenrich.data: >=2.8.0,<2.9.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-org.dm.eg.db: >=3.8.0,<3.9.0
   :depends bioconductor-org.dr.eg.db: >=3.8.0,<3.9.0
   :depends bioconductor-org.hs.eg.db: >=3.8.0,<3.9.0
   :depends bioconductor-org.mm.eg.db: >=3.8.0,<3.9.0
   :depends bioconductor-org.rn.eg.db: >=3.8.0,<3.9.0
   :depends bioconductor-rtracklayer: >=1.44.0,<1.45.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-mgcv: 
   :depends r-plyr: 
   :depends r-rms: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chipenrich

   and update with::

      conda update bioconductor-chipenrich

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chipenrich:<tag>

   (see `bioconductor-chipenrich/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chipenrich| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipenrich.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chipenrich
   :alt:   (downloads)
.. |docker_bioconductor-chipenrich| image:: https://quay.io/repository/biocontainers/bioconductor-chipenrich/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipenrich
.. _`bioconductor-chipenrich/tags`: https://quay.io/repository/biocontainers/bioconductor-chipenrich?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipenrich/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipenrich/README.html