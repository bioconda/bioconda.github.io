:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stride'
.. highlight: bash

stride
======

.. conda:recipe:: stride
   :replaces_section_title:
   :noindex:

   The StriDe Assembler integrates string and de Bruijn graph by decomposing reads within error\-prone regions\, while extending paire\-end read into long reads for assembly through repetitive regions.

   :homepage: https://github.com/ythuang0522/StriDe
   :license: GPL3
   :recipe: /`stride <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stride>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stride/meta.yaml>`_

   


.. conda:package:: stride

   |downloads_stride| |docker_stride|

   :versions:
      
      

      ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=4.9``
   :depends libstdcxx-ng: ``>=4.9``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stride

   and update with::

      conda update stride

   or use the docker container::

      docker pull quay.io/biocontainers/stride:<tag>

   (see `stride/tags`_ for valid values for ``<tag>``)


.. |downloads_stride| image:: https://img.shields.io/conda/dn/bioconda/stride.svg?style=flat
   :target: https://anaconda.org/bioconda/stride
   :alt:   (downloads)
.. |docker_stride| image:: https://quay.io/repository/biocontainers/stride/status
   :target: https://quay.io/repository/biocontainers/stride
.. _`stride/tags`: https://quay.io/repository/biocontainers/stride?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stride/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stride/README.html