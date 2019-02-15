:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gembs'
.. highlight: bash

gembs
=====

.. conda:recipe:: gembs
   :replaces_section_title:

   gemBS is a bioinformatics pipeline designed for high throughput analysis of DNA methylation from Whole Genome Bisulfite Sequencing data \(WGBS\).

   :homepage: https://github.com/heathsc/gemBS
   :license: GPL-3.0
   :recipe: /`gembs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gembs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gembs/meta.yaml>`_
   :links: doi: :doi:`10.1101/201988`

   


.. conda:package:: gembs

   |downloads_gembs| |docker_gembs|

   :versions: 3.2.0-3, 3.2.0-2, 3.2.0-1, 3.2.0-0
   
   :depends bs_call: 2.02.*
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends curl: >=7.59.0,<8.0a0
   
   :depends gem3-mapper: 3.6.1.*
   
   :depends htslib: >=1.8,<1.9.0a0
   
   :depends matplotlib: 
   
   :depends multiprocess: 
   
   :depends pigz: 
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends samtools: 1.8.*
   
   :depends ucsc-bedtobigbed: 
   
   :depends ucsc-wigtobigwig: 
   
   :depends wget: 
   
   :depends xz: >=5.2.4,<5.3.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gembs

   and update with::

      conda update gembs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gembs:<tag>

   (see `gembs/tags`_ for valid values for ``<tag>``)


.. |downloads_gembs| image:: https://img.shields.io/conda/dn/bioconda/gembs.svg?style=flat
   :alt:   (downloads)
.. |docker_gembs| image:: https://quay.io/repository/biocontainers/gembs/status
   :target: https://quay.io/repository/biocontainers/gembs
.. _`gembs/tags`: https://quay.io/repository/biocontainers/gembs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gembs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gembs/README.html