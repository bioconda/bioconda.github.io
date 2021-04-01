:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylcc'
.. highlight: bash

bioconductor-methylcc
=====================

.. conda:recipe:: bioconductor-methylcc
   :replaces_section_title:
   :noindex:

   Estimate the cell composition of whole blood in DNA methylation samples

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/methylCC.html
   :license: CC BY 4.0
   :recipe: /`bioconductor-methylcc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylcc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylcc/meta.yaml>`_

   A tool to estimate the cell composition of DNA methylation whole blood sample measured on any platform technology \(microarray and sequencing\).


.. conda:package:: bioconductor-methylcc

   |downloads_bioconductor-methylcc| |docker_bioconductor-methylcc|

   :versions:
      
      

      ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-bsseq: ``>=1.26.0,<1.27.0``
   :depends bioconductor-bumphunter: ``>=1.32.0,<1.33.0``
   :depends bioconductor-flowsorted.blood.450k: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genefilter: ``>=1.72.0,<1.73.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylation450kmanifest: ``>=0.4.0,<0.5.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-minfi: ``>=1.36.0,<1.37.0``
   :depends bioconductor-plyranges: ``>=1.10.0,<1.11.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-quadprog: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methylcc

   and update with::

      conda update bioconductor-methylcc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylcc:<tag>

   (see `bioconductor-methylcc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylcc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylcc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylcc
   :alt:   (downloads)
.. |docker_bioconductor-methylcc| image:: https://quay.io/repository/biocontainers/bioconductor-methylcc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylcc
.. _`bioconductor-methylcc/tags`: https://quay.io/repository/biocontainers/bioconductor-methylcc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylcc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylcc/README.html