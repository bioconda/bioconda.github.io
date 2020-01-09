:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haploconduct'
.. highlight: bash

haploconduct
============

.. conda:recipe:: haploconduct
   :replaces_section_title:

   HaploConduct is a package designed for reconstruction of individual haplotypes from next generation sequencing data\, in particular Illumina. It provides two methods\, SAVAGE and POLYTE\, which can be run through the haploconduct wrapper.

   :homepage: https://github.com/HaploConduct/HaploConduct
   :license: GPL3
   :recipe: /`haploconduct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploconduct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploconduct/meta.yaml>`_

   


.. conda:package:: haploconduct

   |downloads_haploconduct| |docker_haploconduct|

   :versions: 0.2.1-0
   
   :depends boost-cpp: >=1.70.0,<1.70.1.0a0
   :depends bwa: 
   :depends kallisto: >=0.43.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends python: >=2.7,<2.8.0a0
   :depends rust-overlaps: 
   :depends samtools: >=1.4
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install haploconduct

   and update with::

      conda update haploconduct

   or use the docker container::

      docker pull quay.io/biocontainers/haploconduct:<tag>

   (see `haploconduct/tags`_ for valid values for ``<tag>``)


.. |downloads_haploconduct| image:: https://img.shields.io/conda/dn/bioconda/haploconduct.svg?style=flat
   :target: https://anaconda.org/bioconda/haploconduct
   :alt:   (downloads)
.. |docker_haploconduct| image:: https://quay.io/repository/biocontainers/haploconduct/status
   :target: https://quay.io/repository/biocontainers/haploconduct
.. _`haploconduct/tags`: https://quay.io/repository/biocontainers/haploconduct?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haploconduct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haploconduct/README.html