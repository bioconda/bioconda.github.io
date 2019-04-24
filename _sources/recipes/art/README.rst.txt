:orphan:  .. only available via index, not via toctree

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

   :versions: 2016.06.05-2, 2016.06.05-1, 2016.06.05-0, 3.19.15-1, 3.11.14-1, 3.11.14-0
   
   :depends blas: 
   :depends gsl: >=2.2.1,<2.3.0a0
   :depends libstdcxx-ng: >=4.9
   :depends openblas: >=0.2.20,<0.2.21.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install art

   and update with::

      conda update art

   or use the docker container::

      docker pull quay.io/biocontainers/art:<tag>

   (see `art/tags`_ for valid values for ``<tag>``)


.. |downloads_art| image:: https://img.shields.io/conda/dn/bioconda/art.svg?style=flat
   :alt:   (downloads)
.. |docker_art| image:: https://quay.io/repository/biocontainers/art/status
   :target: https://quay.io/repository/biocontainers/art
.. _`art/tags`: https://quay.io/repository/biocontainers/art?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/art/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/art/README.html