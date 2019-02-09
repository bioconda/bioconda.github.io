.. title:: Package Recipe 'bedtools'
.. highlight: bash


bedtools
========

.. conda:recipe:: bedtools/2.19.1
   :replaces_section_title:

   A swiss army knife for genome arithmetic.  https\:\/\/github.com\/arq5x\/bedtools2 

   :homepage: http://bedtools.readthedocs.org/
   :license: GPL v2
   :recipe: /`bedtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedtools>`_/`2.19.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedtools/2.19.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedtools/2.19.1/meta.yaml>`_
   :links: biotools: :biotools:`bedtools`

   


.. conda:package:: bedtools

   |downloads_bedtools| |docker_bedtools|

   :versions: 2.27.1, 2.27.0, 2.26.0, 2.26.0gx, 2.25.0, 2.24.0, 2.23.0, 2.22, 2.20.1, 2.19.1, 2.17.0, 2.16.2

   :depends: :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_bedtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bedtools

   and update with::

      conda update bedtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bedtools


.. |required_by_bedtools| conda:required_by:: bedtools
.. |downloads_bedtools| image:: https://img.shields.io/conda/dn/bioconda/bedtools.svg?style=flat
   :alt:   (downloads)
.. |docker_bedtools| image:: https://quay.io/repository/biocontainers/bedtools/status
   :target: https://quay.io/repository/biocontainers/bedtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bedtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bedtools/README.html

