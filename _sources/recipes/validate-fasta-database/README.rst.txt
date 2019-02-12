:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'validate-fasta-database'
.. highlight: bash

validate-fasta-database
=======================

.. conda:recipe:: validate-fasta-database
   :replaces_section_title:

   Code for Galaxy tool for quality control on FASTA database

   :homepage: https://github.com/caleb-easterly/validate_fasta_database
   :license: GPL-3.0
   :recipe: /`validate-fasta-database <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/validate-fasta-database>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/validate-fasta-database/meta.yaml>`_

   


.. conda:package:: validate-fasta-database

   |downloads_validate-fasta-database| |docker_validate-fasta-database|

   :versions: 1.0-1, 1.0-0
   
   :depends openjdk: >=7
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install validate-fasta-database

   and update with::

      conda update validate-fasta-database

   or use the docker container::

      docker pull quay.io/repository/biocontainers/validate-fasta-database:<tag>

   (see `validate-fasta-database/tags`_ for valid values for ``<tag>``)


.. |downloads_validate-fasta-database| image:: https://img.shields.io/conda/dn/bioconda/validate-fasta-database.svg?style=flat
   :alt:   (downloads)
.. |docker_validate-fasta-database| image:: https://quay.io/repository/biocontainers/validate-fasta-database/status
   :target: https://quay.io/repository/biocontainers/validate-fasta-database
.. _`validate-fasta-database/tags`: https://quay.io/repository/biocontainers/validate-fasta-database?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/validate-fasta-database/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/validate-fasta-database/README.html