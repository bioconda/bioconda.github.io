:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'itero'
.. highlight: bash

itero
=====

.. conda:recipe:: itero
   :replaces_section_title:

   A pipeline for iterative\, guided contig assembly that integrates spades\, bwa\, and samtools to produce assembled contigs.

   :homepage: https://github.com/faircloth-lab/itero
   :license: BSD
   :recipe: /`itero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itero/meta.yaml>`_

   


.. conda:package:: itero

   |downloads_itero| |docker_itero|

   :versions: 1.1.2-1, 1.1.2-0, 1.1.1-2, 1.1.1-0, 1.1.0-0, 1.0.1-0, 1.0.0-0
   
   :depends argcomplete: 
   :depends bedtools: 
   :depends biopython: 
   :depends bwa: 
   :depends gawk: 
   :depends grep: 
   :depends mpi4py: 
   :depends nomkl: 
   :depends numpy: 
   :depends python: <3
   :depends samtools: 
   :depends schwimmbad: 
   :depends six: 
   :depends spades: 3.12.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install itero

   and update with::

      conda update itero

   or use the docker container::

      docker pull quay.io/biocontainers/itero:<tag>

   (see `itero/tags`_ for valid values for ``<tag>``)


.. |downloads_itero| image:: https://img.shields.io/conda/dn/bioconda/itero.svg?style=flat
   :target: https://anaconda.org/bioconda/itero
   :alt:   (downloads)
.. |docker_itero| image:: https://quay.io/repository/biocontainers/itero/status
   :target: https://quay.io/repository/biocontainers/itero
.. _`itero/tags`: https://quay.io/repository/biocontainers/itero?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/itero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/itero/README.html