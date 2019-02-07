.. title:: Package Recipe 'breakdancer'
.. highlight: bash


breakdancer
===========

.. conda:recipe:: breakdancer
   :replaces_section_title:

   SV detection from paired end reads mapping

   :homepage: https://github.com/genome/breakdancer
   :license: GPLv3
   :recipe: /`breakdancer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakdancer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakdancer/meta.yaml>`_
   :links: biotools: :biotools:`breakdancer`

   


.. conda:package:: breakdancer

   |downloads_breakdancer| |docker_breakdancer|

   :versions: 1.4.5

   :depends: :conda:package:`libgcc`  :conda:package:`perl-math-cdf`  :conda:package:`perl-statistics-descriptive`  :conda:package:`zlib`  

   :required~by: |required_by_breakdancer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install breakdancer

   and update with::

      conda update breakdancer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/breakdancer


.. |required_by_breakdancer| conda:required_by:: breakdancer
.. |downloads_breakdancer| image:: https://img.shields.io/conda/dn/bioconda/breakdancer.svg?style=flat
   :alt:   (downloads)
.. |docker_breakdancer| image:: https://quay.io/repository/biocontainers/breakdancer/status
   :target: https://quay.io/repository/biocontainers/breakdancer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/breakdancer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/breakdancer/README.html

