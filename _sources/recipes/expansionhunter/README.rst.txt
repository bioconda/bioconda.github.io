:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'expansionhunter'
.. highlight: bash

expansionhunter
===============

.. conda:recipe:: expansionhunter
   :replaces_section_title:
   :noindex:

   A tool for estimating repeat sizes

   :homepage: https://github.com/Illumina/ExpansionHunter
   :license: Apache / Apache v2.0
   :recipe: /`expansionhunter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expansionhunter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expansionhunter/meta.yaml>`_

   


.. conda:package:: expansionhunter

   |downloads_expansionhunter| |docker_expansionhunter|

   :versions:
      
      

      ``3.2.2-0``,  ``3.2.0-0``,  ``3.1.2-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.8-1``,  ``2.0.8-0``,  ``2.0.6-0``

      

   
   :depends boost: ``>=1.70.0,<1.70.1.0a0``
   :depends htslib: ``>=1.9,<1.10.0a0``
   :depends icu: ``>=64.2,<65.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install expansionhunter

   and update with::

      conda update expansionhunter

   or use the docker container::

      docker pull quay.io/biocontainers/expansionhunter:<tag>

   (see `expansionhunter/tags`_ for valid values for ``<tag>``)


.. |downloads_expansionhunter| image:: https://img.shields.io/conda/dn/bioconda/expansionhunter.svg?style=flat
   :target: https://anaconda.org/bioconda/expansionhunter
   :alt:   (downloads)
.. |docker_expansionhunter| image:: https://quay.io/repository/biocontainers/expansionhunter/status
   :target: https://quay.io/repository/biocontainers/expansionhunter
.. _`expansionhunter/tags`: https://quay.io/repository/biocontainers/expansionhunter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/expansionhunter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/expansionhunter/README.html