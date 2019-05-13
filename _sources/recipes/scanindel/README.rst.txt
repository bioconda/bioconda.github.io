:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scanindel'
.. highlight: bash

scanindel
=========

.. conda:recipe:: scanindel
   :replaces_section_title:

   ScanIndel is a python program to detect indels \(insertions and deletions\) from NGS data by re\-align and de novo assemble soft clipped reads.

   :homepage: https://github.com/cauyrd/ScanIndel
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`scanindel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanindel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanindel/meta.yaml>`_

   


.. conda:package:: scanindel

   |downloads_scanindel| |docker_scanindel|

   :versions: 1.3-0
   
   :depends bedtools: ==2.17.0
   :depends biopython: ==1.64
   :depends blat: 
   :depends bwa: ==0.7.12
   :depends freebayes: ==0.9.21.7
   :depends numpy: 
   :depends pysam: ==0.7.7
   :depends python: 2.7*
   :depends pyvcf: ==0.6.7
   :depends samtools: <=1.0
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scanindel

   and update with::

      conda update scanindel

   or use the docker container::

      docker pull quay.io/biocontainers/scanindel:<tag>

   (see `scanindel/tags`_ for valid values for ``<tag>``)


.. |downloads_scanindel| image:: https://img.shields.io/conda/dn/bioconda/scanindel.svg?style=flat
   :target: https://anaconda.org/bioconda/scanindel
   :alt:   (downloads)
.. |docker_scanindel| image:: https://quay.io/repository/biocontainers/scanindel/status
   :target: https://quay.io/repository/biocontainers/scanindel
.. _`scanindel/tags`: https://quay.io/repository/biocontainers/scanindel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scanindel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scanindel/README.html