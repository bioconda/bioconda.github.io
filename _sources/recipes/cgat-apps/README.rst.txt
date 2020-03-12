:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgat-apps'
.. highlight: bash

cgat-apps
=========

.. conda:recipe:: cgat-apps
   :replaces_section_title:

   Computational Genomics Analysis Toolkit

   :homepage: https://www.cgat.org/downloads/public/cgat/documentation
   :license: MIT
   :recipe: /`cgat-apps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-apps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgat-apps/meta.yaml>`_

   


.. conda:package:: cgat-apps

   |downloads_cgat-apps| |docker_cgat-apps|

   :versions: 0.6.0-1, 0.6.0-0, 0.5.6-0, 0.5.5-0, 0.5.4-0, 0.5.3-0
   
   :depends alignlib-lite: 
   :depends bedtools: 
   :depends biopython: 
   :depends cgatcore: >=0.6.5
   :depends coreutils: 
   :depends future: 
   :depends grep: 
   :depends libgcc-ng: >=7.3.0
   :depends libpng: >=1.6.37,<1.7.0a0
   :depends libstdcxx-ng: >=7.3.0
   :depends matplotlib-base: 
   :depends numpy: >=1.14.6,<2.0a0
   :depends pandas: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pysam: <=0.15.2
   :depends python: >=3.6,<3.7.0a0
   :depends python-lzo: 
   :depends python_abi: 3.6.* *_cp36m
   :depends pyyaml: 
   :depends quicksect: 
   :depends scipy: 
   :depends six: 
   :depends sortedcontainers: 
   :depends ucsc-bedgraphtobigwig: 
   :depends ucsc-bedtobigbed: 
   :depends ucsc-wigtobigwig: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cgat-apps

   and update with::

      conda update cgat-apps

   or use the docker container::

      docker pull quay.io/biocontainers/cgat-apps:<tag>

   (see `cgat-apps/tags`_ for valid values for ``<tag>``)


.. |downloads_cgat-apps| image:: https://img.shields.io/conda/dn/bioconda/cgat-apps.svg?style=flat
   :target: https://anaconda.org/bioconda/cgat-apps
   :alt:   (downloads)
.. |docker_cgat-apps| image:: https://quay.io/repository/biocontainers/cgat-apps/status
   :target: https://quay.io/repository/biocontainers/cgat-apps
.. _`cgat-apps/tags`: https://quay.io/repository/biocontainers/cgat-apps?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgat-apps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgat-apps/README.html