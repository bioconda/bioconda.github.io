:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'guidescan'
.. highlight: bash

guidescan
=========

.. conda:recipe:: guidescan
   :replaces_section_title:

   Tools to create and interface genome\-wide CRISPR guideRNA databases

   :homepage: https://bitbucket.org/arp2012/guidescan_public
   :license: Unknown
   :recipe: /`guidescan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guidescan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guidescan/meta.yaml>`_

   


.. conda:package:: guidescan

   |downloads_guidescan| |docker_guidescan|

   :versions: 1.2-1, 1.2-0, 1.0-2, 1.0-1, 1.0-0
   
   :depends biopython: >=1.66
   
   :depends bx-python: 0.7.3
   
   :depends coreutils: 
   
   :depends numpy: 
   
   :depends openblas: >=0.2.20,<0.2.21.0a0
   
   :depends pandas: 
   
   :depends psutil: 
   
   :depends pyfaidx: 0.4.7.1
   
   :depends pysam: 0.8.3
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends python-dateutil: >=2.5.0
   
   :depends rename: 
   
   :depends samtools: 1.3.1
   
   :depends scikit-learn: >=0.16.1
   
   :depends xlwt: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install guidescan

   and update with::

      conda update guidescan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/guidescan:<tag>

   (see `guidescan/tags`_ for valid values for ``<tag>``)


.. |downloads_guidescan| image:: https://img.shields.io/conda/dn/bioconda/guidescan.svg?style=flat
   :alt:   (downloads)
.. |docker_guidescan| image:: https://quay.io/repository/biocontainers/guidescan/status
   :target: https://quay.io/repository/biocontainers/guidescan
.. _`guidescan/tags`: https://quay.io/repository/biocontainers/guidescan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/guidescan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/guidescan/README.html