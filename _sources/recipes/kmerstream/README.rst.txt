:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmerstream'
.. highlight: bash

kmerstream
==========

.. conda:recipe:: kmerstream
   :replaces_section_title:
   :noindex:

   Streaming algorithm for computing kmer statistics for massive genomics datasets

   :homepage: https://github.com/pmelsted/KmerStream
   :license: free software license
   :recipe: /`kmerstream <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmerstream>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmerstream/meta.yaml>`_
   :links: biotools: :biotools:`kmerstream`, doi: :doi:`10.1093/bioinformatics/btu713`

   


.. conda:package:: kmerstream

   |downloads_kmerstream| |docker_kmerstream|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends python: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kmerstream

   and update with::

      conda update kmerstream

   or use the docker container::

      docker pull quay.io/biocontainers/kmerstream:<tag>

   (see `kmerstream/tags`_ for valid values for ``<tag>``)


.. |downloads_kmerstream| image:: https://img.shields.io/conda/dn/bioconda/kmerstream.svg?style=flat
   :target: https://anaconda.org/bioconda/kmerstream
   :alt:   (downloads)
.. |docker_kmerstream| image:: https://quay.io/repository/biocontainers/kmerstream/status
   :target: https://quay.io/repository/biocontainers/kmerstream
.. _`kmerstream/tags`: https://quay.io/repository/biocontainers/kmerstream?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmerstream/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmerstream/README.html