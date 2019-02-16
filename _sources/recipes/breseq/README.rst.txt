:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'breseq'
.. highlight: bash

breseq
======

.. conda:recipe:: breseq
   :replaces_section_title:

   A computational pipeline for finding mutations relative to a reference sequence in short\-read DNA re\-sequencing data.

   :homepage: https://github.com/barricklab/breseq
   :license: GPL / GPL-3.0
   :recipe: /`breseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breseq/meta.yaml>`_

   


.. conda:package:: breseq

   |downloads_breseq| |docker_breseq|

   :versions: 0.33.0-0, 0.31.1-3, 0.31.1-2, 0.31.1-1, 0.29.0-0
   
   :depends bowtie2: >=2.0.0,!=2.0.3,!=2.0.4,!=2.3.1
   
   :depends libgcc-ng: >=4.9
   
   :depends r-base: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install breseq

   and update with::

      conda update breseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/breseq:<tag>

   (see `breseq/tags`_ for valid values for ``<tag>``)


.. |downloads_breseq| image:: https://img.shields.io/conda/dn/bioconda/breseq.svg?style=flat
   :alt:   (downloads)
.. |docker_breseq| image:: https://quay.io/repository/biocontainers/breseq/status
   :target: https://quay.io/repository/biocontainers/breseq
.. _`breseq/tags`: https://quay.io/repository/biocontainers/breseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/breseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/breseq/README.html