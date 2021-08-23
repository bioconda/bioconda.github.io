:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'megapath'
.. highlight: bash

megapath
========

.. conda:recipe:: megapath
   :replaces_section_title:
   :noindex:

   MegaPath\: sensitive and rapid pathogen detection using metagenomic NGS data

   :homepage: https://github.com/edwwlui/MegaPath
   :license: BSD-3-Clause
   :recipe: /`megapath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megapath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megapath/meta.yaml>`_

   


.. conda:package:: megapath

   |downloads_megapath| |docker_megapath|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends bedtools: ``2.27.1.*``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends megahit: ``1.1.3.*``
   :depends python: ``3.6.10.*``
   :depends samtools: ``0.1.18.*``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install megapath

   and update with::

      conda update megapath

   or use the docker container::

      docker pull quay.io/biocontainers/megapath:<tag>

   (see `megapath/tags`_ for valid values for ``<tag>``)


.. |downloads_megapath| image:: https://img.shields.io/conda/dn/bioconda/megapath.svg?style=flat
   :target: https://anaconda.org/bioconda/megapath
   :alt:   (downloads)
.. |docker_megapath| image:: https://quay.io/repository/biocontainers/megapath/status
   :target: https://quay.io/repository/biocontainers/megapath
.. _`megapath/tags`: https://quay.io/repository/biocontainers/megapath?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megapath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megapath/README.html