:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbmm2'
.. highlight: bash

pbmm2
=====

.. conda:recipe:: pbmm2
   :replaces_section_title:

   A minimap2 frontend for PacBio native data formats

   :homepage: https://github.com/PacificBiosciences/pbmm2
   :license: BSD-3-Clause-Clear
   :recipe: /`pbmm2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbmm2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbmm2/meta.yaml>`_

   


.. conda:package:: pbmm2

   |downloads_pbmm2| |docker_pbmm2|

   :versions: 0.12.0-0, 0.11.0-0, 0.10.1-1, 0.10.1-0, 0.10.0-0, 0.9.0-0, 0.8.1-0, 0.7.0-0, 0.6.0-0, 0.5.1-0
   
   :depends pbbam: 0.19.0.*
   
   :depends pbcopper: 0.4.2.*
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbmm2

   and update with::

      conda update pbmm2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pbmm2:<tag>

   (see `pbmm2/tags`_ for valid values for ``<tag>``)


.. |downloads_pbmm2| image:: https://img.shields.io/conda/dn/bioconda/pbmm2.svg?style=flat
   :alt:   (downloads)
.. |docker_pbmm2| image:: https://quay.io/repository/biocontainers/pbmm2/status
   :target: https://quay.io/repository/biocontainers/pbmm2
.. _`pbmm2/tags`: https://quay.io/repository/biocontainers/pbmm2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbmm2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbmm2/README.html