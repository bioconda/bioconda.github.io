:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bohra'
.. highlight: bash

bohra
=====

.. conda:recipe:: bohra
   :replaces_section_title:

   A bioinformatics pipeline for analysing short read Illumina data microbiological public health.

   :homepage: https://github.com/kristyhoran/bohra
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`bohra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bohra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bohra/meta.yaml>`_

   


.. conda:package:: bohra

   |downloads_bohra| |docker_bohra|

   :versions: 1.0.27-0, 1.0.26-0, 1.0.25-0, 1.0.24-0, 1.0.23-0, 1.0.22-0, 1.0.20-1, 1.0.20-0, 1.0.19-0
   
   :depends abricate: 
   :depends biopython: >=1.70
   :depends iqtree: 
   :depends jinja2: 
   :depends kraken2: 
   :depends mlst: 
   :depends numpy: 
   :depends packaging: 
   :depends pandas: >=0.23.0
   :depends prokka: 
   :depends psutil: 
   :depends pytest: 
   :depends pytest-runner: 
   :depends python: >=3.6
   :depends roary: 
   :depends seqtk: 
   :depends sh: 
   :depends shovill: >=1.0.4
   :depends snakemake: >=5.4.0
   :depends snippy: >=4.4.3
   :depends snp-dists: >=0.6.3
   :depends svgwrite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bohra

   and update with::

      conda update bohra

   or use the docker container::

      docker pull quay.io/biocontainers/bohra:<tag>

   (see `bohra/tags`_ for valid values for ``<tag>``)


.. |downloads_bohra| image:: https://img.shields.io/conda/dn/bioconda/bohra.svg?style=flat
   :target: https://anaconda.org/bioconda/bohra
   :alt:   (downloads)
.. |docker_bohra| image:: https://quay.io/repository/biocontainers/bohra/status
   :target: https://quay.io/repository/biocontainers/bohra
.. _`bohra/tags`: https://quay.io/repository/biocontainers/bohra?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bohra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bohra/README.html