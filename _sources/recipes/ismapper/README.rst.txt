:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ismapper'
.. highlight: bash

ismapper
========

.. conda:recipe:: ismapper
   :replaces_section_title:
   :noindex:

   A mapping\-based tool for identification of the site and orientation of IS insertions in bacterial genomes.

   :homepage: https://github.com/jhawkey/IS_mapper/
   :license: BSD
   :recipe: /`ismapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ismapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ismapper/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12864-015-1860-2`

   


.. conda:package:: ismapper

   |downloads_ismapper| |docker_ismapper|

   :versions:
      
      

      ``2.0.1-1``,  ``2.0.1-0``,  ``2.0-1``

      

   
   :depends bedtools: ``>=2.20``
   :depends biopython: ``>=1.63,<1.78``
   :depends blast: ``>=2.2.28``
   :depends bwa: ``>=0.7.5a``
   :depends python: ``>=3.6``
   :depends samtools: ``>=0.1.19``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ismapper

   and update with::

      conda update ismapper

   or use the docker container::

      docker pull quay.io/biocontainers/ismapper:<tag>

   (see `ismapper/tags`_ for valid values for ``<tag>``)


.. |downloads_ismapper| image:: https://img.shields.io/conda/dn/bioconda/ismapper.svg?style=flat
   :target: https://anaconda.org/bioconda/ismapper
   :alt:   (downloads)
.. |docker_ismapper| image:: https://quay.io/repository/biocontainers/ismapper/status
   :target: https://quay.io/repository/biocontainers/ismapper
.. _`ismapper/tags`: https://quay.io/repository/biocontainers/ismapper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ismapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ismapper/README.html