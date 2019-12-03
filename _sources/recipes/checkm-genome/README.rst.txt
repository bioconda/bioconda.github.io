:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'checkm-genome'
.. highlight: bash

checkm-genome
=============

.. conda:recipe:: checkm-genome
   :replaces_section_title:

   Assess the quality of microbial genomes recovered from isolates\, single cells\, and metagenomes.

   :homepage: https://ecogenomics.github.io/CheckM/
   :license: GPL3
   :recipe: /`checkm-genome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkm-genome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkm-genome/meta.yaml>`_

   


.. conda:package:: checkm-genome

   |downloads_checkm-genome| |docker_checkm-genome|

   :versions: 1.1.0-1, 1.1.0-0, 1.0.18-0, 1.0.17-0, 1.0.16-0, 1.0.13-1, 1.0.13-0, 1.0.12-0, 1.0.11-1, 1.0.11-0, 1.0.7-0, 1.0.5-0
   
   :depends dendropy: >=4.4.0
   :depends hmmer: >=3.1b1
   :depends matplotlib: >=2.1.0
   :depends numpy: >=1.13.1
   :depends pplacer: 1.1.alpha19
   :depends prodigal: >=2.6.1
   :depends pysam: >=0.12.0.1
   :depends python: >=3.6
   :depends scipy: >=0.19.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install checkm-genome

   and update with::

      conda update checkm-genome

   or use the docker container::

      docker pull quay.io/biocontainers/checkm-genome:<tag>

   (see `checkm-genome/tags`_ for valid values for ``<tag>``)


.. |downloads_checkm-genome| image:: https://img.shields.io/conda/dn/bioconda/checkm-genome.svg?style=flat
   :target: https://anaconda.org/bioconda/checkm-genome
   :alt:   (downloads)
.. |docker_checkm-genome| image:: https://quay.io/repository/biocontainers/checkm-genome/status
   :target: https://quay.io/repository/biocontainers/checkm-genome
.. _`checkm-genome/tags`: https://quay.io/repository/biocontainers/checkm-genome?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/checkm-genome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/checkm-genome/README.html