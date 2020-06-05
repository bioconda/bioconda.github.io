:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transcomb'
.. highlight: bash

transcomb
=========

.. conda:recipe:: transcomb
   :replaces_section_title:
   :noindex:

   A sparse k\-mer graph based\, memory\-efficient genome assembler

   :homepage: https://github.com/yechengxi/SparseAssembler
   :license: Unknown
   :recipe: /`transcomb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transcomb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transcomb/meta.yaml>`_

   


.. conda:package:: transcomb

   |downloads_transcomb| |docker_transcomb|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends bamtools: 
   :depends boost: ``1.60*``
   :depends icu: ``==56.1``
   :depends libgcc: 
   :depends samtools: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install transcomb

   and update with::

      conda update transcomb

   or use the docker container::

      docker pull quay.io/biocontainers/transcomb:<tag>

   (see `transcomb/tags`_ for valid values for ``<tag>``)


.. |downloads_transcomb| image:: https://img.shields.io/conda/dn/bioconda/transcomb.svg?style=flat
   :target: https://anaconda.org/bioconda/transcomb
   :alt:   (downloads)
.. |docker_transcomb| image:: https://quay.io/repository/biocontainers/transcomb/status
   :target: https://quay.io/repository/biocontainers/transcomb
.. _`transcomb/tags`: https://quay.io/repository/biocontainers/transcomb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transcomb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transcomb/README.html