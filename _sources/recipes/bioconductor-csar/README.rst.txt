:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-csar'
.. highlight: bash

bioconductor-csar
=================

.. conda:recipe:: bioconductor-csar
   :replaces_section_title:

   Statistical tools for ChIP\-seq data analysis. The package includes the statistical method described in Kaufmann et al. \(2009\) PLoS Biology\: 7\(4\)\:e1000090. Briefly\, Taking the average DNA fragment size subjected to sequencing into account\, the software calculates genomic single\-nucleotide read\-enrichment values. After normalization\, sample and control are compared using a test based on the Poisson distribution. Test statistic thresholds to control the false discovery rate are obtained through random permutation.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CSAR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-csar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-csar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-csar/meta.yaml>`_

   


.. conda:package:: bioconductor-csar

   |downloads_bioconductor-csar| |docker_bioconductor-csar|

   :versions: 1.34.0-1, 1.34.0-0
   
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-csar

   and update with::

      conda update bioconductor-csar

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-csar:<tag>

   (see `bioconductor-csar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-csar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-csar.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-csar| image:: https://quay.io/repository/biocontainers/bioconductor-csar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-csar
.. _`bioconductor-csar/tags`: https://quay.io/repository/biocontainers/bioconductor-csar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-csar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-csar/README.html