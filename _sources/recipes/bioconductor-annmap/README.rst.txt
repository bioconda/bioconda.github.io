:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-annmap'
.. highlight: bash

bioconductor-annmap
===================

.. conda:recipe:: bioconductor-annmap
   :replaces_section_title:

   annmap provides annotation mappings for Affymetrix exon arrays and coordinate based queries to support deep sequencing data analysis. Database access is hidden behind the API which provides a set of functions such as genesInRange\(\)\, geneToExon\(\)\, exonDetails\(\)\, etc. Functions to plot gene architecture and BAM file data are also provided. Underlying data are from Ensembl.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/annmap.html
   :license: GPL-2
   :recipe: /`bioconductor-annmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annmap/meta.yaml>`_
   :links: biotools: :biotools:`annmap`, doi: :doi:`10.1093/nar/gkm779`

   


.. conda:package:: bioconductor-annmap

   |downloads_bioconductor-annmap| |docker_bioconductor-annmap|

   :versions: 1.26.0-1, 1.24.0-0, 1.22.0-0, 1.20.0-0, 1.18.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-genefilter: >=1.66.0,<1.67.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-rsamtools: >=2.0.0,<2.1.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dbi: 
   :depends r-digest: 
   :depends r-lattice: 
   :depends r-rmysql: >=0.6-0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-annmap

   and update with::

      conda update bioconductor-annmap

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-annmap:<tag>

   (see `bioconductor-annmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-annmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-annmap
   :alt:   (downloads)
.. |docker_bioconductor-annmap| image:: https://quay.io/repository/biocontainers/bioconductor-annmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annmap
.. _`bioconductor-annmap/tags`: https://quay.io/repository/biocontainers/bioconductor-annmap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annmap/README.html