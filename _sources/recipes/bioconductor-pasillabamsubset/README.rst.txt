:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pasillabamsubset'
.. highlight: bash

bioconductor-pasillabamsubset
=============================

.. conda:recipe:: bioconductor-pasillabamsubset
   :replaces_section_title:

   Subset of BAM files from \"Pasilla\" experiment

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/pasillaBamSubset.html
   :license: LGPL
   :recipe: /`bioconductor-pasillabamsubset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pasillabamsubset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pasillabamsubset/meta.yaml>`_

   Subset of BAM files untreated1.bam \(single\-end reads\) and untreated3.bam \(paired\-end reads\) from \"Pasilla\" experiment \(Pasilla knock\-down by Brooks et al.\, Genome Research 2011\). See the vignette in the pasilla data package for how BAM files untreated1.bam and untreated3.bam were obtained from the RNA\-Seq read sequence data that is provided by NCBI Gene Expression Omnibus under accession numbers GSM461176 to GSM461181.  Also contains the DNA sequence for fly chromosome 4 to which the reads can be mapped.


.. conda:package:: bioconductor-pasillabamsubset

   |downloads_bioconductor-pasillabamsubset| |docker_bioconductor-pasillabamsubset|

   :versions: 0.26.0-0, 0.24.0-0, 0.22.0-1, 0.22.0-0, 0.20.0-0
   
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pasillabamsubset

   and update with::

      conda update bioconductor-pasillabamsubset

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pasillabamsubset:<tag>

   (see `bioconductor-pasillabamsubset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pasillabamsubset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pasillabamsubset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pasillabamsubset
   :alt:   (downloads)
.. |docker_bioconductor-pasillabamsubset| image:: https://quay.io/repository/biocontainers/bioconductor-pasillabamsubset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pasillabamsubset
.. _`bioconductor-pasillabamsubset/tags`: https://quay.io/repository/biocontainers/bioconductor-pasillabamsubset?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pasillabamsubset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pasillabamsubset/README.html