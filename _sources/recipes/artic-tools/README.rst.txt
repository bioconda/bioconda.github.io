:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'artic-tools'
.. highlight: bash

artic-tools
===========

.. conda:recipe:: artic-tools
   :replaces_section_title:
   :noindex:

   A set of tools for working with the ARTIC bioinformatic pipeline.

   :homepage: https://github.com/will-rowe/artic-tools
   :license: MIT
   :recipe: /`artic-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artic-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artic-tools/meta.yaml>`_

   


.. conda:package:: artic-tools

   |downloads_artic-tools| |docker_artic-tools|

   :versions:
      
      

      ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.10``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install artic-tools

   and update with::

      conda update artic-tools

   or use the docker container::

      docker pull quay.io/biocontainers/artic-tools:<tag>

   (see `artic-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_artic-tools| image:: https://img.shields.io/conda/dn/bioconda/artic-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/artic-tools
   :alt:   (downloads)
.. |docker_artic-tools| image:: https://quay.io/repository/biocontainers/artic-tools/status
   :target: https://quay.io/repository/biocontainers/artic-tools
.. _`artic-tools/tags`: https://quay.io/repository/biocontainers/artic-tools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/artic-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/artic-tools/README.html