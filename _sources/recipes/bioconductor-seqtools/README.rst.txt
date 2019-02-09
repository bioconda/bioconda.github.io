.. title:: Package Recipe 'bioconductor-seqtools'
.. highlight: bash


bioconductor-seqtools
=====================

.. conda:recipe:: bioconductor-seqtools
   :replaces_section_title:

   Analyze read length\, phred scores and alphabet frequency and DNA k\-mers on uncompressed and compressed fastq files.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/seqTools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-seqtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqtools/meta.yaml>`_
   :links: biotools: :biotools:`seqtools`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-seqtools

   |downloads_bioconductor-seqtools| |docker_bioconductor-seqtools|

   :versions: 1.16.0, 1.14.0, 1.12.0, 1.10.0

   :depends: :conda:package:`bioconductor-zlibbioc` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-seqtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqtools

   and update with::

      conda update bioconductor-seqtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-seqtools


.. |required_by_bioconductor-seqtools| conda:required_by:: bioconductor-seqtools
.. |downloads_bioconductor-seqtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqtools.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-seqtools| image:: https://quay.io/repository/biocontainers/bioconductor-seqtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqtools/README.html

