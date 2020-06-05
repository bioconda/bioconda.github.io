:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqc'
.. highlight: bash

bioconductor-seqc
=================

.. conda:recipe:: bioconductor-seqc
   :replaces_section_title:
   :noindex:

   RNA\-seq data generated from SEQC \(MAQC\-III\) study

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/seqc.html
   :license: GPL-3
   :recipe: /`bioconductor-seqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqc/meta.yaml>`_

   The SEQC\/MAQC\-III Consortium has produced benchmark RNA\-seq data for the assessment of RNA sequencing technologies and data analysis methods \(Nat Biotechnol\, 2014\). Billions of sequence reads have been generated from ten different sequencing sites. This package contains the summarized read count data for \~2000 sequencing libraries. It also includes all the exon\-exon junctions discovered from the study. TaqMan RT\-PCR data for \~1000 genes and ERCC spike\-in sequence data are included in this package as well.


.. conda:package:: bioconductor-seqc

   |downloads_bioconductor-seqc| |docker_bioconductor-seqc|

   :versions:
      
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends curl: ``>=7.69.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqc

   and update with::

      conda update bioconductor-seqc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqc:<tag>

   (see `bioconductor-seqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqc
   :alt:   (downloads)
.. |docker_bioconductor-seqc| image:: https://quay.io/repository/biocontainers/bioconductor-seqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqc
.. _`bioconductor-seqc/tags`: https://quay.io/repository/biocontainers/bioconductor-seqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqc/README.html