:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seacr'
.. highlight: bash

seacr
=====

.. conda:recipe:: seacr
   :replaces_section_title:

   SEACR is intended to call peaks and enriched regions from sparse CUT\&RUN or chromatin profiling data in which background is dominated by \"zeroes\" \(i.e. regions with no read coverage\). It requires R \(https\:\/\/www.r\-project.org\) and Bedtools \(https\:\/\/bedtools.readthedocs.io\/en\/latest\/\) to be available in your path\, and it requires bedgraphs from paired\-end sequencing as input\, which can be generated from read pair BED files \(i.e. BED coordinates reflecting the 5\' and 3\' termini of each read pair\) using bedtools genomecov with the \"\-bg\" flag\, or alternatively from name\-sorted paired\-end BAM files as described in \"Preparing input bedgraph files\" below.

   :homepage: https://github.com/FredHutch/SEACR
   :license: https://github.com/FredHutch/SEACR/blob/master/LICENSE
   :recipe: /`seacr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seacr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seacr/meta.yaml>`_

   


.. conda:package:: seacr

   |downloads_seacr| |docker_seacr|

   :versions: 1.3-1, 1.3-0, 1.1-0
   
   :depends r-base: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seacr

   and update with::

      conda update seacr

   or use the docker container::

      docker pull quay.io/biocontainers/seacr:<tag>

   (see `seacr/tags`_ for valid values for ``<tag>``)


.. |downloads_seacr| image:: https://img.shields.io/conda/dn/bioconda/seacr.svg?style=flat
   :target: https://anaconda.org/bioconda/seacr
   :alt:   (downloads)
.. |docker_seacr| image:: https://quay.io/repository/biocontainers/seacr/status
   :target: https://quay.io/repository/biocontainers/seacr
.. _`seacr/tags`: https://quay.io/repository/biocontainers/seacr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seacr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seacr/README.html