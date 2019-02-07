.. title:: Package Recipe 'blastbesties'
.. highlight: bash


blastbesties
============

.. conda:recipe:: blastbesties
   :replaces_section_title:

   Rapid discovery of reciprocal best blast pairs from BLAST output files.

   :homepage: https://github.com/Adamtaranto/blast-besties
   :license: MIT / MIT License
   :recipe: /`blastbesties <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastbesties>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastbesties/meta.yaml>`_

   


.. conda:package:: blastbesties

   |downloads_blastbesties| |docker_blastbesties|

   :versions: 1.1.1

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_blastbesties|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blastbesties

   and update with::

      conda update blastbesties

   or use the docker container::

      docker pull quay.io/repository/biocontainers/blastbesties


.. |required_by_blastbesties| conda:required_by:: blastbesties
.. |downloads_blastbesties| image:: https://img.shields.io/conda/dn/bioconda/blastbesties.svg?style=flat
   :alt:   (downloads)
.. |docker_blastbesties| image:: https://quay.io/repository/biocontainers/blastbesties/status
   :target: https://quay.io/repository/biocontainers/blastbesties







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blastbesties/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blastbesties/README.html

