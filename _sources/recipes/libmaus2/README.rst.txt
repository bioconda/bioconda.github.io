:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libmaus2'
.. highlight: bash

libmaus2
========

.. conda:recipe:: libmaus2
   :replaces_section_title:
   :noindex:

   collection of data structures and algorithms for NGS data

   :homepage: https://gitlab.com/german.tischler/libmaus2
   :license: GPL3
   :recipe: /`libmaus2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libmaus2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libmaus2/meta.yaml>`_

   


.. conda:package:: libmaus2

   |downloads_libmaus2| |docker_libmaus2|

   :versions:
      
      

      ``2.0.774-1``,  ``2.0.774-0``,  ``2.0.772-1``,  ``2.0.772-0``,  ``2.0.760-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libcurl: ``>=7.75.0,<8.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends snappy: ``>=1.1.8,<2.0a0``
   :depends staden_io_lib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libmaus2

   and update with::

      conda update libmaus2

   or use the docker container::

      docker pull quay.io/biocontainers/libmaus2:<tag>

   (see `libmaus2/tags`_ for valid values for ``<tag>``)


.. |downloads_libmaus2| image:: https://img.shields.io/conda/dn/bioconda/libmaus2.svg?style=flat
   :target: https://anaconda.org/bioconda/libmaus2
   :alt:   (downloads)
.. |docker_libmaus2| image:: https://quay.io/repository/biocontainers/libmaus2/status
   :target: https://quay.io/repository/biocontainers/libmaus2
.. _`libmaus2/tags`: https://quay.io/repository/biocontainers/libmaus2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libmaus2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libmaus2/README.html