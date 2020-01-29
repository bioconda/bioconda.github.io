:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snp-pileup'
.. highlight: bash

snp-pileup
==========

.. conda:recipe:: snp-pileup
   :replaces_section_title:

   Compute SNP pileup at reference positions in one or more input bam files. Output is ready for the R package facets

   :homepage: https://github.com/mskcc/facets
   :license: MIT / MIT
   :recipe: /`snp-pileup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-pileup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-pileup/meta.yaml>`_

   


.. conda:package:: snp-pileup

   |downloads_snp-pileup| |docker_snp-pileup|

   :versions: 0.5.14-2, 0.5.14-1, 0.5.14-0, v0.5.14-0
   
   :depends htslib: >=1.9,<1.10.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snp-pileup

   and update with::

      conda update snp-pileup

   or use the docker container::

      docker pull quay.io/biocontainers/snp-pileup:<tag>

   (see `snp-pileup/tags`_ for valid values for ``<tag>``)


.. |downloads_snp-pileup| image:: https://img.shields.io/conda/dn/bioconda/snp-pileup.svg?style=flat
   :target: https://anaconda.org/bioconda/snp-pileup
   :alt:   (downloads)
.. |docker_snp-pileup| image:: https://quay.io/repository/biocontainers/snp-pileup/status
   :target: https://quay.io/repository/biocontainers/snp-pileup
.. _`snp-pileup/tags`: https://quay.io/repository/biocontainers/snp-pileup?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snp-pileup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snp-pileup/README.html