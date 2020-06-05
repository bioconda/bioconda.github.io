:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmseq'
.. highlight: bash

cmseq
=====

.. conda:recipe:: cmseq
   :replaces_section_title:
   :noindex:

   Set of utilities on sequences and BAM files

   :homepage: https://github.com/SegataLab/cmseq
   :license: MIT License
   :recipe: /`cmseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmseq/meta.yaml>`_

   


.. conda:package:: cmseq

   |downloads_cmseq| |docker_cmseq|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends bcbio-gff: 
   :depends biopython: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends samtools: ``>=1.0``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cmseq

   and update with::

      conda update cmseq

   or use the docker container::

      docker pull quay.io/biocontainers/cmseq:<tag>

   (see `cmseq/tags`_ for valid values for ``<tag>``)


.. |downloads_cmseq| image:: https://img.shields.io/conda/dn/bioconda/cmseq.svg?style=flat
   :target: https://anaconda.org/bioconda/cmseq
   :alt:   (downloads)
.. |docker_cmseq| image:: https://quay.io/repository/biocontainers/cmseq/status
   :target: https://quay.io/repository/biocontainers/cmseq
.. _`cmseq/tags`: https://quay.io/repository/biocontainers/cmseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmseq/README.html