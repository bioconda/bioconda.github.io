:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'demuxlet'
.. highlight: bash

demuxlet
========

.. conda:recipe:: demuxlet
   :replaces_section_title:
   :noindex:

   Genetic multiplexing of barcoded single cell RNA\-seq

   :homepage: https://github.com/statgen/demuxlet
   :license: GPL3
   :recipe: /`demuxlet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demuxlet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/demuxlet/meta.yaml>`_

   


.. conda:package:: demuxlet

   |downloads_demuxlet| |docker_demuxlet|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libdeflate: ``>=1.6,<1.7.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends libtool: 
   :depends samtools: 
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install demuxlet

   and update with::

      conda update demuxlet

   or use the docker container::

      docker pull quay.io/biocontainers/demuxlet:<tag>

   (see `demuxlet/tags`_ for valid values for ``<tag>``)


.. |downloads_demuxlet| image:: https://img.shields.io/conda/dn/bioconda/demuxlet.svg?style=flat
   :target: https://anaconda.org/bioconda/demuxlet
   :alt:   (downloads)
.. |docker_demuxlet| image:: https://quay.io/repository/biocontainers/demuxlet/status
   :target: https://quay.io/repository/biocontainers/demuxlet
.. _`demuxlet/tags`: https://quay.io/repository/biocontainers/demuxlet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/demuxlet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/demuxlet/README.html