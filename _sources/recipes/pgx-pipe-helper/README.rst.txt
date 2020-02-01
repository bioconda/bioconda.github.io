:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgx-pipe-helper'
.. highlight: bash

pgx-pipe-helper
===============

.. conda:recipe:: pgx-pipe-helper
   :replaces_section_title:

   A helper module for wrapping functionality which is common to all pipeline stages.

   :homepage: https://github.com/lumc/pgx-pipe-helper
   :license: MIT / MIT
   :recipe: /`pgx-pipe-helper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgx-pipe-helper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgx-pipe-helper/meta.yaml>`_

   


.. conda:package:: pgx-pipe-helper

   |downloads_pgx-pipe-helper| |docker_pgx-pipe-helper|

   :versions: 0.0.4-0
   
   :depends locus_processing: 
   :depends python: 
   :depends pyyaml: 
   :depends snakemake: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pgx-pipe-helper

   and update with::

      conda update pgx-pipe-helper

   or use the docker container::

      docker pull quay.io/biocontainers/pgx-pipe-helper:<tag>

   (see `pgx-pipe-helper/tags`_ for valid values for ``<tag>``)


.. |downloads_pgx-pipe-helper| image:: https://img.shields.io/conda/dn/bioconda/pgx-pipe-helper.svg?style=flat
   :target: https://anaconda.org/bioconda/pgx-pipe-helper
   :alt:   (downloads)
.. |docker_pgx-pipe-helper| image:: https://quay.io/repository/biocontainers/pgx-pipe-helper/status
   :target: https://quay.io/repository/biocontainers/pgx-pipe-helper
.. _`pgx-pipe-helper/tags`: https://quay.io/repository/biocontainers/pgx-pipe-helper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgx-pipe-helper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgx-pipe-helper/README.html