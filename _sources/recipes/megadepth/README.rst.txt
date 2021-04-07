:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'megadepth'
.. highlight: bash

megadepth
=========

.. conda:recipe:: megadepth
   :replaces_section_title:
   :noindex:

   Megadepth is an efficient tool for extracting coverage related information from RNA and DNA\-seq BAM and BigWig files. It supports reading whole\-genome coverage from BAM files and writing either indexed TSV or BigWig files\, as well as efficient region coverage summary over intervals from both types of files.

   :homepage: https://github.com/ChristopherWilks/megadepth
   :license: MIT / MIT
   :recipe: /`megadepth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megadepth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megadepth/meta.yaml>`_

   


.. conda:package:: megadepth

   |downloads_megadepth| |docker_megadepth|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.9b-0``

      

   
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libbigwig: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install megadepth

   and update with::

      conda update megadepth

   or use the docker container::

      docker pull quay.io/biocontainers/megadepth:<tag>

   (see `megadepth/tags`_ for valid values for ``<tag>``)


.. |downloads_megadepth| image:: https://img.shields.io/conda/dn/bioconda/megadepth.svg?style=flat
   :target: https://anaconda.org/bioconda/megadepth
   :alt:   (downloads)
.. |docker_megadepth| image:: https://quay.io/repository/biocontainers/megadepth/status
   :target: https://quay.io/repository/biocontainers/megadepth
.. _`megadepth/tags`: https://quay.io/repository/biocontainers/megadepth?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megadepth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megadepth/README.html