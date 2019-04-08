:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconvert'
.. highlight: bash

bioconvert
==========

.. conda:recipe:: bioconvert
   :replaces_section_title:

   convert various bioinformatics formats

   :homepage: http://bioconvert.readthedocs.io/
   :license: GPL / GPL3
   :recipe: /`bioconvert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconvert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconvert/meta.yaml>`_

   


.. conda:package:: bioconvert

   |downloads_bioconvert| |docker_bioconvert|

   :versions: 0.2.0-1, 0.0.10-1, 0.0.10-0
   
   :depends bamtools: 
   :depends bcftools: 
   :depends bedtools: 
   :depends bioawk: 
   :depends biopython: 
   :depends colorlog: 
   :depends deeptools: 
   :depends dsrc: 
   :depends easydev: >=0.9.36
   :depends go: 1.10.3
   :depends mappy: 
   :depends matplotlib: 
   :depends mawk: 
   :depends networkx: 
   :depends pandas: 
   :depends pbzip2: 
   :depends pigz: 
   :depends plink: 
   :depends pyexcel: 
   :depends pyexcel-ods3: 
   :depends pyexcel-xls: 
   :depends pysam: 
   :depends python: >=3.5,<3.6.0a0
   :depends pyyaml: 
   :depends sambamba: 
   :depends samtools: 
   :depends sed: 
   :depends seqtk: 
   :depends squizz: 
   :depends sra-tools: 
   :depends ucsc-bedgraphtobigwig: 
   :depends ucsc-bigwigtobedgraph: 
   :depends ucsc-fatotwobit: 
   :depends ucsc-twobittofa: 
   :depends wiggletools: 
   :depends xlrd: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconvert

   and update with::

      conda update bioconvert

   or use the docker container::

      docker pull quay.io/biocontainers/bioconvert:<tag>

   (see `bioconvert/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconvert| image:: https://img.shields.io/conda/dn/bioconda/bioconvert.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconvert| image:: https://quay.io/repository/biocontainers/bioconvert/status
   :target: https://quay.io/repository/biocontainers/bioconvert
.. _`bioconvert/tags`: https://quay.io/repository/biocontainers/bioconvert?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconvert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconvert/README.html