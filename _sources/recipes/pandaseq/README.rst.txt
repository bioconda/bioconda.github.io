:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pandaseq'
.. highlight: bash

pandaseq
========

.. conda:recipe:: pandaseq
   :replaces_section_title:
   :noindex:

   PANDASEQ is a program to align Illumina reads\, optionally with PCR primers embedded in the sequence\, and reconstruct an overlapping sequence.

   :homepage: https://github.com/neufeld/pandaseq
   :license: GPL3
   :recipe: /`pandaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pandaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pandaseq/meta.yaml>`_

   


.. conda:package:: pandaseq

   |downloads_pandaseq| |docker_pandaseq|

   :versions:
      
      

      ``2.11-3``,  ``2.11-2``,  ``2.11-1``,  ``2.10-0``,  ``2.8.1-2``,  ``2.8.1-1``

      

   
   :depends bzip2: ``>=1.0.6,<2.0a0``
   :depends libgcc-ng: ``>=4.9``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pandaseq

   and update with::

      conda update pandaseq

   or use the docker container::

      docker pull quay.io/biocontainers/pandaseq:<tag>

   (see `pandaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_pandaseq| image:: https://img.shields.io/conda/dn/bioconda/pandaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/pandaseq
   :alt:   (downloads)
.. |docker_pandaseq| image:: https://quay.io/repository/biocontainers/pandaseq/status
   :target: https://quay.io/repository/biocontainers/pandaseq
.. _`pandaseq/tags`: https://quay.io/repository/biocontainers/pandaseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pandaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pandaseq/README.html