:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rtg-tools'
.. highlight: bash

rtg-tools
=========

.. conda:recipe:: rtg-tools
   :replaces_section_title:

   RealTimeGenomics Tools \-\- Utilities for accurate VCF comparison and manipulation

   :homepage: https://github.com/RealTimeGenomics/rtg-tools
   :license: BSD
   :recipe: /`rtg-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rtg-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rtg-tools/meta.yaml>`_

   


.. conda:package:: rtg-tools

   |downloads_rtg-tools| |docker_rtg-tools|

   :versions: 3.10.1-0, 3.10-0, 3.9.1-1, 3.9.1-0, 3.9-0, 3.8.4-0, 3.8.2-0, 3.7.1-0, 3.6-1, 3.6-0
   
   :depends font-ttf-dejavu-sans-mono: 
   :depends fontconfig: 
   :depends openjdk: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rtg-tools

   and update with::

      conda update rtg-tools

   or use the docker container::

      docker pull quay.io/biocontainers/rtg-tools:<tag>

   (see `rtg-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_rtg-tools| image:: https://img.shields.io/conda/dn/bioconda/rtg-tools.svg?style=flat
   :alt:   (downloads)
.. |docker_rtg-tools| image:: https://quay.io/repository/biocontainers/rtg-tools/status
   :target: https://quay.io/repository/biocontainers/rtg-tools
.. _`rtg-tools/tags`: https://quay.io/repository/biocontainers/rtg-tools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rtg-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rtg-tools/README.html