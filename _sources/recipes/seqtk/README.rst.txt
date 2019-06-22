:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqtk'
.. highlight: bash

seqtk
=====

.. conda:recipe:: seqtk
   :replaces_section_title:

   Seqtk is a fast and lightweight tool for processing sequences in the FASTA or FASTQ format

   :homepage: https://github.com/lh3/seqtk
   :license: MIT
   :recipe: /`seqtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqtk/meta.yaml>`_
   :links: biotools: :biotools:`seqtk`

   


.. conda:package:: seqtk

   |downloads_seqtk| |docker_seqtk|

   :versions: 1.3-1, 1.3-0, 1.2-1, 1.2-0, r93-0, r82-1, r82-0, r75-0
   
   :depends libgcc-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqtk

   and update with::

      conda update seqtk

   or use the docker container::

      docker pull quay.io/biocontainers/seqtk:<tag>

   (see `seqtk/tags`_ for valid values for ``<tag>``)


.. |downloads_seqtk| image:: https://img.shields.io/conda/dn/bioconda/seqtk.svg?style=flat
   :target: https://anaconda.org/bioconda/seqtk
   :alt:   (downloads)
.. |docker_seqtk| image:: https://quay.io/repository/biocontainers/seqtk/status
   :target: https://quay.io/repository/biocontainers/seqtk
.. _`seqtk/tags`: https://quay.io/repository/biocontainers/seqtk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqtk/README.html