:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtn'
.. highlight: bash

bioconductor-rtn
================

.. conda:recipe:: bioconductor-rtn
   :replaces_section_title:

   This package provides classes and methods for transcriptional network inference and analysis. Modulators of transcription factor activity are assessed by conditional mutual information\, and master regulators are mapped to phenotypes using different strategies\, e.g.\, gene set enrichment\, shadow and synergy analyses. Additionally\, master regulators can be linked to genetic markers using eQTL\/VSE analysis\, taking advantage of the haplotype block structure mapped to the human genome in order to explore risk\-associated SNPs identified in GWAS studies.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RTN.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rtn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtn/meta.yaml>`_

   


.. conda:package:: bioconductor-rtn

   |downloads_bioconductor-rtn| |docker_bioconductor-rtn|

   :versions: 2.6.3-0, 2.6.0-0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   :depends bioconductor-minet: >=3.40.0,<3.41.0
   :depends bioconductor-reder: >=1.30.0,<1.31.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends bioconductor-summarizedexperiment: 
   :depends bioconductor-viper: >=1.16.0,<1.17.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-data.table: 
   :depends r-igraph: 
   :depends r-mixtools: 
   :depends r-snow: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rtn

   and update with::

      conda update bioconductor-rtn

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtn:<tag>

   (see `bioconductor-rtn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtn
   :alt:   (downloads)
.. |docker_bioconductor-rtn| image:: https://quay.io/repository/biocontainers/bioconductor-rtn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtn
.. _`bioconductor-rtn/tags`: https://quay.io/repository/biocontainers/bioconductor-rtn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtn/README.html