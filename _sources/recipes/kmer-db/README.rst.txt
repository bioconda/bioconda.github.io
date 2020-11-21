:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmer-db'
.. highlight: bash

kmer-db
=======

.. conda:recipe:: kmer-db
   :replaces_section_title:
   :noindex:

   Kmer\-db is a fast and memory\-efficient tool for estimating evolutionary distances.

   :homepage: https://github.com/refresh-bio/kmer-db
   :license: GPL / GPL-3
   :recipe: /`kmer-db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmer-db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmer-db/meta.yaml>`_

   


.. conda:package:: kmer-db

   |downloads_kmer-db| |docker_kmer-db|

   :versions:
      
      

      ``1.7.6-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kmer-db

   and update with::

      conda update kmer-db

   or use the docker container::

      docker pull quay.io/biocontainers/kmer-db:<tag>

   (see `kmer-db/tags`_ for valid values for ``<tag>``)


.. |downloads_kmer-db| image:: https://img.shields.io/conda/dn/bioconda/kmer-db.svg?style=flat
   :target: https://anaconda.org/bioconda/kmer-db
   :alt:   (downloads)
.. |docker_kmer-db| image:: https://quay.io/repository/biocontainers/kmer-db/status
   :target: https://quay.io/repository/biocontainers/kmer-db
.. _`kmer-db/tags`: https://quay.io/repository/biocontainers/kmer-db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmer-db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmer-db/README.html