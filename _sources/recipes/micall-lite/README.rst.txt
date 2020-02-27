:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'micall-lite'
.. highlight: bash

micall-lite
===========

.. conda:recipe:: micall-lite
   :replaces_section_title:

   A bioinformatic pipeline for mapping FASTQ data to a set of reference
   sequences to generate consensus sequences\, variant calls and coverage maps.

   :homepage: https://github.com/PoonLab/MiCall-Lite
   :license: GNU Affero General Public License v3.0
   :recipe: /`micall-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micall-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micall-lite/meta.yaml>`_

   


.. conda:package:: micall-lite

   |downloads_micall-lite| |docker_micall-lite|

   :versions: 0.1rc4-0, 0.1rc3-0, 0.1rc2-0, 0.1rc-0
   
   :depends bowtie2: 
   :depends libgcc-ng: >=7.3.0
   :depends python: >=3.6,<3.7.0a0
   :depends python-levenshtein: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install micall-lite

   and update with::

      conda update micall-lite

   or use the docker container::

      docker pull quay.io/biocontainers/micall-lite:<tag>

   (see `micall-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_micall-lite| image:: https://img.shields.io/conda/dn/bioconda/micall-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/micall-lite
   :alt:   (downloads)
.. |docker_micall-lite| image:: https://quay.io/repository/biocontainers/micall-lite/status
   :target: https://quay.io/repository/biocontainers/micall-lite
.. _`micall-lite/tags`: https://quay.io/repository/biocontainers/micall-lite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/micall-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/micall-lite/README.html