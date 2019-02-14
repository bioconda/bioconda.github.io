:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rsem'
.. highlight: bash

rsem
====

.. conda:recipe:: rsem
   :replaces_section_title:

   RSEM is a software package for estimating gene and isoform expression levels from RNA\-Seq data. The RSEM package provides an user\-friendly interface\, supports threads for parallel computation of the EM algorithm\, single\-end and paired\-end read data\, quality scores\, variable\-length reads and RSPD estimation. In addition\, it provides posterior mean and 95\% credibility interval estimates for expression levels. For visualization\, It can generate BAM and Wiggle files in both transcript\-coordinate and genomic\-coordinate. Genomic\-coordinate files can be visualized by both UCSC Genome browser and Broad Institute\'s Integrative Genomics Viewer \(IGV\). Transcript\-coordinate files can be visualized by IGV. RSEM also has its own scripts to generate transcript read depth plots in pdf format. The unique feature of RSEM is\, the read depth plots can be stacked\, with read depth contributed to unique reads shown in black and contributed to multi\-reads shown in red. In addition\, models learned from data can also be visualized. Last but not least\, RSEM contains a simulator.

   :homepage: https://deweylab.github.io/RSEM/
   :license: GPLv3
   :recipe: /`rsem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsem/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-12-323`, biotools: :biotools:`rsem`

   


.. conda:package:: rsem

   |downloads_rsem| |docker_rsem|

   :versions: 1.3.1-0, 1.3.0-4, 1.3.0-3, 1.3.0-2, 1.3.0-1, 1.3.0-0, 1.2.28-2, 1.2.28-0, 1.2.22-0, 1.2.21-5, 1.2.21-4, 1.2.21-3
   
   :depends bioconductor-biobase: 
   
   :depends bioconductor-ebseq: 
   
   :depends boost: >=1.67.0,<1.67.1.0a0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-module-build: 
   
   :depends r-base: >=3.4.1,<3.4.2.0a0
   
   :depends samtools: 1.3.*
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rsem

   and update with::

      conda update rsem

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rsem:<tag>

   (see `rsem/tags`_ for valid values for ``<tag>``)


.. |downloads_rsem| image:: https://img.shields.io/conda/dn/bioconda/rsem.svg?style=flat
   :alt:   (downloads)
.. |docker_rsem| image:: https://quay.io/repository/biocontainers/rsem/status
   :target: https://quay.io/repository/biocontainers/rsem
.. _`rsem/tags`: https://quay.io/repository/biocontainers/rsem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rsem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rsem/README.html