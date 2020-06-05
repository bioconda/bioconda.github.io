:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snpsplit'
.. highlight: bash

snpsplit
========

.. conda:recipe:: snpsplit
   :replaces_section_title:
   :noindex:

   SNPsplit is an allele\-specific alignment sorter which is designed to read in alignment files in SAM\/BAM format and determine the allelic origin of reads that cover known SNP positions.

   :homepage: https://www.bioinformatics.babraham.ac.uk/projects/SNPsplit/
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`snpsplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpsplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpsplit/meta.yaml>`_
   :links: doi: :doi:`10.12688/f1000research.9037.2`

   


.. conda:package:: snpsplit

   |downloads_snpsplit| |docker_snpsplit|

   :versions:
      
      

      ``0.3.4-2``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-1``,  ``0.3.3-0``

      

   
   :depends perl: 
   :depends samtools: ``>=1.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snpsplit

   and update with::

      conda update snpsplit

   or use the docker container::

      docker pull quay.io/biocontainers/snpsplit:<tag>

   (see `snpsplit/tags`_ for valid values for ``<tag>``)


.. |downloads_snpsplit| image:: https://img.shields.io/conda/dn/bioconda/snpsplit.svg?style=flat
   :target: https://anaconda.org/bioconda/snpsplit
   :alt:   (downloads)
.. |docker_snpsplit| image:: https://quay.io/repository/biocontainers/snpsplit/status
   :target: https://quay.io/repository/biocontainers/snpsplit
.. _`snpsplit/tags`: https://quay.io/repository/biocontainers/snpsplit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpsplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpsplit/README.html