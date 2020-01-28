:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgx-variant-tools'
.. highlight: bash

pgx-variant-tools
=================

.. conda:recipe:: pgx-variant-tools
   :replaces_section_title:

   This library contains various methods and utilities for the calling and manipulation of normalized variants.

   :homepage: https://github.com/LUMC/pgx-variant-tools
   :license: MIT / MIT
   :recipe: /`pgx-variant-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgx-variant-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgx-variant-tools/meta.yaml>`_

   


.. conda:package:: pgx-variant-tools

   |downloads_pgx-variant-tools| |docker_pgx-variant-tools|

   :versions: 0.0.2-1, 0.0.2-0
   
   :depends biopython: 
   :depends click: 
   :depends cyvcf2: 
   :depends edlib: 
   :depends numpy: 
   :depends pyinterval: 
   :depends python: >=3.6
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pgx-variant-tools

   and update with::

      conda update pgx-variant-tools

   or use the docker container::

      docker pull quay.io/biocontainers/pgx-variant-tools:<tag>

   (see `pgx-variant-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_pgx-variant-tools| image:: https://img.shields.io/conda/dn/bioconda/pgx-variant-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/pgx-variant-tools
   :alt:   (downloads)
.. |docker_pgx-variant-tools| image:: https://quay.io/repository/biocontainers/pgx-variant-tools/status
   :target: https://quay.io/repository/biocontainers/pgx-variant-tools
.. _`pgx-variant-tools/tags`: https://quay.io/repository/biocontainers/pgx-variant-tools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgx-variant-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgx-variant-tools/README.html