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

   :versions: 3.2.0

   :depends: :conda:package:`bs_call` 2.02.* :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`curl` >=7.59.0,<8.0a0 :conda:package:`gem3-mapper` 3.6.1.* :conda:package:`htslib` >=1.8,<1.9.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`matplotlib`  :conda:package:`multiprocess`  :conda:package:`pigz`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`samtools` 1.8.* :conda:package:`wget`  :conda:package:`xz` >=5.2.4,<5.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_gembs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gembs

   and update with::

      conda update gembs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gembs


.. |required_by_gembs| conda:required_by:: gembs
.. |downloads_gembs| image:: https://img.shields.io/conda/dn/bioconda/gembs.svg?style=flat
   :alt:   (downloads)
.. |docker_gembs| image:: https://quay.io/repository/biocontainers/gembs/status
   :target: https://quay.io/repository/biocontainers/gembs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gembs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gembs/README.html

