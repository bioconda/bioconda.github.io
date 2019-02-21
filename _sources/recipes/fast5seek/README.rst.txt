:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fast5seek'
.. highlight: bash

fast5seek
=========

.. conda:recipe:: fast5seek
   :replaces_section_title:

   Get paths for fast5 files contained in BAM\, SAM\, or fastq.

   :homepage: https://github.com/mbhall88/fast5seek
   :license: MIT / MIT License
   :recipe: /`fast5seek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5seek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5seek/meta.yaml>`_

   


.. conda:package:: fast5seek

   |downloads_fast5seek| |docker_fast5seek|

   :versions: 0.1.1-0, 0.1.0-1, 0.1.0-0
   
   :depends ont-fast5-api: 
   
   :depends pysam: 
   
   :depends python: >=3.5,<3.6.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fast5seek

   and update with::

      conda update fast5seek

   or use the docker container::

      docker pull quay.io/biocontainers/fast5seek:<tag>

   (see `fast5seek/tags`_ for valid values for ``<tag>``)


.. |downloads_fast5seek| image:: https://img.shields.io/conda/dn/bioconda/fast5seek.svg?style=flat
   :alt:   (downloads)
.. |docker_fast5seek| image:: https://quay.io/repository/biocontainers/fast5seek/status
   :target: https://quay.io/repository/biocontainers/fast5seek
.. _`fast5seek/tags`: https://quay.io/repository/biocontainers/fast5seek?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fast5seek/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fast5seek/README.html