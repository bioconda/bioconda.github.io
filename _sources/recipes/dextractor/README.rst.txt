.. title:: Package Recipe 'dextractor'
.. highlight: bash


dextractor
==========

.. conda:recipe:: dextractor
   :replaces_section_title:

   Bax File Decoder and Data Compressor

   :homepage: https://github.com/thegenemyers/DEXTRACTOR
   :license: Custom
   :recipe: /`dextractor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dextractor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dextractor/meta.yaml>`_

   


.. conda:package:: dextractor

   |downloads_dextractor| |docker_dextractor|

   :versions: 1.0p2, 1.0p1

   :depends: :conda:package:`hdf5` 1.8.17* :conda:package:`libgcc`  

   :required~by: |required_by_dextractor|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dextractor

   and update with::

      conda update dextractor

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dextractor


.. |required_by_dextractor| conda:required_by:: dextractor
.. |downloads_dextractor| image:: https://img.shields.io/conda/dn/bioconda/dextractor.svg?style=flat
   :alt:   (downloads)
.. |docker_dextractor| image:: https://quay.io/repository/biocontainers/dextractor/status
   :target: https://quay.io/repository/biocontainers/dextractor







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dextractor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dextractor/README.html

