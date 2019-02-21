:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcftools-snvphyl-plugin'
.. highlight: bash

bcftools-snvphyl-plugin
=======================

.. conda:recipe:: bcftools-snvphyl-plugin
   :replaces_section_title:

   The SNVPhyl \(Single Nucleotide Variant PHYLogenomics\) pipeline is a pipeline for identifying Single Nucleotide Variants \(SNV\) within a collection\\ of microbial genomes and constructing a phylogenetic tree. This package is the bcftools C plugin

   :homepage: https://github.com/phac-nml/snvphyl-tools
   :license: Apache / Apache-2.0
   :recipe: /`bcftools-snvphyl-plugin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools-snvphyl-plugin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools-snvphyl-plugin/meta.yaml>`_

   


.. conda:package:: bcftools-snvphyl-plugin

   |downloads_bcftools-snvphyl-plugin| |docker_bcftools-snvphyl-plugin|

   :versions: 1.9-0, 1.8-2, 1.8-0, 1.6-1, 1.6-0, 1.5-0
   
   :depends bcftools: 1.9.*
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends curl: >=7.59.0,<8.0a0
   
   :depends libgcc-ng: >=4.9
   
   :depends xz: >=5.2.4,<5.3.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcftools-snvphyl-plugin

   and update with::

      conda update bcftools-snvphyl-plugin

   or use the docker container::

      docker pull quay.io/biocontainers/bcftools-snvphyl-plugin:<tag>

   (see `bcftools-snvphyl-plugin/tags`_ for valid values for ``<tag>``)


.. |downloads_bcftools-snvphyl-plugin| image:: https://img.shields.io/conda/dn/bioconda/bcftools-snvphyl-plugin.svg?style=flat
   :alt:   (downloads)
.. |docker_bcftools-snvphyl-plugin| image:: https://quay.io/repository/biocontainers/bcftools-snvphyl-plugin/status
   :target: https://quay.io/repository/biocontainers/bcftools-snvphyl-plugin
.. _`bcftools-snvphyl-plugin/tags`: https://quay.io/repository/biocontainers/bcftools-snvphyl-plugin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcftools-snvphyl-plugin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcftools-snvphyl-plugin/README.html