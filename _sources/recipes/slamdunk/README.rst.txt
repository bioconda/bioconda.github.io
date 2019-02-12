:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slamdunk'
.. highlight: bash

slamdunk
========

.. conda:recipe:: slamdunk
   :replaces_section_title:

   SlamDunk is a novel\, fully automated software tool for automated\, robust\, scalable and reproducible SLAMseq data analysis.

   :homepage: http://t-neumann.github.io/slamdunk
   :license: GNU Affero General Public License v3 (AGPLv3)
   :recipe: /`slamdunk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slamdunk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slamdunk/meta.yaml>`_

   


.. conda:package:: slamdunk

   |downloads_slamdunk| |docker_slamdunk|

   :versions: 0.3.3-0, 0.3.2-1, 0.3.2-0
   
   :depends biopython: >=1.63
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends curl: >=7.59.0,<8.0a0
   
   :depends cython: >=0.20.1
   
   :depends intervaltree: >=2.1.0
   
   :depends joblib: >=0.9.4
   
   :depends libdeflate: >=1.0,<1.1.0a0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends ncurses: >=6.1,<6.2.0a0
   
   :depends openjdk: 
   
   :depends pandas: >=0.13.1
   
   :depends pybedtools: >=0.6.4
   
   :depends pysam: >=0.8.3
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends r-base: >=3.4.1,<3.4.2.0a0
   
   :depends r-tidyverse: 
   
   :depends xz: >=5.2.4,<5.3.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install slamdunk

   and update with::

      conda update slamdunk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/slamdunk:<tag>

   (see `slamdunk/tags`_ for valid values for ``<tag>``)


.. |downloads_slamdunk| image:: https://img.shields.io/conda/dn/bioconda/slamdunk.svg?style=flat
   :alt:   (downloads)
.. |docker_slamdunk| image:: https://quay.io/repository/biocontainers/slamdunk/status
   :target: https://quay.io/repository/biocontainers/slamdunk
.. _`slamdunk/tags`: https://quay.io/repository/biocontainers/slamdunk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slamdunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slamdunk/README.html