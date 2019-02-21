:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-amber'
.. highlight: bash

hmftools-amber
==============

.. conda:recipe:: hmftools-amber
   :replaces_section_title:

   AMBER is designed to generate a tumor BAF file for use in PURPLE. Looking directly at the bam files\, it locates heterozygous sites within the reference sample then calculates the allelic frequency of corresponding sites in the tumour

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/amber
   :license: MIT / MIT
   :recipe: /`hmftools-amber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-amber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-amber/meta.yaml>`_

   


.. conda:package:: hmftools-amber

   |downloads_hmftools-amber| |docker_hmftools-amber|

   :versions: 2.0-0
   
   :depends bioconductor-copynumber: 
   
   :depends openjdk: >=8
   
   :depends zlib: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmftools-amber

   and update with::

      conda update hmftools-amber

   or use the docker container::

      docker pull quay.io/biocontainers/hmftools-amber:<tag>

   (see `hmftools-amber/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-amber| image:: https://img.shields.io/conda/dn/bioconda/hmftools-amber.svg?style=flat
   :alt:   (downloads)
.. |docker_hmftools-amber| image:: https://quay.io/repository/biocontainers/hmftools-amber/status
   :target: https://quay.io/repository/biocontainers/hmftools-amber
.. _`hmftools-amber/tags`: https://quay.io/repository/biocontainers/hmftools-amber?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-amber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-amber/README.html