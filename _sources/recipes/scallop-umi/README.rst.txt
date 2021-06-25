:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scallop-umi'
.. highlight: bash

scallop-umi
===========

.. conda:recipe:: scallop-umi
   :replaces_section_title:
   :noindex:

   A reference\-based transcript assembler for linked\-reads RNA\-seq data.

   :homepage: https://github.com/Shao-Group/scallop-umi
   :license: BSD-3-Clause
   :recipe: /`scallop-umi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop-umi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop-umi/meta.yaml>`_

   


.. conda:package:: scallop-umi

   |downloads_scallop-umi| |docker_scallop-umi|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scallop-umi

   and update with::

      conda update scallop-umi

   or use the docker container::

      docker pull quay.io/biocontainers/scallop-umi:<tag>

   (see `scallop-umi/tags`_ for valid values for ``<tag>``)


.. |downloads_scallop-umi| image:: https://img.shields.io/conda/dn/bioconda/scallop-umi.svg?style=flat
   :target: https://anaconda.org/bioconda/scallop-umi
   :alt:   (downloads)
.. |docker_scallop-umi| image:: https://quay.io/repository/biocontainers/scallop-umi/status
   :target: https://quay.io/repository/biocontainers/scallop-umi
.. _`scallop-umi/tags`: https://quay.io/repository/biocontainers/scallop-umi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scallop-umi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scallop-umi/README.html