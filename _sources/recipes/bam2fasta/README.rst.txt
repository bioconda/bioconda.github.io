:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bam2fasta'
.. highlight: bash

bam2fasta
=========

.. conda:recipe:: bam2fasta
   :replaces_section_title:
   :noindex:

   bam2fasta\: cli tool to convert bam to fastas

   :homepage: https://github.com/czbiohub/bam2fasta
   :license: MIT / MIT
   :recipe: /`bam2fasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam2fasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam2fasta/meta.yaml>`_
   :links: biotools: :biotools:`bam2fasta`

   


.. conda:package:: bam2fasta

   |downloads_bam2fasta| |docker_bam2fasta|

   :versions:
      
      

      ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends numpy: 
   :depends pandas: ``>=0.24.1``
   :depends pathos: ``>=0.2.5``
   :depends pysam: ``>=0.15.3``
   :depends python: 
   :depends screed: ``>=0.9``
   :depends tqdm: ``>=4.36.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bam2fasta

   and update with::

      conda update bam2fasta

   or use the docker container::

      docker pull quay.io/biocontainers/bam2fasta:<tag>

   (see `bam2fasta/tags`_ for valid values for ``<tag>``)


.. |downloads_bam2fasta| image:: https://img.shields.io/conda/dn/bioconda/bam2fasta.svg?style=flat
   :target: https://anaconda.org/bioconda/bam2fasta
   :alt:   (downloads)
.. |docker_bam2fasta| image:: https://quay.io/repository/biocontainers/bam2fasta/status
   :target: https://quay.io/repository/biocontainers/bam2fasta
.. _`bam2fasta/tags`: https://quay.io/repository/biocontainers/bam2fasta?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bam2fasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bam2fasta/README.html