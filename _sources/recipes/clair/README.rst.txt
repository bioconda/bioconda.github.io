:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clair'
.. highlight: bash

clair
=====

.. conda:recipe:: clair
   :replaces_section_title:

   Single\-molecule sequencing technologies have emerged in recent years and revolutionized structural variant calling\, complex genome assembly\, and epigenetic mark detection. However\, the lack of a highly accurate small variant caller has limited the new technologies from being more widely used. In this study\, we present Clair\, the successor to Clairvoyante\, a program for fast and accurate germline small variant calling\, using single molecule sequencing data. For ONT data\, Clair achieves the best precision\, recall and speed as compared to several competing programs\, including Clairvoyante\, Longshot and Medaka. Through studying the missed variants and benchmarking intentionally overfitted models\, we found that Clair may be approaching the limit of possible accuracy for germline small variant calling using pileup data and deep neural networks.

   :homepage: https://github.com/HKU-BAL/Clair
   :license: AGPLv3
   :recipe: /`clair <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clair/meta.yaml>`_

   


.. conda:package:: clair

   |downloads_clair| |docker_clair|

   :versions: 2.0.6-1, 2.0.6-0, 2.0.5-1, 2.0.5-0, 2.0.4-0, 2.0.3-0, 2.0.2-0, 2.0.1-0, 2.0.0-0
   
   :depends bcftools: 
   :depends intervaltree: 3.0.2
   :depends matplotlib: 
   :depends numpy: >=1.17,<1.18
   :depends parallel: 
   :depends pigz: 
   :depends pip: 
   :depends pypy3.6: 7.2.0
   :depends pysam: 0.15.3
   :depends python: >=3,<3.8
   :depends python-blosc: 1.8.1
   :depends samtools: 
   :depends tensorflow: >=1.13,<1.14
   :depends vcflib: 
   :depends zstd: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clair

   and update with::

      conda update clair

   or use the docker container::

      docker pull quay.io/biocontainers/clair:<tag>

   (see `clair/tags`_ for valid values for ``<tag>``)


.. |downloads_clair| image:: https://img.shields.io/conda/dn/bioconda/clair.svg?style=flat
   :target: https://anaconda.org/bioconda/clair
   :alt:   (downloads)
.. |docker_clair| image:: https://quay.io/repository/biocontainers/clair/status
   :target: https://quay.io/repository/biocontainers/clair
.. _`clair/tags`: https://quay.io/repository/biocontainers/clair?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clair/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clair/README.html