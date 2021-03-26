:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2genome'
.. highlight: bash

vcf2genome
==========

.. conda:recipe:: vcf2genome
   :replaces_section_title:
   :noindex:

   A tool to create a draft genome file out of a GATK VCF file and enabling users to filter the VCF in a single step.

   :homepage: https://github.com/apeltzer/vcf2genome
   :license: GPLv3
   :recipe: /`vcf2genome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2genome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2genome/meta.yaml>`_

   


.. conda:package:: vcf2genome

   |downloads_vcf2genome| |docker_vcf2genome|

   :versions:
      
      

      ``0.91-2``,  ``0.91-1``,  ``0.91-0``

      

   
   :depends openjdk: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcf2genome

   and update with::

      conda update vcf2genome

   or use the docker container::

      docker pull quay.io/biocontainers/vcf2genome:<tag>

   (see `vcf2genome/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf2genome| image:: https://img.shields.io/conda/dn/bioconda/vcf2genome.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2genome
   :alt:   (downloads)
.. |docker_vcf2genome| image:: https://quay.io/repository/biocontainers/vcf2genome/status
   :target: https://quay.io/repository/biocontainers/vcf2genome
.. _`vcf2genome/tags`: https://quay.io/repository/biocontainers/vcf2genome?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2genome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2genome/README.html