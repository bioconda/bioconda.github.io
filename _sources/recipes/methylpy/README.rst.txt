:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'methylpy'
.. highlight: bash

methylpy
========

.. conda:recipe:: methylpy
   :replaces_section_title:

   Bisulfite sequencing data processing and differential methylation analysis

   :homepage: https://github.com/yupenghe/methylpy
   :license: APACHE / Apache 2.0
   :recipe: /`methylpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylpy/meta.yaml>`_
   :links: doi: :doi:`10.1038/nature14465`

   


.. conda:package:: methylpy

   |downloads_methylpy| |docker_methylpy|

   :versions: 1.4.3-1, 1.4.3-0, 1.4.2-0, 1.4.1-0
   
   :depends bowtie: 
   :depends bowtie2: 
   :depends cutadapt: >=1.9
   :depends gsl: >=2.6,<2.7.0a0
   :depends libcxx: >=9.0.1
   :depends minimap2: 
   :depends numpy: >=1.6.1
   :depends openjdk: 
   :depends picard: >=2.10.8
   :depends pysam: >=0.5.3
   :depends python: >=3.6,<3.7.0a0
   :depends python_abi: 3.6.* *_cp36m
   :depends samtools: >=1.3
   :depends scipy: >=0.10.0
   :depends ucsc-wigtobigwig: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install methylpy

   and update with::

      conda update methylpy

   or use the docker container::

      docker pull quay.io/biocontainers/methylpy:<tag>

   (see `methylpy/tags`_ for valid values for ``<tag>``)


.. |downloads_methylpy| image:: https://img.shields.io/conda/dn/bioconda/methylpy.svg?style=flat
   :target: https://anaconda.org/bioconda/methylpy
   :alt:   (downloads)
.. |docker_methylpy| image:: https://quay.io/repository/biocontainers/methylpy/status
   :target: https://quay.io/repository/biocontainers/methylpy
.. _`methylpy/tags`: https://quay.io/repository/biocontainers/methylpy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methylpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methylpy/README.html