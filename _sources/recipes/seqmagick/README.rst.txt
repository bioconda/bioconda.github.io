:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqmagick'
.. highlight: bash

seqmagick
=========

.. conda:recipe:: seqmagick
   :replaces_section_title:

   Tools for converting and modifying sequence files from the command\-line

   :homepage: http://github.com/fhcrc/seqmagick
   :license: GPL / GNU General Public License (GPL)
   :recipe: /`seqmagick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqmagick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqmagick/meta.yaml>`_

   


.. conda:package:: seqmagick

   |downloads_seqmagick| |docker_seqmagick|

   :versions: 0.8.0-0, 0.7.0-3, 0.7.0-2, 0.7.0-1, 0.7.0-0, 0.6.1-0
   
   :depends biopython: >=1.70
   :depends python: >3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqmagick

   and update with::

      conda update seqmagick

   or use the docker container::

      docker pull quay.io/biocontainers/seqmagick:<tag>

   (see `seqmagick/tags`_ for valid values for ``<tag>``)


.. |downloads_seqmagick| image:: https://img.shields.io/conda/dn/bioconda/seqmagick.svg?style=flat
   :target: https://anaconda.org/bioconda/seqmagick
   :alt:   (downloads)
.. |docker_seqmagick| image:: https://quay.io/repository/biocontainers/seqmagick/status
   :target: https://quay.io/repository/biocontainers/seqmagick
.. _`seqmagick/tags`: https://quay.io/repository/biocontainers/seqmagick?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqmagick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqmagick/README.html