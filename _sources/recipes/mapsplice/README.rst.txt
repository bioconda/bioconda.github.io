.. title:: Package Recipe 'mapsplice'
.. highlight: bash


mapsplice
=========

.. conda:recipe:: mapsplice
   :replaces_section_title:

   MapSplice is a software for mapping RNA\-seq data to reference genome for splice junction discovery that depends only on reference genome\, and not on any further annotations.

   :homepage: 
   :license: Custom
   :recipe: /`mapsplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapsplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapsplice/meta.yaml>`_
   :links: biotools: :biotools:`mapsplice`

   


.. conda:package:: mapsplice

   |downloads_mapsplice| |docker_mapsplice|

   :versions: 2.2.0

   :depends: :conda:package:`ncurses` 5.9* :conda:package:`python` 2.7* :conda:package:`zlib`  

   :required~by: |required_by_mapsplice|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mapsplice

   and update with::

      conda update mapsplice

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mapsplice


.. |required_by_mapsplice| conda:required_by:: mapsplice
.. |downloads_mapsplice| image:: https://img.shields.io/conda/dn/bioconda/mapsplice.svg?style=flat
   :alt:   (downloads)
.. |docker_mapsplice| image:: https://quay.io/repository/biocontainers/mapsplice/status
   :target: https://quay.io/repository/biocontainers/mapsplice







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapsplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapsplice/README.html

