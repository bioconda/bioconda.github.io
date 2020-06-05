:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-puma'
.. highlight: bash

bioconductor-puma
=================

.. conda:recipe:: bioconductor-puma
   :replaces_section_title:
   :noindex:

   Propagating Uncertainty in Microarray Analysis\(including Affymetrix tranditional 3\' arrays and exon arrays and Human Transcriptome Array 2.0\)

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/puma.html
   :license: LGPL
   :recipe: /`bioconductor-puma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-puma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-puma/meta.yaml>`_
   :links: biotools: :biotools:`puma`

   Most analyses of Affymetrix GeneChip data \(including tranditional 3\' arrays and exon arrays and Human Transcriptome Array 2.0\) are based on point estimates of expression levels and ignore the uncertainty of such estimates. By propagating uncertainty to downstream analyses we can improve results from microarray analyses. For the first time\, the puma package makes a suite of uncertainty propagation methods available to a general audience. In additon to calculte gene expression from Affymetrix 3\' arrays\, puma also provides methods to process exon arrays and produces gene and isoform expression for alternative splicing study. puma also offers improvements in terms of scope and speed of execution over previously available uncertainty propagation methods. Included are summarisation\, differential expression detection\, clustering and PCA methods\, together with useful plotting functions.


.. conda:package:: bioconductor-puma

   |downloads_bioconductor-puma| |docker_bioconductor-puma|

   :versions:
      
      

      ``3.30.0-0``,  ``3.28.0-0``,  ``3.26.0-1``,  ``3.24.0-0``,  ``3.22.0-0``,  ``3.20.0-0``

      

   
   :depends bioconductor-affy: ``>=1.66.0,<1.67.0``
   :depends bioconductor-affyio: ``>=1.58.0,<1.59.0``
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-oligo: ``>=1.52.0,<1.53.0``
   :depends bioconductor-oligoclasses: ``>=1.50.0,<1.51.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-mclust: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-puma

   and update with::

      conda update bioconductor-puma

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-puma:<tag>

   (see `bioconductor-puma/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-puma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-puma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-puma
   :alt:   (downloads)
.. |docker_bioconductor-puma| image:: https://quay.io/repository/biocontainers/bioconductor-puma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-puma
.. _`bioconductor-puma/tags`: https://quay.io/repository/biocontainers/bioconductor-puma?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-puma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-puma/README.html