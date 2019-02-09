.. title:: Package Recipe 'art'
.. highlight: bash


art
===

.. conda:recipe:: art
   :replaces_section_title:

   Illumina\, 454 and Solid read simulator

   :homepage: http://www.niehs.nih.gov/research/resources/software/biostatistics/art/
   :license: GPLv2
   :recipe: /`art <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/art>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/art/meta.yaml>`_

   


.. conda:package:: art

   |downloads_art| |docker_art|

   :versions: 2016.06.05, 3.19.15, 3.11.14

   :depends: :conda:package:`blas`  :conda:package:`gsl` 1.16* 

   :required~by: |required_by_art|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install art

   and update with::

      conda update art

   or use the docker container::

      docker pull quay.io/repository/biocontainers/art


.. |required_by_art| conda:required_by:: art
.. |downloads_art| image:: https://img.shields.io/conda/dn/bioconda/art.svg?style=flat
   :alt:   (downloads)
.. |docker_art| image:: https://quay.io/repository/biocontainers/art/status
   :target: https://quay.io/repository/biocontainers/art







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/art/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/art/README.html

