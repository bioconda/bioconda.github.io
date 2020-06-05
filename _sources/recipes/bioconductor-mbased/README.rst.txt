:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mbased'
.. highlight: bash

bioconductor-mbased
===================

.. conda:recipe:: bioconductor-mbased
   :replaces_section_title:
   :noindex:

   Package containing functions for ASE analysis using Meta\-analysis Based Allele\-Specific Expression Detection

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/MBASED.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mbased <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbased>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbased/meta.yaml>`_
   :links: biotools: :biotools:`mbased`, doi: :doi:`10.1186/s13059-014-0405-3`

   The package implements MBASED algorithm for detecting allele\-specific gene expression from RNA count data\, where allele counts at individual loci \(SNVs\) are integrated into a gene\-specific measure of ASE\, and utilizes simulations to appropriately assess the statistical significance of observed ASE.


.. conda:package:: bioconductor-mbased

   |downloads_bioconductor-mbased| |docker_bioconductor-mbased|

   :versions:
      
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.34.0,<0.35.0``
   :depends bioconductor-biocparallel: ``>=1.22.0,<1.23.0``
   :depends bioconductor-genomicranges: ``>=1.40.0,<1.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.18.0,<1.19.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-runit: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mbased

   and update with::

      conda update bioconductor-mbased

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mbased:<tag>

   (see `bioconductor-mbased/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mbased| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mbased.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mbased
   :alt:   (downloads)
.. |docker_bioconductor-mbased| image:: https://quay.io/repository/biocontainers/bioconductor-mbased/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mbased
.. _`bioconductor-mbased/tags`: https://quay.io/repository/biocontainers/bioconductor-mbased?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mbased/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mbased/README.html