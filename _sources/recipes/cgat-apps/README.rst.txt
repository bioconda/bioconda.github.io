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

   :versions: 0.5.3-0
   
   :depends alignlib-lite: 
   :depends bedtools: 
   :depends biopython: 
   :depends cgatcore: 
   :depends coreutils: 
   :depends cython: 
   :depends future: 
   :depends grep: 
   :depends libgcc-ng: >=4.9
   :depends libpng: >=1.6.34,<1.7.0a0
   :depends libstdcxx-ng: >=4.9
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pysam: 
   :depends python: >=3.5,<3.6.0a0
   :depends python-lzo: 
   :depends pyyaml: 
   :depends quicksect: 
   :depends scipy: 
   :depends setuptools: 
   :depends six: 
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