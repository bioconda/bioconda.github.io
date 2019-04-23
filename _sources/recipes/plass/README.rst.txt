:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plass'
.. highlight: bash

plass
=====

.. conda:recipe:: plass
   :replaces_section_title:

   Plass \(Protein\-Level ASSembler\) is a software to assemble short read sequencing data on a protein level

   :homepage: https://github.com/soedinglab/plass
   :license: GPLv3
   :recipe: /`plass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plass/meta.yaml>`_

   


.. conda:package:: plass

   |downloads_plass| |docker_plass|

   :versions: 2.c7e35-1
   
   :depends bzip2: >=1.0.6,<2.0a0
   :depends gawk: 
   :depends openmp: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plass

   and update with::

      conda update plass

   or use the docker container::

      docker pull quay.io/biocontainers/plass:<tag>

   (see `plass/tags`_ for valid values for ``<tag>``)


.. |downloads_plass| image:: https://img.shields.io/conda/dn/bioconda/plass.svg?style=flat
   :alt:   (downloads)
.. |docker_plass| image:: https://quay.io/repository/biocontainers/plass/status
   :target: https://quay.io/repository/biocontainers/plass
.. _`plass/tags`: https://quay.io/repository/biocontainers/plass?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plass/README.html